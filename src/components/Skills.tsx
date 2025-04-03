interface SkillCategory {
  title: string;
  skills: string[];
}

const skillsData: SkillCategory[] = [
  {
    title: "Frontend",
    skills: ["HTML5", "CSS3/SASS", "JavaScript", "TypeScript", "React", "Redux", "Next.js", "Tailwind CSS"]
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express", "Python", "Django", "RESTful APIs", "GraphQL", "MongoDB", "SQL"]
  },
  {
    title: "DevOps & Tools",
    skills: ["Git", "GitHub", "CI/CD", "Docker", "AWS", "Firebase", "Vercel", "VS Code", "Figma", "Adobe XD"]
  },
  {
    title: "Other Skills",
    skills: ["UI/UX Design", "Responsive Design", "Performance Optimization", "SEO Basics", "Testing", "Problem Solving"]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        
        <div className="skills-container">
          {skillsData.map((category, index) => (
            <div className="skill-category" key={index}>
              <h3>{category.title}</h3>
              <ul>
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex}>
                    <span className="skill-name">{skill}</span>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress" 
                        style={{ 
                          width: `${Math.floor(Math.random() * 41) + 60}%`,
                          animationDelay: `${skillIndex * 0.1}s`
                        }}
                      ></div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills; 