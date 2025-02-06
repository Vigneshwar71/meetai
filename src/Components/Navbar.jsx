import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav style={{ background: "#4A90E2", padding: "10px", color: "white", display: "flex", justifyContent: "space-between" }}>
            <h1>MeetGenius AI</h1>
            <ul style={{ display: "flex", gap: "20px", listStyle: "none" }}>
                <li><Link to="/" style={{ color: "white", textDecoration: "none" }}>Home</Link></li>
                <li><Link to="/upload" style={{ color: "white", textDecoration: "none" }}>Upload Video</Link></li>
                <li><Link to="/meetings" style={{ color: "white", textDecoration: "none" }}>Meetings</Link></li>
                <li><Link to="/translate" style={{ color: "white", textDecoration: "none" }}>Translate</Link></li>
                <li><Link to="/qa" style={{ color: "white", textDecoration: "none" }}>Q&A Engine</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;
