import React, { useState } from 'react';

const PdfUploader = ({ onFileSelect }) => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type === 'application/pdf') {
      setSelectedFile(file);
      onFileSelect(file);
    } else {
      alert("Please select a valid PDF file.");
    }
  };

  return (
    <div className="my-4 p-4 border rounded">
      <h2 className="font-bold text-lg mb-2">📄 Upload a PDF Audit</h2>
      <input type="file" accept="application/pdf" onChange={handleChange} />
      {selectedFile && <p className="mt-2 text-sm">Selected: {selectedFile.name}</p>}
    </div>
  );
};

export default PdfUploader;
