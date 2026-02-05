import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
    return <section id="about-me" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                About<span className="text-primary"> Me</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <h3 className="text-2xl font-semibold">Who I Am</h3>
                    <p className="text-muted-foreground">
                        I'm a passionate developer with a love for creating dynamic and responsive web applications. With a strong foundation in both front-end and back-end technologies, I strive to build seamless user experiences.
                    </p>
                    <p className="text-muted-foreground">
                        When I'm not coding, you can find me exploring the latest tech trends, contributing to open-source projects, or indulging in my hobbies like hiking and photography.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                    <a href="#contact" className="cosmic-button">
                        Get in Touch
                    </a>

                    <a href="./src/data/CV - Francesco De Vito.pdf" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300" download>
                        Download CV
                    </a>
                </div>
                </div>


                <div className="grid grid-cols-1 gap-6">
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10 text-primary">
                                <Code className="w-6 h-6 text-primary"/>
                            </div>
                            <div className="text-left">
                                <h4 className="text-lg font-semibold">Full-Stack Developer</h4>
                                <p className="text-muted-foreground">
                                    Experienced in building scalable web applications using modern technologies and frameworks.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10 text-primary">
                                <User className="w-6 h-6 text-primary"/>
                            </div>
                            <div className="text-left">
                                <h4 className="text-lg font-semibold">Tech Enthusiast</h4>
                                <p className="text-muted-foreground">
                                    Always eager to learn and explore new technologies to stay ahead in the ever-evolving tech landscape.
                                </p>
                            </div>

                        </div>
                    </div><div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10 text-primary">
                                <Briefcase className="w-6 h-6 text-primary"/>
                            </div>
                            <div className="text-left">
                                <h4 className="text-lg font-semibold">Professional Experience</h4>
                                <p className="text-muted-foreground">
                                    Proven track record of delivering high-quality software solutions in collaborative team environments.
                                </p>
                                </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </section>;
}