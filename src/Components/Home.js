import React from 'react';
import './Home.css'; // Import CSS for styling

const Home = () => {
    return (
        <div className="home-container">
            <h1>Revolutionizing office meetings with AI-powered tools!</h1>
            <img 
                src="https://cdn.thenewstack.io/media/2023/12/3763b70d-chatbot-1024x498.jpg" 
                alt="AI-Powered Meeting" 
                className="home-image"
            />
        </div>
    );
};

export default Home;
