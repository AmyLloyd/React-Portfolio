import React from 'react';
import './styles.css';

function Project({ projectList }) {
    return (
        <div className="row">
            {projectList.map((project) => (
                <div className="col-lg-6 col-xl-4" key={project.id}>
                    <div className="card css-card m-4 p-4">
                        <a href={project.appLink} target="_blank" rel="noopener noreferrer">
                            <img src={project.image} className="card-img-top img-fit" alt="App screenshot" />
                        </a>
                        <div className="card-body">
                            <h2 className="project-title">
                                    <a className="card-title" href={project.appLink}  target="_blank" rel="noopener noreferrer">{project.title}                             
                                    </a>
                            </h2>
                            <h6 className="text-center text-muted">{project.developerPractice}</h6>
                            <p className="card-text text-muted text-center">{project.summary}</p>
                            <a className='github-logo' href={project.gitHubLink} target="_blank" rel="noopener noreferrer">
                                    <span>
                                        <img src='../../assets/github-mark.png' className="logo" alt="GitHub logo" />
                                    </span>
                            </a>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Project;