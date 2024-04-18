import './styles.css'

// Whenever we try to render an array containing JSX, React knows to render each JSX element separately
function Project({ projectList }) {
    return (
        <div className="row">

            {/* Here we map over each projectList item and return a new array of elements that contains each project title */}
            {/* When using map you must provide a unique key attribute to each item. Ours is `project.id` */}

            {projectList.map((project) => (
                <div className="col-sm-6" key={project.id}>
                    <div className="card css-card text-white m-2 p-2">
                        <img src={project.image} className="card-img-top" alt="App screenshot" />
                        <div className="card-body">
                            <h3 className="card-title">{project.title}</h3>
                            <p className="card-subtitle">{project.developerPractice}</p>
                            <div>
                                <a href={project.appLink} className="btn css-button">Open App</a>
                                <a href={project.gitHubLink} className="btn css-button"> Open GitHub Repo
                                    <span>
                                        <img src='../../assets/github-mark.png' className="logo"/>
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            ))};
        </div>
    );
  }
  
  export default Project;