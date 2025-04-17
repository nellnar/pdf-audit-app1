import React from 'react';

const PdfUploader = ({ onFileSelect }) => {
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type === 'application/pdf') {
      onFileSelect(file);
    } else {
      alert('Please upload a valid PDF file.');
    }
  };

  return (
    <div className="mb-4">
      <label className="block font-medium">Upload PDF:</label>
      <input type="file" accept="application/pdf" onChange={handleFileChange} />
    </div>
  );
};

export default PdfUploader;

