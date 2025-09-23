import React from "react";
import { useLocation } from "react-router-dom"; // ✅ import chesam

const Studentpdf = () => {
  const location = useLocation();
  const rowData = location.state?.rowData || null;

  return (
    <div className="pdf-page">
      <h2>PDF View</h2>
      {rowData ? (
        <div className="pdf-content">
          <p><strong>Level:</strong> {rowData.level}</p>
          <p><strong>Country:</strong> {rowData.country}</p>
          <p><strong>Year:</strong> {rowData.year}</p>
          <p><strong>Course:</strong> {rowData.course}</p>
        </div>
      ) : (
        <p>No data to display</p> 
      )}
    </div>
  );
};

export default Studentpdf;
