const glow = document.querySelector(".cursor-glow");
window.addEventListener("mousemove", e => {
  glow.style.left = e.clientX + "px";
  glow.style.top = e.clientY + "px";
});

const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector(".nav nav");
menuBtn.addEventListener("click", () => {
  nav.style.display = nav.style.display === "flex" ? "" : "flex";
  nav.style.position = "absolute";
  nav.style.top = "78px";
  nav.style.left = "0";
  nav.style.right = "0";
  nav.style.padding = "20px 6vw";
  nav.style.background = "#0b0d0f";
  nav.style.flexDirection = "column";
  nav.style.borderBottom = "1px solid rgba(255,255,255,.11)";
});
