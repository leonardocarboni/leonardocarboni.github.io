import React from "react";
import "./SoftwareSkill.scss";
import {skillsSection} from "../../portfolio";

export default function SoftwareSkill() {
  return (
    <div>
      <div className="software-skills-main-div">
        <ul className="skill-categories">
          {skillsSection.mlSkills.length > 0 && (
            <li className="skill-category">
              <h3>Machine Learning</h3>
              <hr />
              <ul className="dev-icons">
                {skillsSection.mlSkills.map((skills, i) => {
                  return (
                    <li
                      key={i}
                      className="software-skill-inline"
                      name={skills.skillName}
                    >
                      <img
                        className="custom-icon"
                        src={"/icons/" + skills.fileName + ".svg"}
                        alt={skills.skillName}
                      />
                      <p>{skills.skillName}</p>
                    </li>
                  );
                })}
              </ul>
            </li>
          )}

          {skillsSection.dataSkills.length > 0 && (
            <li className="skill-category">
              <h3>Data</h3>
              <hr />
              <ul className="dev-icons">
                {skillsSection.dataSkills.map((skills, i) => {
                  return (
                    <li
                      key={i}
                      className="software-skill-inline"
                      name={skills.skillName}
                    >
                      <img
                        className="custom-icon"
                        src={"/icons/" + skills.fileName + ".svg"}
                        alt={skills.skillName}
                      />
                      <p>{skills.skillName}</p>
                    </li>
                  );
                })}
              </ul>
            </li>
          )}

          {skillsSection.mlSkills.length > 0 && (
            <li className="skill-category">
              <h3>Software Skills</h3>
              <hr />
              <ul className="dev-icons">
                {skillsSection.softwareSkills.map((skills, i) => {
                  return (
                    <li
                      key={i}
                      className="software-skill-inline"
                      name={skills.skillName}
                    >
                      <img
                        className="custom-icon"
                        src={"/icons/" + skills.fileName + ".svg"}
                        alt={skills.skillName}
                      />
                      <p>{skills.skillName}</p>
                    </li>
                  );
                })}
              </ul>
            </li>
          )}
        </ul>
        <ul className="skill-categories">
          {skillsSection.backendSkills.length > 0 && (
            <li className="skill-category">
              <h3>Backend</h3>
              <hr />
              <ul className="dev-icons">
                {skillsSection.backendSkills.map((skills, i) => {
                  return (
                    <li
                      key={i}
                      className="software-skill-inline"
                      name={skills.skillName}
                    >
                      <img
                        className="custom-icon"
                        src={"/icons/" + skills.fileName + ".svg"}
                        alt={skills.skillName}
                      />
                      <p>{skills.skillName}</p>
                    </li>
                  );
                })}
              </ul>
            </li>
          )}
          {skillsSection.frontendSkills.length > 0 && (
            <li className="skill-category">
              <h3>Frontend</h3>
              <hr />
              <ul className="dev-icons">
                {skillsSection.frontendSkills.map((skills, i) => {
                  return (
                    <li
                      key={i}
                      className="software-skill-inline"
                      name={skills.skillName}
                    >
                      <img
                        className="custom-icon"
                        src={"/icons/" + skills.fileName + ".svg"}
                        alt={skills.skillName}
                      />
                      <p>{skills.skillName}</p>
                    </li>
                  );
                })}
              </ul>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}
