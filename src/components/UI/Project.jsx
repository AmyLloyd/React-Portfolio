// Whenever we try to render an array containing JSX, React knows to render each JSX element separately
function Project({ projectList }) {
    return (
      <ul className="list-group">
        {/* Here we map over each projectList item and return a new array of `li` elements that contains each project title */}
        {/* When using map you must provide a unique key attribute to each item. Ours is `project.id` */}
        {projectList.map((project) => (
          <li className="list-group-item" key={project.id}>
            {project.title}
          </li>
        ))}
      </ul>
    );
  }
  
  export default Project;