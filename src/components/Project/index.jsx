import React from 'react';
import './styles.css';

function Project({ projectList }) {
    return (
        <div className="row">
            {projectList.map((project) => (
                <div className="col-md-4" key={project.id}>
                    <div className="card css-card m-4 p-4">
                        <a href={project.appLink} target="_blank" rel="noopener noreferrer">
                            <img src={project.image} className="card-img-top" alt="App screenshot" />
                        </a>
                        <div className="card-body">
                            <div className="project-title">
                                <a className="card-title" href={project.appLink} target="_blank" rel="noopener noreferrer">{project.title}                             
                                </a>
                                <a className='github-logo' href={project.gitHubLink} target="_blank" rel="noopener noreferrer">
                                    <span>
                                        <img src='../../assets/github-mark.png' className="logo" alt="GitHub logo" />
                                    </span>
                                </a>
                            </div>
                            <p className="card-subtitle">{project.developerPractice}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Project;