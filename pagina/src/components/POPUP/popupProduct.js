const modal = document.getElementById("myModal");
const btn = document.getElementById("myBtn");
const closeBtn = document.getElementsByClassName("close")[0];

// Função para abrir a janela modal
function open() {
  modal.style.display = "block";
}

// Função para fechar a janela modal
function close() {
  modal.style.display = "none";
}

// Adiciona um ouvinte de evento ao botão para abrir a janela modal
btn.addEventListener("click", open);

// Adiciona um ouvinte de evento ao botão de fechar a janela modal
closeBtn.addEventListener("click", close);

// Adiciona um ouvinte de evento ao clique fora da janela modal para fechá-la
window.addEventListener("click", function(event) {
  if (event.target === modal) {
    close();
  }
});

// Comentários explicativos
// modal - representa a janela modal
// btn - representa o botão que abre a janela modal
// closeBtn - representa o botão que fecha a janela modal
// openModal() - função para abrir a janela modal
// closeModal() - função para fechar a janela modal
// addEventListener() - adiciona um ouvinte de evento a um elemento
// window - representa a janela do navegador
// target - representa o elemento que recebeu o evento
