const container = document.getElementById("container");
const addBtn = document.getElementById("addBtn");
const removeBtn = document.getElementById("removeBtn");


addBtn.addEventListener("click", () => {
  const p = document.createElement("p");
  p.textContent = "This is a new paragraph.";
  container.appendChild(p);
});


removeBtn.addEventListener("click", () => {
  if (container.lastChild) {
    container.removeChild(container.lastChild);
  }
});
