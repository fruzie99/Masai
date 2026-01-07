import {
  collection,
  addDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  doc,
  query,
  where,
} from "firebase/firestore";
import { db } from "@/lib/firebase";

const todosRef = collection(db, "todos");

// Get todos for logged-in user
export const getTodos = async (uid) => {
  const q = query(todosRef, where("uid", "==", uid));
  const snapshot = await getDocs(q);
  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
};

// Add todo
export const addTodo = (todo) => {
  return addDoc(todosRef, todo);
};

// Update todo
export const updateTodo = (id, data) => {
  const todoDoc = doc(db, "todos", id);
  return updateDoc(todoDoc, data);
};

// Delete todo
export const deleteTodo = (id) => {
  const todoDoc = doc(db, "todos", id);
  return deleteDoc(todoDoc);
};
