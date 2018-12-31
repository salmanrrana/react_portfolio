import React from "react";
import Project from "./Project";

const PROJECTS = [
  {
    id: 1,
    name: "Tipzy",
    description:
      "A simple app built for the times you dont want to figure out the math to split a check. Coming to a Google Play and App Store near you soon.",
    technologies: "React Native",
    linkDescription: "Try it through Expo: ",
    link: "https://expo.io/@salmanrrana/tipzy",
    image: "https://i.imgur.com/MdFFdyc.png"
  },
  {
    id: 2,
    name: "JAWBS",
    description:
      "App built to help people find a job using the indeed API. It was built while following a React Native course taught by Stephen Grider.",
    technologies:
      "React Native, Redux, Redux Thunk, React Navigation, Lodash, Axios",
    linkDescription: "Check out the code here: ",
    link: "https://github.com/salmanrrana/jawbs-reactnative",
    image: "https://i.imgur.com/198tXTB.png"
  },
  {
    id: 3,
    name: "Coco",
    description:
      "The company aimed to resolve the headaches of long messy links. The website and Chrome Extension allows users to comparative shop across sites.",
    technologies: "React, Firebase",
    linkDescription: null,
    link: null,
    image: "https://i.imgur.com/GoqPMvN.png"
  },
  {
    id: 4,
    name: "Start The Show",
    description:
      "A small, yet, fun javscript excercise to make a simple sampler. Let your imagination and musical side shine.",
    technologies: "Javascript",
    linkDescription: "Check it out here: ",
    link: "https://salmanrrana.github.io/drum_sampler/",
    image: "https://i.imgur.com/lrL2JKb.jpg"
  },
  {
    id: 5,
    name: "Hoop It Up",
    description:
      "Single page application created to help you and your friends keep score whenever you play a game of pickup basketball!",
    technologies: "React",
    linkDescription: "Check it out here: ",
    link: "http://hoopitup.surge.sh/",
    image: "https://i.imgur.com/iwJTQno.png"
  },
  {
    id: 6,
    name: "Health Connect",
    description:
      "Collaborative project with mockups and wireframes provided by UX team. The app connects children, through their guardians sign up, with doctor-care through the school nurse.",
    technologies: "Node.js, Mongoose, Express",
    linkDescription: "Check it out here: ",
    link: "http://health-connect-ga.herokuapp.com/",
    image: "https://i.imgur.com/BdP4rzN.png"
  }
];

class ProjectsList extends React.Component {
  render() {
    return PROJECTS.map(project => {
      return <Project projectData={project} key={project.id} />;
    });
  }
}

export default ProjectsList;
