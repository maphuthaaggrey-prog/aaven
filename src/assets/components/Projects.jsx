import { projects } from '../data/Projects.js'
import { useState, useEffect } from 'react'
import Reactions from './Reactions';
const Projects = () => {
    const [Projects, setProjects] = useState([]);

    useEffect(() => {
        const project = [...projects];
        setProjects(project);
    }, []);
    
    return ( 
        <div className='wrap'>
                    <p className="heading">OUR WORK</p>
                    <p className='text003'>This is what we’ve worked on — a showcase of digital projects built to sharpen our skills and explore creative ideas. From sleek portfolio sites to custom web apps and interactive designs, each project highlights our passion for web development and attention to detail. These works represent our journey, growth, and the kind of experiences we’re capable of creating. Every layout, every feature, and every interaction tells a story — and this is ours.</p>
                <div className="project-info">
                        {Projects.map((project) => (
                            <div className="project">
                        <a href={project.link} target="_blank">  
                            
                                    <img
                                            src={project.image}
                                            loading="lazy"
                                            alt={project.project}
                                            className="project-image"
                                        />
                         </a>
                                     <Reactions /> 
                                        <p className="project-name">{project.project}</p>
                                        <p className="project-type">{project.type}</p>
                                        <p className="project-desc">{project.description}</p>
                                        
                            </div>
                       
               
                         ))}
                 </div>  
        </div>
     );
}
 
export default Projects;