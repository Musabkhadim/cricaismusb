"use client";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-quill/dist/quill.snow.css";
import ReactQuill from "react-quill";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../app/firebase/config"; // Adjust path as needed

function Reactquill1({ setFormData1 }) {
  const [formData, setFormData] = useState({
    title: "",
    image: null,
    description: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setFormData1 && setFormData1((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData((prev) => ({ ...prev, image: file }));
    setFormData1 && setFormData1((prev) => ({ ...prev, image: file }));
  };

  const handleQuillChange = (value) => {
    const plainText = value.replace(/<[^>]+>/g, "");
    if (plainText.length <= 260) {
      setFormData((prev) => ({ ...prev, description: value }));
      setFormData1 && setFormData1((prev) => ({ ...prev, description: value }));
      setError("");
    } else {
      setError("You can write up to 260 characters only.");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const plainText = formData.description.replace(/<[^>]+>/g, "");

    if (!plainText.trim()) {
      alert("Please write something in the description before submitting.");
      return;
    }

    if (plainText.length > 260) {
      alert("Description must be under 260 characters.");
      return;
    }

    try {
      await addDoc(collection(db, "directory"), {
        directory: formData.description,
      });

      alert("Content submitted successfully!");
      setFormData({ title: "", image: null, description: "" });
      setFormData1 && setFormData1({ title: "", image: null, description: "" });
    } catch (error) {
      console.error("Firestore error:", error);
      alert("Error submitting the content. Please try again.");
    }
  };

  return (
    <div className="container mt-5">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <ReactQuill
            value={formData.description}
            onChange={handleQuillChange}
            theme="snow"
            placeholder="Write Here (Max 260 characters)"
            modules={{
              toolbar: [
                [{ header: "1" }, { header: "2" }, { font: [] }],
                [{ list: "ordered" }, { list: "bullet" }],
                ["bold", "italic", "underline", "strike"],
                ["link"],
                ["clean"],
              ],
            }}
            style={{ height: "200px", marginBottom: "50px" }}
          />
          <small className="text-muted">
            Characters: {formData.description.replace(/<[^>]+>/g, "").length}/260
          </small>
          {error && <div className="text-danger">{error}</div>}
        </div>
        
      </form>
    </div>
  );
}

export default Reactquill1;