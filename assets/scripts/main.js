document.getElementById("toggle").onclick = () => {
  if (document.body.classList.contains("dark-theme")) {
    document.body.classList.remove("dark-theme");
    document.getElementById("toggle").src = "assets/icons/moon.webp";
  } else {
    document.body.classList.add("dark-theme");
    document.getElementById("toggle").src = "assets/icons/moon-dark.webp";
  }
};
