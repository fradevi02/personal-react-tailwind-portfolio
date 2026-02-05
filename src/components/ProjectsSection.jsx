import { ArrowLeft, ArrowRight, Github } from "lucide-react";

const projects = [
    {
        id: 1,
        title: "CodeCost: Dashboard for future IT careers",
        description: "Helps people visualize the correlation between lifestyle and income across the globe. Specifically designed for tech professionals, the app provides deep insights into IT salaries and cost-of-living metrics by country, allowing you to make data-driven decisions about your next career move..",
        image: "/projects/Project1.png",
        tags: ["Dash", "Plotly", "Python", "Pandas", "Pycharm"],
        githubUrl: "https://github.com/fradevi02/codeCost"
    },
    {
        id: 2,
        title: "WorkFlow Guardian: focus app",
        description: "Android application that helps people stay focused and productive by managing their workflow and minimizing distractions. Actually based on demo data which simulates the HR and HRV data from wearable devices to provide insights into person well-being and productivity.",
        image: "/projects/Project2.png",
        tags: ["Android", "Java", "Android Studio"],
        githubUrl: "https://github.com/fradevi02/WorkFlowGuardian"
    }

]

export const ProjectsSection = () => {
    return <section id="projects" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl font-bold  md:text-4xl font-bold mb-4 text-center">Featured <span className="text-primary">Projects</span></h2>


            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto"> 
                Here are some of the projects I've worked on recently. Each project showcases my skills in various technologies and my ability to solve real-world problems through innovative solutions.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    {projects.map((project, key) => (
        <div 
            key={key} 
            // h-full forces the card to be as tall as its tallest "neighbor"
            // flex flex-col organizes the content vertically
            className="group bg-card rounded-lg shadow-lg overflow-hidden flex flex-col h-full card-hover"
        >
            {/* Image */}
            <div className="h-48 overflow-hidden relative flex-shrink-0">
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
            </div>
            {/* flex-grow makes this div take up all the available space between the image and the end of the card */}
            <div className="p-6 flex flex-col flex-grow">
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, index) => (
                        <span key={index} className="text-secondary-foreground rounded-full px-2 py-1 text-xs font-medium bg-secondary/50">
                            {tag}
                        </span>
                    ))}
                </div>

                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                
                <p className="text-muted-foreground text-sm mb-6">
                    {project.description}
                </p>

                {/* Footer with Link */}
                <div className="mt-auto pt-4 border-t border-border/50">
                    {project.githubUrl && (
                        <a 
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer" 
                            className="inline-flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors"
                        >
                            <Github className="w-5 h-5" /> 
                            <span>View on GitHub</span>
                        </a>
                    )}
                </div>

            </div>
        </div>
    ))}
</div>
            <div className="text-center mt-12">
                <a href="https://github.com/fradevi02" target="_blank" rel="noopener noreferrer" className="cosmic-button inline-flex items-center gap-2 text-secondary font-medium hover:underline">
                    Check my GitHub for more projects! <ArrowRight />
                </a>

            </div>
        </div>
    </section>;
};