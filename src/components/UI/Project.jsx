// Whenever we try to render an array containing JSX, React knows to render each JSX element separately
function Project({ projectList }) {
    return (
        <div className="row">

            {/* Here we map over each projectList item and return a new array of `li` elements that contains each project title */}
            {/* When using map you must provide a unique key attribute to each item. Ours is `project.id` */}

            {projectList.map((project) => (
                <div className="col-sm-6" key={project.id}>
                    <div className="card bg-dark text-white m-4 p-2">
                        <img src={project.image} className="card-img-top" alt="App screenshot" />
                        <div className="card-body">
                            <h5 className="card-title">{project.title}</h5>
                            <h5 className="card-subtitle">{project.developerPractice}</h5>
                            <a href={project.appLink} className="btn btn-primary m-1">Open App</a>
                            <a href={project.gitHubLink} className="btn btn-primary m-1"> Open GitHub Repo
                                <span className="badge">
                                    <img src='../../assets/github-mark.png'/>
                                </span></a>
                                
                        </div>
                    </div>
                </div>
            ))};
        </div>
    );
  }
  
  export default Project;