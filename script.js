const botoesComprar = document.querySelectorAll(".product-item button");

botoesComprar.forEach(botao => {
  botao.addEventListener("click", function() {
    const usuarioAutenticado = false;

    if (!usuarioAutenticado) {
      alert("Por favor, faça login para continuar com a compra.");
      window.location.href = "contato.html";
    } else {
      alert("Produto adicionado ao carrinho!");
    }
  });
});

const itensProduto = document.querySelectorAll(".product-item");

itensProduto.forEach(item => {
  item.addEventListener("mouseover", function() {
    item.style.transform = "scale(1.05)";
    item.style.transition = "transform 0.3s ease";
  });

  item.addEventListener("mouseout", function() {
    item.style.transform = "scale(1)";
  });
});

let slideIndex = 0;
const slides = document.querySelectorAll(".carrossel-item");
const totalSlides = slides.length;

function mostrarSlides() {
  slides.forEach(slide => slide.classList.remove("active"));

  slideIndex++;

  if (slideIndex >= totalSlides) {
    slideIndex = 0;
  }

  slides[slideIndex].classList.add("active");

  setTimeout(mostrarSlides, 3000);
}

function mudarImagem(n) {
  slides[slideIndex].classList.remove("active");

  slideIndex += n;

  if (slideIndex >= totalSlides) {
    slideIndex = 0;
  } else if (slideIndex < 0) {
    slideIndex = totalSlides - 1;
  }

  slides[slideIndex].classList.add("active");
}

mostrarSlides();

