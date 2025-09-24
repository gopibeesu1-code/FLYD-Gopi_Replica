import React, { useState, useEffect } from "react";
// import Student from "./components/StudentTable/Student";
import studentimg from "../assets/student.png";  
import Accommodationsupport from "../assets/Accommodationsupport.png";
import Admissionsuccessrate from "../assets/admissionsuccessrate.png"
import Completeapplicationssupport from "../assets/Completeapplicationssupport.png";
import Feepayment from "../assets/Feepayment.png";
import GuidanceonVisa from "../assets/guidanceonVisa.png";
import Identifying from "../assets/Identifying.png";
import Inputsoncareeropportunities from "../assets/Inputsoncareeropportunities.png";
import Mockinterviewsessions from "../assets/Mockinterviewsessions.png";
import Personalizedcounselling from "../assets/personalizedcounselling.png";
import Universitywebinars from "../assets/Universitywebinars.png";
import Predeparturebriefing from "../assets/Predeparturebriefing.png";
import Visaprocedures from "../assets/visaprocedures.png";
import trustedpartner from "../assets/trustedpartner.png";
import Scholarships from "../assets/Scholarships.png";
import expertise from "../assets/expertise.png";
import guidance from "../assets/guidance.png";
import directrepresentative from "../assets/directrepresentative.png";
import affordablerange from "../assets/affordablerange.png";
import extensivesupport from "../assets/extensivesupport.png";
import FirstConsultant from "../assets/FirstConsultant.png";
import Branches from "../assets/Branches.png";
import { MdLocationOn, MdPhone, MdEmail } from "react-icons/md";
import "./Home.css";
import { FaMobileAlt } from "react-icons/fa";
import "./Home.css";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from "react-router-dom";
import samplePDF from "../assets/sample.pdf";

import { FaEdit, FaTrash, FaFilePdf } from "react-icons/fa";



