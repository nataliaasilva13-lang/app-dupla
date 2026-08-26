import { collection, addDoc, getDocs, deleteDoc, doc } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";
import { db } from "./firebaseConfig.js";

const mural = document.getElementById("mural");
const form = document.getElementById("meuForm");
const btnLimpar = document.getElementById("btnLimpar");

// Carregar mensagens salvas ao abrir a página
async function carregarMensagens() {
  mural.innerHTML = "";
  try {
    const querySnapshot = await getDocs(collection(db, "recados"));
    querySnapshot.forEach((documento) => {
      const dados = documento.data();
      mural.innerHTML += `
        <div class="mensagem">
          <h3>${dados.nome}</h3>
          <p>${dados.mensagem}</p>
        </div>
      `;
    });
  } catch (erro) {
    console.error("Erro ao carregar mensagens:", erro);
  }
}

// Salvar mensagem no Firebase
form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const nome = document.getElementById("nome").value;
  const mensagem = document.getElementById("mensagem").value;

  try {
    await addDoc(collection(db, "recados"), {
      nome: nome,
      mensagem: mensagem
    });

    form.reset();
    carregarMensagens();
  } catch (erro) {
    console.error("Erro ao publicar:", erro);
  }
});

// Limpar todo o mural do Firebase
btnLimpar.addEventListener("click", async () => {
  if (!confirm("Deseja mesmo apagar todas as mensagens?")) return;

  try {
    const querySnapshot = await getDocs(collection(db, "recados"));
    const promessas = querySnapshot.docs.map((d) => deleteDoc(doc(db, "recados", d.id)));
    await Promise.all(promessas);
    
    mural.innerHTML = "";
  } catch (erro) {
    console.error("Erro ao limpar:", erro);
  }
});

carregarMensagens();