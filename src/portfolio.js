/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/codingPerson.json"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: false, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Leonardo Carboni",
  title: "Ciao, I'm Leonardo",
  subTitle: emoji(
    "🧲 A young passionate devloper with the dream of changing the world using AI."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1W7wd0djMV5Hu40IoApmfC2NMh_zflHY1/view?usp=share_link", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/leonardocarboni",
  linkedin: "https://www.linkedin.com/in/leonardo-carboni/",
  gmail: "carbonileonardo7@gmail.com",
  // gitlab: "https://gitlab.com/saadpasta",
  // facebook: "https://www.facebook.com/saad.pasta7",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "🤖 Specializing in the development of AI applications based on LLMs and Diffusion Models."
    ),
    emoji("👨🏻‍🔬 Full stack computer scientist and engineer"),
    emoji(
      "🪴 Developing applications for the web and mobile devices using React, Flutter, and Swift."
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  mlSkills: [
    // Python, Tensorflow, Pytorch, Scikit-Learn, Pandas, Numpy, Matplotlib
    {
      skillName: "Python",
      fileName: "python"
    },
    {
      skillName: "Tensorflow",
      fileName: "tensorflow"
    },
    {
      skillName: "Pytorch",
      fileName: "pytorch"
    }
  ],

  dataSkills: [
    {
      skillName: "SQL",
      fileName: "sql"
    },
    {
      skillName: "Firebase",
      fileName: "firebase"
    },
    {
      skillName: "MongoDB",
      fileName: "mongodb"
    }
  ],

  frontendSkills: [
    {
      skillName: "HTML 5",
      fileName: "html"
    },
    {
      skillName: "CSS 3",
      fileName: "css"
    },
    {
      skillName: "JS+JQuery",
      fileName: "javascript"
    },
    {
      skillName: "ReactJS",
      fileName: "react"
    },
    {
      skillName: "Swift",
      fileName: "swift"
    },
    {
      skillName: "BS+Tailwind",
      fileName: "tailwind"
    },
    {
      skillName: "Flutter/Dart",
      fileName: "flutter"
    }
  ],

  backendSkills: [
    // Django, Php,
    {
      skillName: "Django",
      fileName: "django"
    },
    {
      skillName: "PHP",
      fileName: "php"
    }
  ],

  softwareSkills: [
    {
      skillName: "Java",
      fileName: "java"
    },
    {
      skillName: "C",
      fileName: "c"
    },
    {
      skillName: "C++",
      fileName: "cpp"
    },
    {
      skillName: "Bash",
      fileName: "bash"
    },
    // git
    {
      skillName: "git",
      fileName: "git"
    },
    {
      skillName: "Docker",
      fileName: "docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Utrecht University",
      logo: require("./assets/images/uu.png"),
      subHeader: "Master in Artificial Intelligence",
      duration: "September 2022 - October 2024",
      desc: "Finishing my master in AI at Utrecht University, specializing in Large Language Models.",
      descBullets: [
        "Machine Learning oriented courses: ML for Human Vision and Language, Computer Vision, Natural Language Processing, Reinforcement Learning, Data Mining",
        "Thesis on low parameter count language models for code generation"
      ]
    },
    {
      schoolName: "Bologna University",
      logo: require("./assets/images/unibo.png"),
      subHeader: "Bachelor in Computer Sciences and Engineering",
      duration: "September 2019 - July 2022",
      desc: "Took courses about Software Engineering, Web Security, Operating Systems, ...",
      descBullets: [
        "Comprehensive knowledge of the main programming languages and software development processes and techniques",
        "Final grade: 103/110",
        "Thesis project: full stack social network for generative art using GANs"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "AI/Machine Learning", //Insert stack or technology you have experience in
      progressPercentage: "80%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Algorithms",
      progressPercentage: "70%"
    },
    {
      Stack: "Web/App Development",
      progressPercentage: "90%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Facebook",
      companylogo: require("./assets/images/facebookLogo.png"),
      date: "June 2018 – Present",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      role: "Front-End Developer",
      company: "Quora",
      companylogo: require("./assets/images/quoraLogo.png"),
      date: "May 2017 – May 2018",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      role: "Software Engineer Intern",
      company: "Airbnb",
      companylogo: require("./assets/images/airbnbLogo.png"),
      date: "Jan 2015 – Sep 2015",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
  ],
  display: false
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "Projects I've worked on, from AI to Web and Game Development",
  projects: [
    {
      image: require("./assets/images/alinovi.jpg"),
      projectName: "AlinoviBot",
      projectDesc: "Custom chatbot based on Francesca Alinovi's bibliography, to help art students in their researches. Built with LangChain, PineconeDB and OpenAI's GPT-4.",
      // footerLink: [
      //   {
      //     name: "Visit Website",
      //     url: "http://saayahealth.com/"
      //   }
      //   //  you can add extra buttons here.
      // ]
    },
    {
      image: require("./assets/images/dreamscape.png"),
      projectName: "Dreamscape",
      projectDesc: "Social network for generative art, with a VQGAN+CLIP based image generator. Built with Flutter, Firebase and Python.",
      footerLink: [
        {
          name: "Check Dreamscape on GitHub",
          url: "https://github.com/leonardocarboni/dreamscape/tree/main"
        }
      ]
    },
    {
      image: require("./assets/images/goosegame.png"),
      projectName: "GooseGame",
      projectDesc: "Object oriented implementation of the Goose Game, a board game. Built with Java.",
      footerLink: [
        {
          name: "Check GooseGame on GitHub",
          url: "https://github.com/leonardocarboni/OOP20-GooseGame/tree/main"
        }
      ]
    },
    {
      image: require("./assets/images/carguy.png"),
      projectName: "CarGuy",
      projectDesc: "iOS app for car enthusiasts. Built with SwiftUI and Firebase.",
      footerLink: [
        {
          name: "Check Carguy on GitHub",
          url: "https://github.com/leonardocarboni/CarGuy/tree/main"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: "Reach Out",
  subtitle:
    "Discuss a project or recruitment opportunities. My inbox is open for all",
  number: "+39 3332522804",
  email_address: "carbonileonardo7@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