const Home = () => {

const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
  });

  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" }); // typing chesthe error clear avvudam
  };

  const validate = () => {
    const { name, email, phone, country } = formData;
    let newErrors = {};

    if (!name) newErrors.name = "Please enter your name";
    if (!email) newErrors.email = "Please enter your email";
    if (!phone) newErrors.phone = "Please enter your phone number";
    if (!country) newErrors.country = "Please enter your country";

    // Email & phone validation
    const emailPattern = /\S+@\S+\.\S+/;
    const phonePattern = /^[0-9]{10}$/;

    if (email && !emailPattern.test(email))
      newErrors.email = "Invalid email address";

    if (phone && !phonePattern.test(phone))
      newErrors.phone = "Phone must be 10 digits";
   
    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      setMessage({ type: "error", text: "Please fix the errors above" });
      return false;
    }

    // ✅ Success message
    setMessage({ type: "success", text: "Register Success!" });
    
    // ✅ 1s తర్వాత fields reset అవ్వాలి
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        phone: "",
        country: "",
      });
      setMessage(null); // message కూడా పోతుంది
    }, 1000);

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validate();
  };


    const location = useLocation();
  const rowData = location.state?.rowData || null;

  const navigate = useNavigate();
  const initialStudents = [
    {
      id: "19010010001",
      fullname: "Leslie Alexander",
      graduationDate: "31-07-2024",
      dateOfEntry: "16-09-2019",
      duration: "4 years 10 months",
      gpa: 3.32,
      status: "Success",
      applications: [
        { level: "Masters", country: "USA", year: 2025, course: "Computer Science" },
        { level: "Graduation", country: "UK", year: 2023, course: "Engineering" },
      ],
    },
    {
      id: "19010010002",
      fullname: "Robert Fox",
      graduationDate: "31-07-2024",
      dateOfEntry: "16-09-2019",
      duration: "4 years 10 months",
      gpa: 3.33,
      status: "Success",
      applications: [
        { level: "Masters", country: "Canada", year: 2025, course: "Mathematics" },
      ],
    },
  ];

 

  const [students, setStudents] = useState(initialStudents);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [editRowIndex, setEditRowIndex] = useState(null);
  const [tempRowData, setTempRowData] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deleteTarget, setDeleteTarget] = useState({ row: null, cell: null });
  

  // Edit row
  const handleEditRow = (rowIndex) => {
    setEditRowIndex(rowIndex);
    setTempRowData({ ...selectedStudent.applications[rowIndex] });
  };

  const handleInputChange = (field, value) => {
    setTempRowData({ ...tempRowData, [field]: value });
  };

  const handleUpdate = () => {
    const updatedStudent = { ...selectedStudent };
    updatedStudent.applications[editRowIndex] = tempRowData;
    setSelectedStudent(updatedStudent);
    setEditRowIndex(null);
    setTempRowData(null);
    alert("Row updated successfully");
  };

  const handleCancelEdit = () => {
    setEditRowIndex(null);
    setTempRowData(null);
  };

  // Delete
  const handleDeleteClick = (rowIndex, cell = null) => {
    setDeleteTarget({ row: rowIndex, cell });
    setShowDeleteModal(true);
  };

  const confirmDelete = () => {
    const updatedStudent = { ...selectedStudent };
    const { row, cell } = deleteTarget;
    if (cell) {
      updatedStudent.applications[row][cell] = "";
      alert(`Cell "${cell}" in row ${row + 1} deleted`);
    } else {
      updatedStudent.applications.splice(row, 1);
      alert(`Row ${row + 1} deleted`);
    }
    setSelectedStudent(updatedStudent);
    setShowDeleteModal(false);
    setDeleteTarget({ row: null, cell: null });
  };

  const cancelDelete = () => {
    setShowDeleteModal(false);
    setDeleteTarget({ row: null, cell: null });
  };

  // Download PDF
  // const handleDownload = (row) => {
  //   navigate("/pdf", { state: { rowData: row } });
  const convertToBase64 = (blob) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result);
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    });
  };
  const handlePdfPreview = async () => {
    try {
      // Load PDF from public/assets
      const response = await fetch(process.env.PUBLIC_URL + "/assets/sample.pdf");
      const blob = await response.blob();

      // Create a Blob URL for the PDF
      const fileURL = URL.createObjectURL(blob);

      // Open in new tab as PDF preview
      window.open(samplePDF, "_blank");
    } catch (error) {
      console.error("Error loading PDF:", error);
    }
  };

  return (
    <div>
      <div>
      </div>
      
    <div className="home-bg">
      <div className="main-bg">
        <div className="h3">
          <h3>
              <span>Your Best Study</span><br/>
              <span>Abroad Consultant for</span><br/>
              <span> Europe </span>
          </h3>
        </div>
        <div>
          <img src={studentimg} alt="studentlogo" className="student-img"/>
        </div>
        
<div>
      <h1 className="h1">Get Register</h1>

      {/* Top Message */}
      {message && (
        <div className={`msg-box ${message.type}`}>
          {message.text}
        </div>
      )}

      <div className="login">
        <form onSubmit={handleSubmit}>
          <div>
            {/* Name */}
            <input
              type="text"
              name="name"
              placeholder="Name"
              className={`login-holders ${errors.name ? "error-border" : ""}`     }
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && <p className="error-text">{errors.name}</p>}

            {/* Email */}
            <input
              type="text"
              name="email"
              placeholder="Email"
              className={`login-holders ${errors.email ? "error-border" : ""}`}
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <p className="error-text">{errors.email}</p>}

            {/* Phone */}
            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              className={`login-holders ${errors.phone ? "error-border" : ""}`}
              value={formData.phone}
              onChange={handleChange}
            />
            {errors.phone && <p className="error-text">{errors.phone}</p>}

            {/* Country */}
            {/* Country */}
<select 
  name="country"
  className={`select ${errors.country ? "error-border" : "" }`}
  value={formData.country}
  onChange={handleChange}
>
  <option value="">-- Select Country --</option>
  <option value="India">India</option>
  <option value="United States">United States</option>
  <option value="United Kingdom">United Kingdom</option>
  <option value="Canada">Canada</option>
  <option value="Australia">Australia</option>
  <option value="Germany">Germany</option>
  <option value="France">France</option>
  <option value="Italy">Italy</option>
  <option value="Japan">Japan</option>
  <option value="China">China</option>
  <option value="Singapore">Singapore</option>
  <option value="New Zealand">New Zealand</option>
  <option value="South Africa">South Africa</option>
