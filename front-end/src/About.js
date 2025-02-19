
import React, { useEffect, useState } from 'react';

const About = () => {
    const [aboutData, setAboutData] = useState(null);

    useEffect(() => {
        fetch('http://localhost:5002/about')
            .then(response => response.json())
            .then(data => setAboutData(data));
    }, []);

    if (!aboutData) return <p>Loading...</p>;

    return (
        <div>
            <h1>About Us</h1>
            <h2>{aboutData.name}</h2>
            <p>{aboutData.about1}</p>
            <p>{aboutData.about2}</p>
            <p>{aboutData.about3}</p>
            <img src={aboutData.image_url} alt="cat" width="300" />
        </div>
    );
};

export default About;
