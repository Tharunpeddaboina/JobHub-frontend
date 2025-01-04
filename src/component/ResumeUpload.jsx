import { useState } from "react";

const ResumeUpload = ({ handleUpload }) => {
  const [resume, setResume] = useState(null);

  const handleFileChange = (e) => {
    setResume(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (resume) {
      handleUpload(resume);
    }
  };

  return (
   
<div>
  <form onSubmit={handleSubmit}>
    <div className="mb-3">
      <input
        type="file"
        accept=".pdf,.doc,.docx"
        onChange={handleFileChange}
        className="form-control"
      />
    </div>
    <button type="submit" className="btn btn-primary">
      Upload Resume
    </button>
  </form>
</div>

  );
};

export default ResumeUpload;