</select>
{errors.country && <p className="error-text">{errors.country}</p>}


          </div>

          <div className="login-btn">
            <button type="submit" className="login-button">
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
    </div>
  </div>

    <div className="achievements">
      <h2 className="title">
        Our <span>Achievements</span>
      </h2>
      <p className="subtitle">
        Advising students the best possible guidance who intend to study abroad, 
        based on their geographic and financial consideration.
      </p>

      <div className="cards">
        <div className="card">
          <h3>11,000<span>+</span></h3>
          <p>Admitted Students</p>
        </div>
        <div className="card">
          <h3>10<span>+</span></h3>
          <p>Years of Expertise</p>
        </div>
        <div className="card">
          <h3>200<span>+</span></h3>
          <p>Partner Universities</p>
        </div>
        <div className="card">
          <h3>50<span>+</span></h3>
          <p>Crores worth of Scholarships</p>
        </div>
        <div className="card">
          <h3>5,000<span>+</span></h3>
          <p>Admissions in World Top 500</p>
        </div>
      </div>
    </div>

    <div className="achievement">
      <h1 className="title2">How FLY Ur Dream can Help you?</h1>
      <div className="cards2">

        <div className="card2 card-matter">
          <img src={Personalizedcounselling} className="card-images"/><br/>
          <p>Personalized 1:1 Counselling</p>
        </div>

        <div className="card2 card-matter">
          <img src={Identifying} className="card-images"/><br/>
          <p>Identifying the right options as per your profile, budget & aspirations</p>
        </div>

        <div className="card2 card-matter">
          <img src={Admissionsuccessrate} className="card-images"/><br/>
          <p>Providing inputs to improve your admission success rate</p>
        </div>

        <div className="card2 ">
          <img src={Universitywebinars} className="card-images card-matter"/><br/>
          <p>University webinars & Delegate interactions</p>
        </div>
      </div>

      <div className="cards2">

        <div className="card2 card-matter">
          <img src={Inputsoncareeropportunities} className="card-images"/><br/>
          <p>Inputs on career opportunities</p>
        </div>

        <div className="card2 card-matter">
          <img src={Completeapplicationssupport} className="card-images"/><br/>
          <p>Complete applications support</p>
        </div>
        <div className="card2 card-matter">
          <img src={Mockinterviewsessions} className="card-images"/><br/>
          <p>Mock interview sessions</p>
        </div>
        <div className="card2 card-matter">
          <img src={Feepayment} className="card-images"/><br/>
          <p>Fee payment to foreign university</p>
        </div>
      </div>

      <div className="cards2">

        <div className="card2 card-matter">
          <img src={Accommodationsupport} className="card-images"/><br/>
          <p>Accommodation support</p>
        </div>

        <div className="card2 card-matter">
          <img src={GuidanceonVisa} className="card-images"/><br/>
          <p>Detailed guidance on Visa funding</p>
        </div>

        <div className="card2 card-matter">
          <img src={Visaprocedures} className="card-images"/><br/>
          <p>Hand holding for Visa procedures</p>
        </div>

        <div className="card2 card-matter">
          <img src={Predeparturebriefing} className="card-images"/><br/>
          <p>Pre-departure briefing and Cultural understanding</p>
        </div>
      </div>
    </div>




    <div className="why-flyurdream">
          <div>
      <h2 className="title2">
        Why <span>Fly Ur Dream</span>?
      </h2>

      <div className="cards2">

        <div className="card2 card-matter">
          <img src={expertise} className="card-images"/><br/>
          <p>Inputs on career opportunities</p>
        </div>

        <div className="card2 card-matter">
          <img src={guidance} className="card-images"/><br/>
          <p>Complete applications support</p>
        </div>
        <div className="card2 card-matter">
          <img src={FirstConsultant} className="card-images"/><br/>
          <p>Mock interview sessions</p>
        </div>
        <div className="card2 card-matter">
          <img src={directrepresentative} className="card-images"/><br/>
          <p>Fee payment to foreign university</p>
        </div>
      </div>

      <div className="cards2">

        <div className="card2 card-matter">
          <img src={trustedpartner} className="card-images"/><br/>
          <p>Accommodation support</p>
        </div>

        <div className="card2 card-matter">
          <img src={affordablerange} className="card-images"/><br/>
          <p>Detailed guidance on Visa funding</p>
        </div>

        <div className="card2 card-matter">
          <img src={Scholarships} className="card-images"/><br/>
          <p>Hand holding for Visa procedures</p>
        </div>

        <div className="card2 card-matter">
          <img src={extensivesupport} className="card-images"/><br/>
          <p>Pre-departure briefing and Cultural understanding</p>
        </div>
      </div>

    </div>
    </div>
  <div className="student-page">
      <div className="info-text">
      <h2>Manage Educational Information</h2>
      {/* First Table */}
      <div className="main-table-container">
        <table className="student-table">
          <thead>
            <tr>
              <th>Student Id</th>
              <th>Fullname</th>
              <th>Graduation Date</th>
              <th>Date of Entry</th>
              <th>Duration</th>
              <th>GPA</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {students.map((s) => (
              <tr key={s.id}>
                <td className="clickable-id" onClick={() => setSelectedStudent(s)}>{s.id}</td>
                <td className="clickable-name" onClick={() => setSelectedStudent(s)}>{s.fullname}</td>
                <td>{s.graduationDate}</td>
                <td>{s.dateOfEntry}</td>
                <td>{s.duration}</td>
                <td>{s.gpa.toFixed(2)}</td>
                <td>{s.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>

      {/* Second Table */}
      <div className="student-page">
      {selectedStudent && (
        <div className="student-detail-container">
          <button className="back-btn" onClick={() => setSelectedStudent(null)}>← Back</button>
          <h2>{selectedStudent.fullname} - Applications</h2>
          <table className="student-detail-table">
            <thead>
              <tr>
                <th>Level</th>
                <th>Country</th>
                <th>Year</th>
                <th>Course</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {selectedStudent.applications.map((app, rowIndex) => (
                <tr key={rowIndex}>
                  <td>{editRowIndex === rowIndex ? <input value={tempRowData.level} onChange={(e) => handleInputChange("level", e.target.value)} /> : app.level}</td>
                  <td>{editRowIndex === rowIndex ? <input value={tempRowData.country} onChange={(e) => handleInputChange("country", e.target.value)} /> : app.country}</td>
                  <td>{editRowIndex === rowIndex ? <input type="number" value={tempRowData.year} onChange={(e) => handleInputChange("year", e.target.value)} /> : app.year}</td>
                  <td>{editRowIndex === rowIndex ? <input value={tempRowData.course} onChange={(e) => handleInputChange("course", e.target.value)} /> : app.course}</td>
                  <td className="action-icons">
                    {editRowIndex === rowIndex ? (
                      <>
                        <button onClick={handleUpdate} className="update-btn">Update</button>
                        <button onClick={handleCancelEdit} className="cancel-btn">Cancel</button>
                      </>
                    ) : (
                      <>
                        <FaEdit title="Edit" color="green" onClick={() => handleEditRow(rowIndex)} />
                        <FaTrash title="Delete Row" color="red" onClick={() => handleDeleteClick(rowIndex)} />
                        {/* <FaTrash title="Delete Cell" color="orange" onClick={() => handleDeleteClick(rowIndex, "course")} />
                          */}
                    <FaFilePdf
                      title="Preview PDF"
                      color="blue"
                      onClick={handlePdfPreview}
                      style={{ cursor: "pointer" }}
                    />
                      </>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Delete Modal */}
      {showDeleteModal && (
        <div className="modal-overlay">
          <div className="modal">
            <h3>Are you sure you want to delete {deleteTarget.cell ? "this cell" : "this row"}?</h3>
            <div className="modal-buttons">
              <button onClick={confirmDelete} className="yes-btn">Yes</button>
              <button onClick={cancelDelete} className="no-btn">No</button>
            </div>
          </div>
        </div>
      )}
    </div>
    </div>
   <div>
    <div>
      <h2 className="title2">
        Our <span>Branches</span>
      </h2>
      <img src={Branches} alt='barnches-logo' className="branch-image"/>
    </div>

    <div className="cards-container">
  {/* Hyderabad */}
  <div className="card3">
    <h2 className="h2">
      <MdLocationOn className="icon location" /> India
    </h2>
    <div className="address">
      <p>
        Address: FLAT NO 601, C9WM+547, HUDA Techno Enclave, HITEC City, Hyderabad, Telangana 500081
      </p>
      <p>
        <MdPhone className="icon" /> 000-00000000 | 11111111
      </p>
      <p>
        <FaMobileAlt className="icon" /> +91 96666 69160
      </p>
      <p>
        <MdEmail className="icon" /> hyd@flyurdream.com
      </p>
    </div>
  </div>

  {/* Vijayawada */}
  <div className="card3">
    <h2 className="h2">
      <MdLocationOn className="icon location" /> United Arab Emirates

    </h2>
    <div className="address">
      <p>
        Address: Shams Business Center, Sharjah Media City, P.O.Box 515000, Sharjah, United Arab Emirates.
      </p>
      <p>
        <MdPhone className="icon" /> 000-00000000 | 11111111
      </p>
      <p>
        <FaMobileAlt className="icon" /> +91 96666 69160
      </p>
      <p>
        <MdEmail className="icon" /> UAE@flyurdream.com
      </p>
    </div>
  </div>

    <div className="card3">
    <h2 className="h2">
      <MdLocationOn className="icon location" /> UK (Head Quarters)

    </h2>
    <div className="address">
      <p>
        Address: Vista Business Centre, 50 Salisbury Road, Hounslow,
England, TW4 6JQ.
      </p>
      <p>
        <MdPhone className="icon" /> 000-00000000 | 11111111
      </p>
      <p>
        <FaMobileAlt className="icon" /> +91 96666 69160
      </p>
      <p>
        <MdEmail className="icon" /> UK@flyurdream.com
      </p>
    </div>
  </div>
</div>

    </div>
  </div>
);
};

export default Home;
