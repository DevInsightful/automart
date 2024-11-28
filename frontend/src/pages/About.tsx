import React from "react";

const About = () => {
  return (
    <div className="bg-gray-900 text-white">
      <div className="container mx-auto py-16 px-4">
        <h1 className="text-4xl font-bold mb-8">About Us</h1>
        <p className="text-lg mb-8">
          We are a passionate team dedicated to providing the best car buying
          experience. Our mission is to connect car enthusiasts with their dream
          vehicles.
        </p>

        <h2 className="text-3xl font-bold mb-8">Our Values</h2>
        <ul className="list-disc list-inside mb-8">
          <li>Customer Satisfaction</li>
          <li>Quality Assurance</li>
          <li>Transparency</li>
          <li>Innovation</li>
        </ul>

        <h2 className="text-3xl font-bold mb-8">Our Team</h2>
        {/* Add team member components here */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-gray-800 p-4 rounded-lg">
            {/* <img src="team-member-1.jpg" alt="Team Member 1" className="rounded-full mb-4" /> */}
            <h3 className="text-xl font-bold mb-2">Zaid Zaidi</h3>
            <p>CEO & Founder</p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg">
            {/* <img src="team-member-1.jpg" alt="Team Member 1" className="rounded-full mb-4" /> */}
            <h3 className="text-xl font-bold mb-2">Ashir Khan</h3>
            <p>CTO & CO-Founder</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
