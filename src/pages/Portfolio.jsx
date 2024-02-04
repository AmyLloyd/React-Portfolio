import Project from "../components/UI/Project"

//Define array of available projects
const projectList = [
  {
    id: 1,
    title: "Next-best Tech Blog",
    image: "/src/assets/next-best-tech-blog.png",
    gitHubLink: 'https://github.com/AmyLloyd/next-best',
    appLink: 'https://stark-spire-89547-14040d39d29b.herokuapp.com/',
    developerPractice: 'MVC'
  },
  {
      id: 2,
      title: "Keep your words- JATE text editor",
      image: "/src/assets/jate.png",
      gitHubLink: 'https://github.com/AmyLloyd/keep-your-words',
      appLink: 'https://keep-your-words.onrender.com/',
      developerPractice: 'PWA using IndexedDB'
  },
  {
      id: 3,
      title: "Quick get that down! Notetaker app",
      image: "/src/assets/note-taker-app.png",
      gitHubLink: "https://github.com/AmyLloyd/quick-get-that-down",
      appLink: "https://stormy-escarpment-29702-726705b51eaa.herokuapp.com/",
      developerPractice: 'express.js server and promises'
  }
];

function Portfolio() {
  return <Project projectList={projectList} />;
}

export default Portfolio;