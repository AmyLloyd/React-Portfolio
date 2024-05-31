import Project from "../Project";

//Define array of available projects
const projectList = [
  {
    id:1,
    title: "dosageHelper",
    image: "/assets/dosageHelper_homepage.png",
    gitHubLink: "https://github.com/AmyLloyd/dosageHelper",
    appLink: 'https://dosagehelper.onrender.com/',
    developerPractice: 'Skills demonstrated: MERN Stack, React.js, Mongoose, Mongodb, javascript'
  },
  {
    id:2,
    title: "Portfolio",
    image: "/assets/Portfolio-screenshot.png",
    gitHubLink: "https://github.com/AmyLloyd/react-portfolio",
    appLink:"https://loquacious-sorbet-06e30f.netlify.app/",
    developerPractice: 'Skills demonstrated: ReactJS'
  },
  {
    id:3,
    title: "Uquiz",
    image: "/assets/uquiz-screenshot.png",
    gitHubLink: "https://github.com/danield001/UQuiz",
    appLink: "https://uquiz-app-89fe7511a64b.herokuapp.com/",
    developerPractice: "Skills demonstrated: MVC and working in teams"
  },
  {
    id:4,
    title: "Dementia Prevention Solutions website",
    image: "../../assets/dementia-prevention-website.png",
    gitHubLink: "gitHub-redirect",
    appLink: "https://dementiapreventionsolutions.org/",
    developerPractice: "Skills demonstrated: WordPress and collaboration"
  },
  {
    id: 5,
    title: "Next-best Tech Blog",
    image: "/assets/next-best-tech-blog.png",
    gitHubLink: 'https://github.com/AmyLloyd/next-best',
    appLink: 'https://stark-spire-89547-14040d39d29b.herokuapp.com/',
    developerPractice: 'Skills demonstrated: MVC'
  },
  {
    id: 6,
    title: "Text editor",
    image: "/assets/jate.png",
    gitHubLink: 'https://github.com/AmyLloyd/keep-your-words',
    appLink: 'https://keep-your-words.onrender.com/',
    developerPractice: 'Skills demonstrated: PWA using IndexedDB'
  },
  {
    id: 7,
    title: "Notetaker app",
    image: "/assets/note-taker-app.png",
    gitHubLink: "https://github.com/AmyLloyd/quick-get-that-down",
    appLink: "https://stormy-escarpment-29702-726705b51eaa.herokuapp.com/",
    developerPractice: 'Skills demonstrated: express.js server and promises'
  },
  {
    id: 8,
    title: "weather-dashboard",
    image: "/assets/weather_dashboard_search_results.png",
    gitHubLink: "https://AmyLloyd/weather-dashboard",
    appLink: "https://amylloyd.github.io/weather-dashboard/",
    developerPractice: 'REST API calls, Bootstrap, jQuery',
  }
];

function Portfolio() {
  return <Project projectList={projectList} />;
}

export default Portfolio;