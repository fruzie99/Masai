const notesArea = document.getElementById("notes");
const saveBtn = document.getElementById("saveBtn");
const loadBtn = document.getElementById("loadBtn");
const clearBtn = document.getElementById("clearBtn");


window.onload = function () {
  const savedNotes = localStorage.getItem("userNotes");
  if (savedNotes) notesArea.value = savedNotes;
};


saveBtn.addEventListener("click", () => {
  const text = notesArea.value.trim();

  if (text === "") {
    alert("Cannot save empty notes!");
    return;
  }

  localStorage.setItem("userNotes", text);
  alert("Notes saved!");
});


loadBtn.addEventListener("click", () => {
  const savedNotes = localStorage.getItem("userNotes");
  if (savedNotes) {
    notesArea.value = savedNotes;
  } else {
    alert("No notes found!");
  }
});


clearBtn.addEventListener("click", () => {
  localStorage.removeItem("userNotes");
  notesArea.value = "";
});
