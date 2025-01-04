import React, { useState } from 'react';
import ResumeUpload from '../component/ResumeUpload';
import { Link } from 'react-router-dom';
const ProfilePage = () => {
  const [resume, setResume] = useState(null);

  
  const handleResumeChange = (file) => {
    setResume(file);
  };


  const handleUpload = async (e) => {
    e.preventDefault();
    if (!resume) {
      alert("Please upload your resume");
      return;
    }

    const formData = new FormData();
    formData.append("resume", resume);

    try {
      const response = await fetch("https://jobhub-2g2q.onrender.com/api/resume/upload-resume", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      if (response.ok) {
        console.log("Upload successful", data);
        alert("Resume uploaded successfully!");
      } else {
        console.error("Upload failed", data);
        alert("Error uploading resume.");
      }
    } catch (error) {
      console.error("An error occurred", error);
      alert("An error occurred during upload.");
    }
  };

  return (
    <div className="container mt-4">
      <h2>Upload Your Resume</h2>
      <form onSubmit={handleUpload}>
        <div className="form-group">
          <ResumeUpload handleUpload={handleResumeChange} />
        </div>
       
      </form>
      <h1 className="mt-4">Now you're almost ready to find your dream job. Click below to search!</h1>
      
     
      <Link to="/search" className="btn btn-success mt-3">
        Go to Search
      </Link>
    </div>
    
  );
};

export default ProfilePage;
