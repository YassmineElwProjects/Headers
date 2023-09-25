let intro = document.querySelector(".intro");
let logoHeader = document.querySelector(".logo-header");
let logoSpan = document.querySelectorAll(".logo");

window.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    logoSpan.forEach((span, idx) => {
      setTimeout(() => {
        span.style.opacity = 1;
        span.style.transform = "translateY(0)";
        span.style.transition = "opacity 0.5s ease-in-out, transform 0.5s ease-in-out";
      }, (idx + 1) * 400);
    });

    setTimeout(() => {
      logoSpan.forEach((span, idx) => {
        setTimeout(() => {
          span.style.opacity = 0;
          span.style.transform = "translateY(-100px)"; // Move the logo upward
        }, (idx + 1) * 50);
      });
    }, 2000);

    setTimeout(() => {
      intro.style.top = "-100vh";
    }, 2400);
  });
});
