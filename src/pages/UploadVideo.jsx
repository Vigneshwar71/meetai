import { useState } from "react";

function UploadVideo() {
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    const handleUpload = () => {
        if (selectedFile) {
            alert(`Uploading: ${selectedFile.name}`);
        } else {
            alert("Please select a file to upload.");
        }
    };

    return (
        <div style={{ textAlign: "center", padding: "50px" }}>
            <h2>Upload Meeting Video</h2>
            <input type="file" accept="video/*" onChange={handleFileChange} />
            <button onClick={handleUpload} style={{ marginLeft: "10px", padding: "10px", background: "#4A90E2", color: "white" }}>
                Upload
            </button>
        </div>
    );
}

export default UploadVideo;
