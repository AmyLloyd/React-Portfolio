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
    image: "/assets/portfolio-screenshot.png",
    gitHubLink: "https://github.com/AmyLloyd/react-portfolio",
    appLink:"https://loquacious-sorbet-06e30f.netlify.app/",
    developerPractice: 'Skills demonstrated: ReactJS'
  },
  {
    id:3,
    title: "Uquiz",
    image: "/assets/uquiz-screenshot.png",
    gitHubLink: "https://github.com/AmyLloyd/UQuiz1.1",
    appLink: "https://enigmatic-anchorage-31363-162a45e83054.herokuapp.com/",
    developerPractice: "Skills demonstrated: MVC and working in teams"
  },
  {
    id:4,
    title: "Project Tomorrow",
    image: "/assets/Project Tomorrow.png",
    gitHubLink: "/gitHub-redirect",
    appLink: "/wordpress",
    developerPractice: "Skills demonstrated: WordPress, BeaverBuilder, responsive behaviour and collaboration "
  },
  {
    id:5,
    title: "Dementia Prevention Solutions website",
    image: "/assets/dementia-prevention-website.png",
    gitHubLink: "/gitHub-redirect",
    appLink: "https://dementiapreventionsolutions.org/",
    developerPractice: "Skills demonstrated: WordPress and collaboration"
  },
  {
    id: 6,
    title: "Next-best Tech Blog",
    image: "/assets/next-best-tech-blog.png",
    gitHubLink: 'https://github.com/AmyLloyd/next-best',
    appLink: 'https://stark-spire-89547-14040d39d29b.herokuapp.com/',
    developerPractice: 'Skills demonstrated: MVC'
  },
  {
    id: 7,
    title: "Text editor",
    image: "/assets/jate.png",
    gitHubLink: 'https://github.com/AmyLloyd/keep-your-words',
    appLink: 'https://keep-your-words.onrender.com/',
    developerPractice: 'Skills demonstrated: PWA using IndexedDB'
  },
  {
    id: 8,
    title: "Notetaker app",
    image: "/assets/note-taker-app.png",
    gitHubLink: "https://github.com/AmyLloyd/quick-get-that-down",
    appLink: "https://stormy-escarpment-29702-726705b51eaa.herokuapp.com/",
    developerPractice: 'Skills demonstrated: express.js server and promises'
  },
  {
    id: 9,
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