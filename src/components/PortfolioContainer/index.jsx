import Project from "../Project";

//Define array of available projects
const projectList = [
  {
    id:1,
    title:"Wait-there",
    image: "/assets/wait-there-homepage-mobile.png",
    gitHubLink: "https://github.com/AmyLloyd/wait-there",
    appLink: "https://wait-there-cd38b63b753e.herokuapp.com/",
    developerPractice: "UX design, implementation with user testing and MVC"
  },
  {
    id:2,
    title: "dosageHelper",
    image: "/assets/dosage-helper-homepage.png",
    gitHubLink: "https://github.com/AmyLloyd/dosageHelper",
    appLink: 'https://dosagehelper.onrender.com/',
    developerPractice: 'MERN Stack, React.js, Mongoose, Mongodb, JavaScript'
  },
  {
    id:3,
    title: "Uquiz",
    image: "/assets/uquiz-homepage.png",
    gitHubLink: "https://github.com/AmyLloyd/UQuiz1.1",
    appLink: "https://enigmatic-anchorage-31363-162a45e83054.herokuapp.com/",
    developerPractice: "MVC and working in teams"
  },
  {
    id:4,
    title: "Portfolio",
    image: "/assets/portfolio-homepage.png",
    gitHubLink: "https://github.com/AmyLloyd/react-portfolio",
    appLink:"https://loquacious-sorbet-06e30f.netlify.app/",
    developerPractice: 'ReactJS'
  },
  {
    id:5,
    title: "Project Tomorrow",
    image: "/assets/project-tomorrow-homepage.png",
    gitHubLink: "/gitHub-redirect",
    appLink: "/wordpress",
    developerPractice: "WordPress, BeaverBuilder, responsive behaviour and collaboration "
  },
  {
    id:6,
    title: "Dementia Prevention Solutions website",
    image: "/assets/dementia-solutions-homepage.png",
    gitHubLink: "/gitHub-redirect",
    appLink: "https://dementiapreventionsolutions.org/",
    developerPractice: "WordPress and collaboration"
  },
  {
    id: 7,
    title: "Next-best Tech Blog",
    image: "/assets/next-best-tech-blog-homepage.png",
    gitHubLink: 'https://github.com/AmyLloyd/next-best',
    appLink: 'https://stark-spire-89547-14040d39d29b.herokuapp.com/',
    developerPractice: 'MVC'
  },
  {
    id: 8,
    title: "Text editor",
    image: "/assets/jate.png",
    gitHubLink: 'https://github.com/AmyLloyd/keep-your-words',
    appLink: 'https://keep-your-words.onrender.com/',
    developerPractice: 'PWA using IndexedDB'
  },
  {
    id: 9,
    title: "Notetaker app",
    image: "/assets/note-taker-app.png",
    gitHubLink: "https://github.com/AmyLloyd/quick-get-that-down",
    appLink: "https://stormy-escarpment-29702-726705b51eaa.herokuapp.com/",
    developerPractice: 'Express.js server and promises'
  },
  {
    id: 10,
    title: "weather-dashboard",
    image: "/assets/weather_dashboard_search_results.png",
    gitHubLink: "https://AmyLloyd/weather-dashboard",
    appLink: "https://amylloyd.github.io/weather-dashboard/",
    developerPractice: 'REST API calls, Bootstrap, JQuery',
  }
];

function Portfolio() {
  return <Project projectList={projectList} />;
}

export default Portfolio;