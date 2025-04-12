import { projects } from '../components/Projects.js'
import { useState, useEffect } from 'react'
import Reactions from './Reactions';
const Projects = () => {
    const [Projects, setProjects] = useState([]);

    useEffect(() => {
        const project = [...projects];
        setProjects(project);
    }, []);
    
    return ( 
        <>
        <section className="hero-about">
            <div className="about-hero">
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
        </section>   

        
        
        </>
     );
}
 
export default Projects;