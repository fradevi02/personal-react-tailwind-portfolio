import { Linkedin, Mail, MapPin, Phone, Github, Send} from "lucide-react";
import { cn } from "@/lib/utils";


const handleSubmit = (e) => {
        e.preventDefault();
        
        // take form data
        const formData = new FormData(e.target);
        const name = formData.get("name");
        const email = formData.get("email");
        const message = formData.get("message");

        // create email content
        const subject = `New message from web portfolio from: ${name}`;
        const body = `Name: ${name}\nSender email: ${email}\n\nMessage:\n${message}`;

        // go to mail client with pre-filled subject and body
        window.location.href = `mailto:fra.devito02@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    };

export const ContactSection = () => {
    return <section id="contact" className="py-24 px-4 relative bg-secondary/30">
        <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-center">
            Get in <span className="text-primary"> Touch</span>
        </h2>

        <p className="text-center text-lg md:text-xl text-muted-foreground mb-12">
            Have some questions or want to collaborate? Feel free to reach out! <br />
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-3xl mx-auto">
            <div className="space-y-8">
                <h3 className="text-2xl font-semibold mb-6"> Contact Information</h3>
                
                <div className="space-y-6 justify-center">
                    <div className="flex items-start space-x-4">
                        <div className="p-3 rounded-full bg-primary/10">
                            <Mail className="h-6 w-6 text-primary"/>
                        </div>
                        <div>
                            <h4 className="text-lg font-medium">Email</h4>
                            <a href="mailto:fra.devito02@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">fra.devito02@gmail.com</a>
                        </div>
                    </div>
                </div>

                <div className="space-y-6 justify-center">
                    <div className="flex items-start space-x-4">
                        <div className="p-3 rounded-full bg-primary/10">
                            <Phone className="h-6 w-6 text-primary"/>
                        </div>
                        <div>
                            <h4 className="text-lg font-medium">Phone</h4>
                            <a href="tel:+393451106992" className="text-muted-foreground hover:text-primary transition-colors">+39 345 110 6992</a>
                        </div>
                    </div>
                </div>


                <div className="space-y-6 justify-center">
                    <div className="flex items-start space-x-4">
                        <div className="p-3 rounded-full bg-primary/10">
                            <MapPin className="h-6 w-6 text-primary"/>
                        </div>
                        <div>
                            <h4 className="text-lg font-medium">Location</h4>
                            <a href="https://www.google.it/maps/place/Lugano,+Switzerland/@46.0295299,8.8268597,11z/data=!3m1!4b1!4m6!3m5!1s0x47842df76a4211f1:0xef8c04212ea1f8e0!8m2!3d46.0036778!4d8.951052!16zL20vMDFyNzZ5?entry=ttu&g_ep=EgoyMDI2MDIwMy4wIKXMDSoASAFQAw%3D%3D" 
                            className="text-muted-foreground hover:text-primary transition-colors">Lugano, Switzerland</a>
                        </div>
                    </div>
                </div>

                <div>
                    <h4> Connect with Me</h4>
                    <div className="flex space-x-4 mt-4 justify-center">
                        <a href="https://www.linkedin.com/in/francesco-de-vito/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                            <Linkedin/>
                        </a>
                        <a href="https://github.com/fradevi02" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                            <Github/>
                        </a>
                    </div>
                </div>
            </div>

            <div className="bg-card p-8 rounded-lg shadow-xs">
                <h3 className="text-2xl font-semibold mb-6"> Send Me a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-2">Your Name</label>
                        <input type="text" id="name" name="name" required className="w-full px-4 py-3 border border-gray-300 rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary" placeholder="Francesco De Vito..."/>
                    </div>
                    
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                        <input type="email" id="email" name="email" required className="w-full px-4 py-3 border border-gray-300 rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary" placeholder="you@example.com"/>
                    </div>

                    <div>
                        <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                        <input type="text" id="message" name="message" required className="w-full px-4 py-3 border border-gray-300 rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none" placeholder="Hello, I'd like to talk about..."/>
                    </div>

                    <button 
                    type="submit" 
                    className={cn("cosmic-button w-full flex items-center justify-center gap-2",


                    )}
                    >Send Message <Send size={18}/></button>


                </form>
            </div>
        
        </div>

        </div>
    </section>;

}