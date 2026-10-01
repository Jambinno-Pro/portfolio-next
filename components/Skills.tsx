"use client";

import { useEffect, useState } from "react";
import api from "../lib/api";

interface Skill {
  _id?: string;
  name?: string;
  title?: string;
  skill?: string;
}

export default function Skills() {
  const [skills, setSkills] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const response = await api.get("/skills");

        const data = Array.isArray(response.data)
          ? response.data
          : response.data.skills || [];

        const skillNames = data
          .map((skill: Skill) => skill.name || skill.title || skill.skill || "")
          .filter(Boolean);

        setSkills(skillNames);
      } catch (error) {
        console.error("Failed to load skills:", error);

        // Temporary fallback
        setSkills([
          "PostgreSQL",
          "Angular",
          "React",
          "Node.js",
          "Express.js",
          "JavaScript",
          "MongoDB",
          "REST APIs",
          "PHP",
          "SQL",
          "MySQL",
          "GitHub",
          "WordPress",
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchSkills();
  }, []);

  return (
    <section className="skills-section">
      <div className="skills-heading">
        <h2>My Skills</h2>

        <p>
          Technologies and tools I use to build modern, responsive and
          professional digital experiences.
        </p>
      </div>

      <div className="skills-list">
        {loading ? (
          <span className="skills-loading">Loading skills...</span>
        ) : (
          skills.map((skill, index) => (
            <span key={`${skill}-${index}`} className="skill-pill">
              {skill}
            </span>
          ))
        )}
      </div>

      <a href="#skills" className="skills-button">
        View Skills
      </a>
    </section>
  );
}
