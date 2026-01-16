import express from "express";
import fs from "fs";

const app = express();
const PORT = 3001;


app.use(express.json());


const readData = () => {
  const data = fs.readFileSync("db.json", "utf-8");
  return JSON.parse(data);
};

const writeData = (data) => {
  fs.writeFileSync("db.json", JSON.stringify(data, null, 2));
};



// GET 
app.get("/students", (req, res) => {
  const data = readData();
  res.json(data.students);
});

// POST 
app.post("/students", (req, res) => {
  const { id, name, course, year } = req.body;

  if (!id || !name || !course || !year) {
    return res.status(400).json({
      message: "All fields are required"
    });
  }

  const data = readData();
  const exists = data.students.find((s) => s.id === id);

  if (exists) {
    return res.status(409).json({
      message: "Student with this ID already exists"
    });
  }

  const newStudent = { id, name, course, year };
  data.students.push(newStudent);
  writeData(data);

  res.status(201).json({
    message: "Student added successfully",
    student: newStudent
  });
});

// PUT 
app.put("/students", (req, res) => {
  const { id, name, course, year } = req.body;

  const data = readData();
  const studentIndex = data.students.findIndex(
    (s) => s.id === id
  );

  if (studentIndex === -1) {
    return res.status(404).json({
      message: "Student not found"
    });
  }

  data.students[studentIndex] = {
    ...data.students[studentIndex],
    name: name ?? data.students[studentIndex].name,
    course: course ?? data.students[studentIndex].course,
    year: year ?? data.students[studentIndex].year
  };

  writeData(data);

  res.json({
    message: "Student updated successfully",
    student: data.students[studentIndex]
  });
});

// DELETE 
app.delete("/students/:id", (req, res) => {
  const id = Number(req.params.id);
  const data = readData();

  const filtered = data.students.filter(
    (s) => s.id !== id
  );

  if (filtered.length === data.students.length) {
    return res.status(404).json({
      message: "Student not found"
    });
  }

  data.students = filtered;
  writeData(data);

  res.json({
    message: "Student deleted successfully"
  });
});

// Root route
app.get("/", (req, res) => {
  res.send("Student Management API is running");
});

// Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
