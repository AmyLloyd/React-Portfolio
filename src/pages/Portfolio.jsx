import { useState } from 'react';

function ProjectList() {
  const [projectList, setProjectList] = useState([]);

  //Function to add a project
  const addProject = (project) => {
    console.log(
      'File: Portfolio.jsx ~ line 9 ~ addProject ~ project', project
    );
    //Check to see it project is empty
    if(!project.text {
      return;
    }
    
    //Add new project to the existing array 
    const newProjectList = [project, ...projectList];
    console.log(newProjectList);
  
    //Call setProjectList to update state including the new project
    setProjectList(newProjectList);
  };


  
}