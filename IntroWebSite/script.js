let intro = document.querySelector(".intro");
let logoHeader = document.querySelector(".logo-header");
let logoSpan = document.querySelectorAll(".logo");

window.addEventListener("DOMContentLoaded", () => {
  // Set the initial color to white
  logoSpan.forEach((span) => {
    span.style.color = "white";
  });

  setTimeout(() => {
    logoSpan.forEach((span, idx) => {
      setTimeout(() => {
        span.style.transform = "rotate(360deg)";
        span.style.color = getRandomColor();
        span.style.transition = "transform 1s ease-in-out, color 1s ease-in-out";
      }, (idx + 1) * 400);
    });

    setTimeout(() => {
      intro.style.top = "-100vh";
    }, 2000);

  });

  function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
});
