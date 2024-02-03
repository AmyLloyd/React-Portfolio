import { Outlet } from 'react-router-dom';
import Nav from './components/Nav';
import Heading from './components/UI/Heading';

const projects = [
    {
      id: 1,
      title: "Project 1",
      image: "next-best-tech-blog.png",
      gitHubLink: 'https://github.com/AmyLloyd/next-best',
      appLink: 'https://stark-spire-89547-14040d39d29b.herokuapp.com/',
      developerPractice: 'MVC'
    },
    {
        id: 2,
        title: "Keep your words- JATE text editor",
        image: "jate.png",
        gitHubLink: 'https://github.com/AmyLloyd/keep-your-words',
        appLink: 'https://keep-your-words.onrender.com/',
        developerPractice: 'PWA using IndexedDB'
    },
    {
        id: 3,
        title: "Quick get that down! Notetaker app",
        image: "note-taker-app.png",
        gitHubLink: "https://github.com/AmyLloyd/quick-get-that-down",
        appLink: "https://stormy-escarpment-29702-726705b51eaa.herokuapp.com/",
        developerPractice: 'express.js server and promises'
    }


function App() {
    //The outlet component will conditionally swap between different pages according to the URL
    return (
        <>
            <Nav />
            <Heading />
            <Outlet /> 
        </>
    );
}

export default App;
