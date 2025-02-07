import { useState } from "react";
import axios from "axios";
import "./style.css";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    locality: "",
    wasteCollectedDaily: "",
    segregateWaste: "",
    cleanDrains: "",
    awareRRR: "",
    usedPublicToilet: "",
    cleanPublicToilet: "",
    awareCTLocation: "",
    cleanlinessNeighborhood: "",
    cleanlinessCity: "",
  });
  const localities = [
    "Connaught Place",
    "Gole Market",
    "DIZ Area",
    "North Avenue Talkatora Road",
    "Bangali Market",
    "Lodhi Colony",
    "Lok Kalyan Marg and PM House",
    "Khan Market",
    "Jor Bagh",
    "Chanakya Puri",
    "Sarojini Nagar",
    "Moti Bagh",
    "Laxmi Bai Nagar",
    "Tilak Nagar",
  ];
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://swachhata-cell-backend.vercel.app/submit", formData);
      alert("Response submitted successfully!");
      setFormData({
        name: "",
        email: "",
        locality: "",
        wasteCollectedDaily: "",
        segregateWaste: "",
        cleanDrains: "",
        awareRRR: "",
        usedPublicToilet: "",
        cleanPublicToilet: "",
        awareCTLocation: "",
        cleanlinessNeighborhood: "",
        cleanlinessCity: "",
      });
    } catch (err) {
      console.log(err);
      alert("Error submitting response");
    }
  };

  return (
    <div className="survey-container">
      <h2>City Cleanliness Survey</h2>
      <form onSubmit={handleSubmit} className="survey-form">
        <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
        <label>Select Your Locality</label>
        <select name="locality" value={formData.locality} onChange={handleChange} required>
          <option value="">Select Locality</option>
          {localities.map((loc, index) => (
            <option key={index} value={loc}>
              {loc}
            </option>
          ))}
        </select>

        <label>1.1 Is the waste collected daily from your household?</label>
        <select name="wasteCollectedDaily" onChange={handleChange} required>
          <option value="">Select</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>

        <label>1.2 Do you segregate waste (Wet & Dry) separately in your household?</label>
        <select name="segregateWaste" onChange={handleChange} required>
          <option value="">Select</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>

        <label>1.3 Are the drains or nallahs in your neighbourhood visibly clean?</label>
        <select name="cleanDrains" onChange={handleChange} required>
          <option value="">Select</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>

        <label>1.4 Are you aware of the RRR (Reduce, Reuse and Recycle) Center in your city?</label>
        <select name="awareRRR" onChange={handleChange} required>
          <option value="">Select</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>

        <label>1.5 Have you recently used a Community/Public Toilet (CT/PT) in your city?</label>
        <select name="usedPublicToilet" onChange={handleChange} required>
          <option value="">Select</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>

        <label>1.5 Are the Community/Public Toilets in the city clean & well maintained?</label>
        <select name="cleanPublicToilet" onChange={handleChange} required>
          <option value="">Select</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>

        <label>1.6 Are you aware that you can find the nearest Community/Public Toilet (CT/PT) on digital maps?</label>
        <select name="awareCTLocation" onChange={handleChange} required>
          <option value="">Select</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>

        <label>1.7 How will you rate the overall cleanliness of your neighbourhood?</label>
        <select name="cleanlinessNeighborhood" onChange={handleChange} required>
          <option value="">Select</option>
          <option value="Excellent">Excellent</option>
          <option value="Good">Good</option>
          <option value="Average">Average</option>
          <option value="Poor">Poor</option>
        </select>

        <label>1.8 How will you rate the overall cleanliness of your city?</label>
        <select name="cleanlinessCity" onChange={handleChange} required>
          <option value="">Select</option>
          <option value="Excellent">Excellent</option>
          <option value="Good">Good</option>
          <option value="Average">Average</option>
          <option value="Poor">Poor</option>
        </select>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
