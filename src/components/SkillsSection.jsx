import { useState } from "react";

const skills = [
    { name: 'JavaScript', level: 40, category: 'Frontend' },
    { name: 'React', level: 30, category: 'Frontend' },

    { name: 'Python', level: 80, category: 'Backend' },
    { name: 'Java', level: 80, category: 'Backend' },

    { name: 'PostgreSQL', level: 70, category: 'Database' },
    { name: 'MongoDB', level: 60, category: 'Database' },

    { name: 'Pandas', level: 70, category: 'Data Science / Visualization' },
    { name: 'NumPy', level: 60, category: 'Data Science / Visualization' },
    { name: 'Machine Learning', level: 70, category: 'Data Science / Visualization' },

    { name: 'Git/GitHub/GitLab', level: 70, category: 'Tools' },
    { name: 'Docker', level: 50, category: 'Tools' },
    { name: 'JIRA - Atlassian', level: 60, category: 'Tools' },
    { name: 'VS Code', level: 80, category: 'Tools' },
    { name: 'Postman', level: 70, category: 'Tools' },
    { name: 'Pycharm/IntelliJ', level: 80, category: 'Tools' },
    { name: 'Figma', level: 40, category: 'Tools' },

];
const categories = ['All', 'Frontend', 'Backend', 'Database', 'Data Science / Visualization', 'Tools'];


export const SkillsSection = () => {
    const [activeCategory, setActiveCategory] = useState('All');
    const filteredSkills = activeCategory === 'All' ? skills : skills.filter(skill => skill.category === activeCategory);

    return <section id="skills" className="py-24 px-4 relative bg-secondary/30">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                My <span className="text-primary"> Skills</span>
            </h2>

            <div className="flex justify-center mb-12 gap-4 flex-wrap">
                {categories.map((category, index) => (
                    <button
                        key={index}
                        className={`px-4 py-2 rounded-full transition-colors duration-300 
                            ${activeCategory === category ? 'bg-primary text-white' : 'mt-1'}`}
                        onClick={() => setActiveCategory(category)}
                    >
                        {category}
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredSkills.map((skill, key) => (
                    <div key={key} className="bg-card backdrop-blur-md p-6 rounded-lg shadow-xs card-hover">
                        <div className="text-left mb-4">
                        <h3 className="font-semibold text-lg">{skill.name}</h3>
                            <div className="w-full bg-gray-300/10 rounded-full h-4 mb-2">
                                <div
                                    className="bg-primary h-4 rounded-full transition-all duration-500"
                                    style={{ width: `${skill.level}%` }}
                                />
                            </div>
                            <div className="text-right mt-1 justify-between text-sm mb-2">
                                <span className="text-sm text-muted-foreground">{skill.level}%</span>
                            </div>
                            <p className="text-sm text-gray-600">Category: {skill.category}</p>
                        </div>
                        
                    </div>
                ))}

            </div>
        </div>
    </section>;
}