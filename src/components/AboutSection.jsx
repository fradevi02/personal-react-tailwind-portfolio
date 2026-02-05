import { Briefcase, Code, GraduationCap } from "lucide-react";

export const AboutSection = () => {
    return <section id="about-me" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    About<span className="text-primary"> Me</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    
                    <div className="space-y-6 text-center md:text-left">
                        <h3 className="text-2xl font-semibold">Who I Am</h3>
                        <p className="text-muted-foreground leading-relaxed">
                            I am a 23-year-old Master's student in <strong>Software and Data Engineering (MSDE)</strong> at the Università della Svizzera Italiana (USI). Currently in my second year, I am focusing on my thesis: a research and development project centering on the implementation of <strong>RAG (Retrieval-Augmented Generation)</strong> systems. I thrive on challenges and am dedicated to carrying out every mission entrusted to me with precision and passion.
                        </p>

                        <p className="text-muted-foreground leading-relaxed">
                            My journey began with a Bachelor's degree in Computer Science at <strong>University of Insubria</strong>. Before my Master's, I worked at <strong>Elmec Informatica S.p.A.</strong>, where I developed an automated system to track employee hours and activities. Currently, alongside my studies, I serve as a <strong>Teaching Assistant</strong> at USI for the "Software Atelier 4: Software Engineering Project" course.
                        </p>

                        <p className="text-muted-foreground leading-relaxed">
                            When I'm not coding or researching, I love <strong>traveling</strong> to discover new cultures and perspectives.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start">
                            <a href="https://www.linkedin.com/in/francesco-de-vito/" className="cosmic-button">
                                Get in Touch
                            </a>

                            <a 
                                href="./src/data/CV - Francesco De Vito.pdf" 
                                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300 flex items-center justify-center" 
                                download
                            >
                                Download CV
                            </a>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6">
                        
                        {/*Master & Research */}
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10 text-primary">
                                    <GraduationCap className="w-6 h-6 text-primary"/>
                                </div>
                                <div className="text-left">
                                    <h4 className="text-lg font-semibold">MSDE Student & Researcher</h4>
                                    <p className="text-muted-foreground text-sm">
                                        2nd year Master student at USI. Currently researching RAG implementations for my thesis.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Teaching Assistant */}
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10 text-primary">
                                    <Code className="w-6 h-6 text-primary"/>
                                </div>
                                <div className="text-left">
                                    <h4 className="text-lg font-semibold">Teaching Assistant</h4>
                                    <p className="text-muted-foreground text-sm">
                                        Assisting the "Software Atelier 4" course at USI, mentoring students in software engineering projects.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Professional Experience */}
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10 text-primary">
                                    <Briefcase className="w-6 h-6 text-primary"/>
                                </div>
                                <div className="text-left">
                                    <h4 className="text-lg font-semibold">Past Experience</h4>
                                    <p className="text-muted-foreground text-sm">
                                        Developed automated activity tracking systems at Elmec Informatica S.p.A. after my Bachelor's at Insubria.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>;
}