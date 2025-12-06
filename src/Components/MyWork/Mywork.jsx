// src/Components/MyWork/Mywork.jsx
import React, { useEffect, useState } from "react";
import "./mywork.css";

import theme_pattern from "../../assets/theme_pattern.svg";
import arrow_icon from "../../assets/arrow_icon.svg";

import project1 from "../../assets/project_1_new.jpeg";
import project2 from "../../assets/project_2_new.jpeg";

export const Mywork = () => {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Static projects + your GitHub link
  useEffect(() => {
    const projectData = [
      {
        id: 1,
        title: "Viara Wholesale Website",
        tools_used: "React JS • CSS • API Integration • Django Rest Framework",
        image: project1,
        description:
          "The Viara project is a modern wholesale business website designed to help streamline product showcasing, customer inquiries, and vendor communication. Built with a clean UI and flexible backend structure, the platform allows wholesalers to manage products efficiently while giving customers a simple and user-friendly browsing experience. The project focuses on clarity, accessibility, and smooth navigation — making it easy for businesses to present their offerings online.",
      },
      {
        id: 2,
        title: "Face Matching E-Voting System",
        tools_used: "python • OpenCV • MediaPipe • react js  • Django REST Framework",
        image: project2,
        description:
          " Developed a secure E-Voting system that uses face recognition to verify voter identity before allowing access to the voting interface. Implemented facial landmark detection and feature extraction using MediaPipe to match the live camera feed with pre-stored voter images. Designed a workflow that prevents duplicate voting and ensures real-time authentication. Integrated data validation, image preprocessing, and accuracy checks to enhance system reliability. The system successfully automates voter verification and supports a seamless digital voting experience.",
      },
      // {
      //   id: 3,
      //   title: "Jiocinema Website Front-end Clone",
      //   tools_used: "React JS • CSS",
      //   image: project1,
      //   description:
      //     "Backend API project built using Django REST Framework.",
      // },
      // {
      //   id: 4,
      //   title: "Project Four",
      //   tools_used: "React Native • Mobile UI",
      //   image: project2,
      //   description:
      //     "A mobile-focused design using React Native components.",
      // },
    ];

    setProjects(projectData);
  }, []);

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setIsModalOpen(false);
  };

  return (
    <div id="work" className="mywork">
      <div className="mywork-title">
        <h1>My Latest Work</h1>
        <img src={theme_pattern} alt="Pattern" />
      </div>

      <div className="mywork-container">
        {projects.map((work) => (
          <div
            key={work.id}
            className="project-card"
            onClick={() => openModal(work)}
          >
            <img src={work.image} alt={work.title} />
            <div className="project-info">
              <h3>{work.title}</h3>
              <p>{work.tools_used}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mywork-actions">
        <div className="mywork-showmore">
          <p>Show More</p>
          <img src={arrow_icon} alt="arrow" />
        </div>
        <a href="https://github.com/Aleesha57" target="_blank" rel="noopener noreferrer" className="github-button">
          Visit My GitHub
        </a>
      </div>

      {isModalOpen && selectedProject && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>
              ×
            </button>

            <img
              className="modal-image"
              src={selectedProject.image}
              alt={selectedProject.title}
            />

            <h2 className="modal-title">{selectedProject.title}</h2>

            <p className="modal-description">
              {selectedProject.description}
            </p>

            <div className="modal-tools">
              <strong>Tools Used:</strong> {selectedProject.tools_used}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
