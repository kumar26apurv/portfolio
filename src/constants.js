// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';
import csharpLogo from './assets/tech_logo/csharp.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import angularLogo from './assets/tech_logo/angular.png';
import sqlLogo from './assets/tech_logo/sql.png';
import aspnetLogo from './assets/tech_logo/aspnet.png';
import dockerLogo from './assets/tech_logo/docker.png';
import azureLogo from './assets/tech_logo/azure.png';

// Education Section Logo's
import rcetLogo from './assets/education_logo/rcet.png';
import bdLogo from './assets/education_logo/bd.png';
import himLogo from "./assets/education_logo/him.jpg";

// Project Section Logo's
import sensaiLogo from './assets/work_logo/sensai.png';
import quickAILogo from './assets/work_logo/quickAI.png';
import smartCertifyLogo from './assets/work_logo/smartCertify.png';
import nestorriaLogo from './assets/work_logo/nestorria.png';

export const SkillsInfo = [
  {
    title: "Languages",
    skills: [
      { name: "C", logo: cLogo },
      { name: "C++", logo: cppLogo },
      { name: "Java", logo: javaLogo },
      { name: "C#", logo: csharpLogo },
      { name: "SQL", logo: sqlLogo },
      { name: "JavaScript", logo: javascriptLogo },
    ],
  },
  {
    title: "FrontEnd",
    skills: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      { name: "React", logo: reactjsLogo },
      { name: "Next.js", logo: nextjsLogo },
      { name: "Tailwind CSS", logo: tailwindcssLogo },
      { name: "Angular", logo: angularLogo },
    ],
  },
  {
    title: "BackEnd",
    skills: [
      { name: "Node.js", logo: nodejsLogo },
      { name: "Express.js", logo: expressjsLogo },
      { name: "ASP.NET", logo: aspnetLogo },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "MongoDB", logo: mongodbLogo },
      { name: "PostgreSQL", logo: postgreLogo },
      { name: "MySQL", logo: mysqlLogo },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Docker", logo: dockerLogo },
      { name: "Azure", logo: azureLogo },
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "VS Code", logo: vscodeLogo },
      { name: "Postman", logo: postmanLogo },
      { name: "Vercel", logo: vercelLogo },
    ],
  },
];
  
  export const education = [
    {
      id: 0,
      img: rcetLogo,
      school: "RCET, Bhilai",
      date: "Sept 2022 - May 2026",
      grade: "77.4%",
      desc: "I am currently pursuing a B.Tech in Computer Science at RCET, Bhilai. My studies focus on core subjects such as Data Structures and Algorithms, Web Development, and Database Management Systems, helping me build strong problem-solving skills and practical software development knowledge.",
      degree: "Bachelor of Technology - B.Tech (Computer Science)",
    },
    {
      id: 2,
      img: bdLogo,
      school: "B.D. Public School, Patna",
      date: "Apr 2020 - March 2021",
      grade: "94.2%",
      desc: "I completed my class 12 education from B.D. Public School, Patna, under the CBSE board, where I studied Physics, Chemistry, and Mathematics (PCM) with Physical Education.",
      degree: "CBSE(XII) - PCM",
    },
    {
      id: 3,
      img: himLogo,
      school: "Himalayan Public School, Patna",
      date: "Apr 2018 - March 2019",
      grade: "89.4%",
      desc: "I completed my class 10 education from Himalayan Public School, Patna, under the CBSE board, where I studied Science.",
      degree: "CBSE(X)",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "AI Career Coach– Full Stack AI Platform ",
      description:
        "An AI-powered career coaching platform that helps users improve their resumes, prepare for interviews, and receive personalized career guidance using large language models. Includes authentication, dashboards, and real-time AI interactions.",
      image: sensaiLogo,
      tags: [
        "React",
        "Next.js",
        "Tailwind",
        "NeonDB",
        "Prisma",
        "Clerk",
        "Inngest",
        "Groq API",
      ],
      github: "https://github.com/kumar26apurv/sensai.git",
      webapp: "https://sensai-snowy-nu.vercel.app/",
    },
    {
      id: 1,
      title: "QuickAI– AI SaaS Application with Subscription Model ",
      description:
        "A full-stack AI SaaS platform offering multiple AI-powered tools such as content generation and productivity features. Built with a subscription model, secure authentication, usage limits, and cloud-based media storage.",
      image: quickAILogo,
      tags: [
        "React",
        "Node.js",
        "Express",
        "PostgreSQL (Neon)",
        "Clerk",
        "Groq AI",
        "Cloudinary",
      ],
      github: "https://github.com/kumar26apurv/QuickAI.git",
      webapp: "https://quick-ai-liart-two.vercel.app/",
    },
    {
      id: 2,
      title: "SmartCertify– Online Certification & Testing Platform",
      description:
        "An online certification and assessment platform where users can attempt tests, track performance, and earn certificates. Built using Angular and ASP.NET Core with secure authentication and cloud deployment on Azure.",
      image: smartCertifyLogo,
      tags: ["Angular 19", "ASP.NET Core 9", "SQL Server", "Azure", "Docker"],
      github:"https://github.com/kumar26apurv/Smart_Learn---Online-Course-and-Certification.git",
      webapp: "https://smartcertify-web.azurewebsites.net/home",
    },
    {
      id: 3,
      title: "Nestorria– MERN Real Estate Platform ",
      description:
        "A full-stack MERN real estate platform that enables users to browse, list, and manage properties. Features user authentication, property listings, payments, and a responsive, modern UI.",
      image: nestorriaLogo,
      tags: [
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "Tailwind",
        "Clerk",
        "Stripe",
      ],
      github: "https://github.com/kumar26apurv/Nestorria.git",
      webapp: "https://nestorria.vercel.app/",
    },
  ];  