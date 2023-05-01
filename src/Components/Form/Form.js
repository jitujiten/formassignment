import React, { useState } from "react";
import "./Form.css";
import axios from "axios";

const firebaseUrl = "https://formapp-ba5d6-default-rtdb.firebaseio.com/";

const defaultObj = {
  name: "",
  dateOfBirthOrAge: "",
  sex: "",
  mobile: "",
  idType: "",
  idNumber: "",
  entryLabel: "",
  guardianName: "",
  email: "",
  emergencyContact: "",
  Address: "",
  state: "",
  city: "",
  Country: "india",
  pinCode: "",
  Occupation: "",
  Religion: "",
  maritalStatus: "",
  Nationality: "indian",
};
const PersonalDetailsForm = () => {
  const [formData, setFormData] = useState(defaultObj);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post(`${firebaseUrl}/data.json`, formData)
      .then((response) => {
        console.log("Data sent to Firebase Realtime Database successfully!");
      })
      .catch((error) => {
        alert("Error sending data to Firebase Realtime Database:", error);
      });
    setFormData(defaultObj);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div id="segment">
        <div>
          <h2>Personal Details:-</h2>
        </div>
        <div>
          <label htmlFor="name">
            Name<span className="required">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            placeholder="Enter Name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="dateOfBirthOrAge">
            Date of Birth or Age<span className="required">*</span>
          </label>
          <input
            type="text"
            id="dateOfBirthOrAge"
            name="dateOfBirthOrAge"
            required
            placeholder="DD/MM/YYYY or Age In Years"
            value={formData.dateOfBirthOrAge}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="sex">
            Sex<span className="required">*</span>
          </label>
          <select
            id="sex"
            name="sex"
            required
            value={formData.sex}
            onChange={handleInputChange}
          >
            <option value="">Enter Sex</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div>
          <label htmlFor="mobile">
            Mobile<span className="required">*</span>
          </label>
          <input
            type="tel"
            id="mobile"
            name="mobile"
            required
            placeholder="Enter Mobile"
            value={formData.mobile}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="idType">Government Issued ID Type*</label>
          <select
            id="idType"
            name="idType"
            required
            value={formData.idType}
            onChange={handleInputChange}
          >
            <option value="">ID Type</option>
            <option value="aadhaar">Aadhaar Card</option>
            <option value="pan">PAN Card</option>
          </select>
        </div>
        <div>
          <label htmlFor="idNumber">Government Issued ID Number*</label>
          <input
            type="text"
            id="idNumber"
            name="idNumber"
            required
            placeholder="Enter Govt ID"
            minLength={formData.idType === "aadhaar" ? 12 : 10}
            pattern={
              formData.idType === "aadhaar" ? "[0-9]{12}" : "[A-Z0-9]{10}"
            }
            value={formData.idNumber}
            onChange={handleInputChange}
          />
        </div>
      </div>
      <div id="segment">
        <div>
          {" "}
          <h2>Contact Details</h2>
        </div>

        <label htmlFor="entryLabel">Entry Label:</label>
        <select
          id="entryLabel"
          name="entryLabel"
          placeholder="Enter Label"
          onChange={handleInputChange}
          value={formData.entryLabel}
        >
          <option value="">-- Select --</option>
          <option value="Mr.">Mr.</option>
          <option value="Mrs.">Mrs.</option>
          <option value="Ms.">Ms.</option>
        </select>
        <label htmlFor="guardianName">guardianName:</label>
        <input
          id="guardianName"
          type="text"
          name="guardianName"
          placeholder="Enter GuardianName"
          value={formData.guardianName}
          onChange={handleInputChange}
        />
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="Enter email"
          value={formData.email}
          onChange={handleInputChange}
        />
        <label htmlFor="emergencyContact">Emergency Contact:</label>
        <input
          id="emergencyContact"
          type="text"
          name="emergencyContact"
          placeholder="Enter emergency Contact Number"
          value={formData.emergencyContact}
          onChange={handleInputChange}
        />
      </div>
      <div id="segment">
        {" "}
        <div>
          <h2>Address Details</h2>
        </div>
        <div>
          <label htmlFor="Address">Address</label>
          <input
            type="text"
            id="Address"
            name="Address"
            placeholder="Enter Address"
            value={formData.Address}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="state">state</label>
          <select
            id="state"
            name="state"
            value={formData.state}
            onChange={handleInputChange}
          >
            <option value="">-- Enter State --</option>
            <option value="AndhraPradesh">Andhra Pradesh</option>
            <option value="Arunachal Pradesh">Arunachal Pradesh</option>
            <option value="Assam">Assam</option>
            <option value="Bihar">Bihar</option>
            <option value="Chhattisgarh">Chhattisgarh</option>
            <option value="Goa">Goa</option>
            <option value="Gujarat">Gujarat</option>
            <option value="Haryana">Haryana</option>
            <option value="Himachal Pradesh">Himachal Pradesh</option>
            <option value="Jharkhand">Jharkhand</option>
            <option value="Karnataka">Karnataka</option>
            <option value="Kerala">Kerala</option>
            <option value="Madhya Pradesh">Madhya Pradesh</option>
            <option value="Maharashtra">Maharashtra</option>
            <option value="Manipur">Manipur</option>
            <option value="Meghalaya">Meghalaya</option>
            <option value="Mizoram">Mizoram</option>
            <option value="Nagaland">Nagaland</option>
            <option value="Odisha">Odisha</option>
            <option value="Punjab">Punjab</option>
            <option value="Rajasthan">Rajasthan</option>
            <option value="Sikkim">Sikkim</option>
            <option value="Tamil Nadu">Tamil Nadu</option>
            <option value="Telangana">Telangana</option>
            <option value="Tripura">Tripura</option>
            <option value="Uttar Pradesh">Uttar Pradesh</option>
            <option value="Uttarakhand">Uttarakhand</option>
            <option value="West Bengal">West Bengal</option>
          </select>
        </div>
        <div>
          <label htmlFor="city">city</label>
          <input
            type="text"
            id="city"
            name="city"
            placeholder="Enter City"
            value={formData.city}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="Country">Country</label>
          <input
            type="text"
            id="Country"
            name="Country"
            defaultValue={formData.Country}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="pinCode">pinCode</label>
          <input
            type="number"
            id="pinCode"
            name="pinCode"
            placeholder="Enter pinCode"
            value={formData.pinCode}
            onChange={handleInputChange}
          />
        </div>
      </div>
      <div id="segment">
        <div>
          <h2>Other Details</h2>
        </div>
        <div>
          <label htmlFor="Occupation">Occupation</label>
          <input
            type="text"
            id="Occupation"
            name="Occupation"
            placeholder="Enter Occupation"
            value={formData.Occupation}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="Religion">Religion</label>
          <input
            type="text"
            id="Religion"
            name="Religion"
            placeholder="Enter Religion"
            value={formData.Religion}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="maritalStatus">Maritial Status</label>
          <select
            id="maritalStatus"
            name="maritalStatus"
            value={formData.maritalStatus}
            onChange={handleInputChange}
          >
            <option value="">-- Enter marital Status --</option>
            <option value="single">Single</option>
            <option value="married">Married</option>
            <option value="divorced">Divorced</option>
            <option value="widowed">Widowed</option>
          </select>
        </div>
        <div>
          <label htmlFor="BloodGroup">BloodGroup</label>
          <select
            id="BloodGroup"
            name="BloodGroup"
            value={formData.BloodGroup}
            onChange={handleInputChange}
          >
            <option value="">-- Enter BloodGroup --</option>
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
          </select>
        </div>
        <div>
          <label htmlFor="Nationality">Nationality</label>
          <input
            type="text"
            id="Nationality"
            name="Nationality"
            placeholder="Enter Nationality"
            value={formData.Nationality}
            onChange={handleInputChange}
          />
        </div>
      </div>
      <button type="submit">Submit</button>{" "}
      <button onClick={() => setFormData(defaultObj)} id="cancel">
        Cancel
      </button>
    </form>
  );
};

export default PersonalDetailsForm;
