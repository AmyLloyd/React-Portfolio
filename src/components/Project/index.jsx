import React from 'react';
import './styles.css';

function Project({ projectList }) {
    return (
        <div className="row">
            {/* Here we map over each projectList item and return a new array of elements that contains each project title */}
            {/* When using map you must provide a unique key attribute to each item. Ours is `project.id` */}
            {projectList.map((project) => (
                <div className="col-sm-6" key={project.id}>
                    <div className="card css-card m-4 p-4">
                        <a href={project.appLink}>
                            <img src={project.image} className="card-img-top" alt="App screenshot" href='{project.appLink}' />
                        </a>
                        <div className="card-body">
                            <div className="project-title">
                                <a className="card-title" href={project.appLink}>{project.title}
                                
                                </a>
                                <a className='github-logo' href={project.gitHubLink}>
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