
import {
  silvare,mentionlytics, icon1, icon2, icon3, icon4, icon5, icon6, icon7, icon8, icon9, icon10, icon11, icon12, icon13, icon14, icon15, icon16, icon17, icon18, icon19, icon20, alphabank, accenture ,
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";


  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "pricing",
      title: "Pricing",
    },
    {
      id: "projects",
      title: "Projects",
    },
    {
      id: "contact",
      title: "Contact",
    },
    {
      id: "work",
      title: "CV",
    },
  ];
  
  const services = [
    {
      title: "Web Development",
      icon: icon1,
    },
    {
      title: "App Development",
      icon: icon2,
    },
    {
      title: "Backend Development",
      icon: icon3,
    },
    {
      title: "UI Design",
      icon: icon4,
    },
  ];
  
 export const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
 export const prices = [{
  id: "0",
  title: "Basic",
  description: "AI chatbot, personalized recommendations",
  price: "0",
  features: [
    "An AI chatbot that can understand your queries",
    "Personalized recommendations based on your preferences",
    "Ability to explore the app and its features without any cost",
  ],
},
{
  id: "1",
  title: "Premium",
  description: "Advanced AI chatbot, priority support, analytics dashboard",
  price: "9.99",
  features: [
    "An advanced AI chatbot that can understand complex queries",
    "An analytics dashboard to track your conversations",
    "Priority support to solve issues quickly",
  ],
},
{
  id: "2",
  title: "Enterprise",
  description: "Custom AI chatbot, advanced analytics, dedicated account",
  price: null,
  features: [
    "An AI chatbot that can understand your queries",
    "Personalized recommendations based on your preferences",
    "Ability to explore the app and its features without any cost",
  ],
},];
  
  export const experiences = [
      {
        title: "Software Developer",
        company_name: "Travelsoft",
        icon: icon19,
        iconBg: "#383E56",
        date: "March 2020 - April 2021",
        points: [
          "Designed reusable and reliable code for use within distributed could enviroments.",
          "Updated old codebases to modern development standards, improving functionality",
          "Ionic, Angular, Typescript, Javascript, HTML, CSS, SCSS, NodeJS, SQL, Android Studio, Ios Code.",
        ],
      },
      {
        title: "Software Deloper",
        company_name: "Mentionlytics",
        icon: mentionlytics,
        iconBg: "#E6DEDD",
        date: "Jan 2021 - Feb 2022",
        points: [
          "Social Media monitoring application with brand name keywords analysis",
          "Analyzie visual designs into design patterns",
          "Bootstrap and responsive web application development",
          "Troubleshooting and resolving bugs for clients in real‑time, alongside the seamless implementation of new features to meet client requirements",
        ],
      },
      {
        title: "Associate Software Developer",
        company_name: "Silvare",
        icon: silvare,
        iconBg: "#383E56",
        date: "Jan 2022 - Jan 2023",
        points: [
          "Contractor",
        ],
      },
      {
        title: "Associate Software Developer",
        company_name: "Accenture",
        icon: accenture,
        iconBg: "#383E56",
        date: "Jan 2022 - Jan 2023",
        points: [
          "Contractor",
        ],
      },
      {
        title: "Associate Software Developer",
        company_name: "Alpha Bank",
        icon: alphabank,
        iconBg: "#383E56",
        date: "Jan 2022 - Jan 2023",
        points: [
          "Proven track record of successfully delivering projects related to Urgent Transfers, Foreign Remittances, Online Term Deposit, Letter of Guarantees, and Imports as a key member of the Corporate Banking team",
          "Proficient in managing projects from start to finish, with a proven track record of strong leadership skills",
          "Collaborated effectively with team members and third party companies, providing guidance and support where needed.",
          "Designed and developed robust solutions that met client requirements for functionality, scalability, and performance, working closely with both software development and testing teams"
        ],
      },
    ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Rent a Car",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "ReactJS",
          color: "blue-text-gradient",
        },
        {
          name: "NodeJS",
          color: "green-text-gradient",
        },
        {
          name: "MongoDB",
          color: "white",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "ShopEase",
      description:
        "is the ultimate destination for all your online shopping needs! ShopEase is a comprehensive Ecommerce Web Application designed to provide users with a seamless and convenient shopping experience, coupled with powerful administrative tools to manage your online store efficiently.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "LogoThreads",
      description:
        "is your go-to destination for effortlessly bringing your brand to life on custom-designed t-shirts. With LogoThreads, you can upload your logo with ease and visualize it on a variety of t-shirt styles, colors, and sizes, all from the comfort of your browser.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
    {
      name: "SnapReunion",
      description:
        "SnapReunion is the ultimate photo-sharing platform designed to make your gatherings unforgettable. Seamlessly capture every moment, from the joyous laughter at weddings to the wild antics of parties, and instantly share them with your guests. Preserve the memories of your special events and reunions with ease, ensuring that everyone stays connected long after the celebrations end.        ",
      tags: [
        {
          name: "Angular",
          color: "pink-text-gradient",
        },
        {
          name: "NodeJS",
          color: "green-text-gradient",
        },
        {
          name: "Firebase",
          color: "yellow-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  var x = [
    {
      id: "0",
      title: "Basic",
      description: "AI chatbot, personalized recommendations",
      price: "0",
      features: [
        "An AI chatbot that can understand your queries",
        "Personalized recommendations based on your preferences",
        "Ability to explore the app and its features without any cost",
      ],
    },
    {
      id: "1",
      title: "Premium",
      description: "Advanced AI chatbot, priority support, analytics dashboard",
      price: "9.99",
      features: [
        "An advanced AI chatbot that can understand complex queries",
        "An analytics dashboard to track your conversations",
        "Priority support to solve issues quickly",
      ],
    },
    {
      id: "2",
      title: "Enterprise",
      description: "Custom AI chatbot, advanced analytics, dedicated account",
      price: null,
      features: [
        "An AI chatbot that can understand your queries",
        "Personalized recommendations based on your preferences",
        "Ability to explore the app and its features without any cost",
      ],
    }
  ];
  export { services, testimonials, projects,x };
  