import React, { useState } from "react";

const VideoUpload = () => {
  const [videoFile, setVideoFile] = useState(null);
  const [videoURL, setVideoURL] = useState(null);

  const handleVideoUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setVideoFile(file);
      setVideoURL(URL.createObjectURL(file)); // Create preview URL
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-3">Upload a Video</h2>

      <input
        type="file"
        accept="video/*"
        className="form-control"
        onChange={handleVideoUpload}
      />

      {videoURL && (
        <div className="mt-3">
          <h5>Preview:</h5>
          <video width="100%" height="300" controls>
            <source src={videoURL} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      )}
    </div>
  );
};

export default VideoUpload;
