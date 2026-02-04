import bcrypt from "bcrypt";
import { supabase } from "../config/supabase.js";

export const signup = async (req, res) => {
  try {
    const { name, email, age, location, password } = req.body;

   
    if (!name || !email || !age || !location || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    
    const { data: existingUser } = await supabase
      .from("users")
      .select("id")
      .eq("email", email)
      .single();

    if (existingUser) {
      return res.status(400).json({ message: "Email already exists" });
    }

    
    const hashedPassword = await bcrypt.hash(password, 10);

    
    const { error } = await supabase.from("users").insert([
      {
        name,
        email,
        age,
        location,
        password: hashedPassword
      }
    ]);

    if (error) {
      return res.status(500).json({ message: error.message });
    }

    res.status(201).json({ message: "User registered successfully" });

  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

export const getProfile = async (req, res) => {
  try {
    const { name } = req.query;

    if (!name) {
      return res.status(400).json({ message: "Name query is required" });
    }

    const { data, error } = await supabase
      .from("users")
      .select("id, name, email, age, location")
      .eq("name", name)
      .single();

    if (!data) {
      return res.status(404).json({ message: "User not found" });
    }

    if (error) {
      return res.status(500).json({ message: error.message });
    }

    res.json(data);

  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};
