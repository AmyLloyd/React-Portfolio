import React from 'react';
import { Link } from 'react-router-dom';

export default function Resume() {

    return (
      <>
        <div className="container min-vh">   
          <div>   
              <h2>Resume</h2>
          </div>
          <div className="row text-start mt-4"> 
            <div className="col-sm-6"> 
              <h3> Front-end Proficiencies</h3>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>Javascript</li>
                <li>JQuery</li>
                <li>responsive design</li>
                <li>React</li>
                <li>Bootstrap</li>
              </ul>
            </div>
            <div className="col-sm-6">  
              <h3>Back-end Proficiencies</h3>
              <ul>
                <li>APIs</li>
                <li>Node</li>
                <li>Express.js</li>
                <li>MySQL, Sequelize</li>
                <li>MongoDB, Mongoose</li>
                <li>GraphQL</li>
              </ul>
            </div>
          </div>
          <div className='mt-3'>
                    <button className='feature-button'>
                        <Link to="/resume-pdf">Download Resume</Link>
                    </button>
          </div>
        </div>
      </>
    );
  }