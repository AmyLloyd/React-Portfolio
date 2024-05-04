import React from 'react';
import { useRef } from 'react';
//libraries needed for downloading PDF
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

export default function Resume() {

    return (
      <>
        <div className="container">   
          <div>   
              <h2>Resume</h2>
          </div>
          <div className="row text-start mt-4"> 
            <div className="col-sm-6"> 
              <h4> Front-end Proficiencies</h4>
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
              <h4>Back-end Proficiencies</h4>
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
          <div className="text-start mt-4">
              <a className="feature-button" href="https://drive.google.com/file/d/1W_o1oHIsvWcaMY4nr01dRyCl6PKdpdNG/view?usp=sharing" target='_blank'>View resume</a>
            </div>   
        </div>
        {/* <!--
        Courtesy of: https://pdfjs.express/blog/how-embed-pdf-in-html-website Place the following <div> element where you want the PDF to be displayed in your website. You can change the size using the width and height attributes.
    --> */}
    <div>
              <iframe
          src='/assets/AMY_LLOYD_2024_Resume.pdf'
          width="400"
          height="678"
        >
        <p>This browser does not support PDF!</p>
        </iframe>
    </div>

      </>
    );
  }