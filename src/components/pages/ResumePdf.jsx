import React from 'react';

export default function ResumePdf() {

    return (
      <>
      <div>
        <object
          data='/assets/AMY_LLOYD_2024_Resume.pdf'
          type="application/pdf"
          width="500"
          height="678"
        >

          <iframe
            src='/assets/AMY_LLOYD_2024_Resume.pdf'
            width="500"
            height="678"
          >
          <p>This browser does not support PDF!</p>
          </iframe>
        </object>
      </div>
      </>
    );
  }