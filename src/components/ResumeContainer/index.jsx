import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './styles.css'

export default function ResumeContainer() {


    return (
      <div className='pdf-container'>
          <iframe id='pdf-viewer' src='/assets/AMY_LLOYD_2024_Resume.pdf'>
            <p>This browser does not support PDF!</p>
          </iframe>
      </div>
    );
        {/* <!--
        Courtesy of: https://pdfjs.express/blog/how-embed-pdf-in-html-website Place the following <div> element where you want the PDF to be displayed in your website. You can change the size using the width and height attributes.
    --> */}
}

