import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { FaEdit, FaTrash, FaFilePdf } from "react-icons/fa";
import "./student.css";
// import { PDFViewer } from "@react-pdf/renderer";
// import { useNavigate } from "react-router-dom";
// import { useLocation } from "react-router-dom";

// import samplePDF from "../../assets/sample.pdf";





const Student = () => {
    
 
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
  )
}

export default Student
