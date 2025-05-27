import { projects } from '../data/Projects.js'
import { useState, useEffect } from 'react'
import Reactions from './Reactions';

const Projects = () => {
    const [Projects, setProjects] = useState([]);
    const [imagesLoaded, setImagesLoaded] = useState(0);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const project = [...projects];
        setProjects(project);
    }, []);

    // Stop loading either after all images are loaded OR after 5 seconds
    useEffect(() => {
        const timeout = setTimeout(() => {
            setIsLoading(false);
        }, 3000); // 5000 ms = 5 seconds

        if (Projects.length > 0 && imagesLoaded === Projects.length) {
            setIsLoading(false);
            clearTimeout(timeout); // Clear timeout if images loaded first
        }

        return () => clearTimeout(timeout);
    }, [imagesLoaded, Projects]);

    const handleImageLoad = () => {
        setImagesLoaded(prev => prev + 1);
    };

    return (
        <div className='wrap'>
            {isLoading && (
                <div className="loader"><img src="https://www.wpfaster.org/wp-content/uploads/2013/06/loading-gif.gif"></img></div>
            )}

            {!isLoading && (
                <>
                    <p className="heading">OUR WORK</p>
                    <p className='text003'>
                        This is what we’ve worked on — a showcase of digital projects built to sharpen our skills and explore creative ideas. From sleek portfolio sites to custom web apps and interactive designs, each project highlights our passion for web development and attention to detail. These works represent our journey, growth, and the kind of experiences we’re capable of creating. Every layout, every feature, and every interaction tells a story — and this is ours.
                    </p>
                    <div className="project-info">
                        {Projects.map((project, index) => (
                            <div className="project" key={index}>
                                <a href={project.link} target="_blank" rel="noopener noreferrer">
                                    <img
                                        src={project.image}
                                        loading="lazy"
                                        alt={project.project}
                                        className="project-image"
                                        onLoad={handleImageLoad}
                                    />
                                </a>
                                <Reactions />
                                <p className="project-name">{project.project}</p>
                                <p className="project-type">{project.type}</p>
                                <p className="project-desc">{project.description}</p>
                            </div>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};

export default Projects;
