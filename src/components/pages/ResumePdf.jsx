import React from 'react';


export default function ResumePdf() {

    return (
      <>
     {/* <!--
        Courtesy of: https://pdfjs.express/blog/how-embed-pdf-in-html-website Place the following <div> element where you want the PDF to be displayed in your website. You can change the size using the width and height attributes.
     --> */}
      <div>
          <iframe
            src='/assets/AMY_LLOYD_2024_Resume.pdf'
            width="500"
            height="678"
          >
          <p>This browser does not support PDF!</p>
          </iframe>
      </div>
      </>
    );
  }