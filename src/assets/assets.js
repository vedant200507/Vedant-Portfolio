import { FaLightbulb, FaPaintBrush, FaCode, FaReact, FaServer, FaMobileAlt, FaTools, FaNodeJs, FaStripe, FaVuejs, FaFire, FaDatabase, FaCloud, FaRobot, FaUserFriends } from 'react-icons/fa';

import profileImg from "./profileImg.jpeg";
import aboutImg from "./aboutImg.png";
import projectImg1 from '../assets/projectImg1.png';
import projectImg2 from '../assets/projectImg2.png';
import projectImg3 from '../assets/projectImg3.png';
import projectImg4 from '../assets/projectImg4.png';
import projectImg5 from '../assets/projectImg5.png';
import projectImg6 from '../assets/projectImg6.png';


export const assets = {
    profileImg,
    aboutImg,
};


export const aboutInfo = [
    {
      icon: FaLightbulb,
      title: 'Innovative',
      description: 'I love creating unique solutions to complex problems with cutting-edge technologies.',
      color: 'text-purple'
    },
    {
      icon: FaPaintBrush,
      title: 'Design Oriented',
      description: 'Beautiful design and user experience are at the heart of everything I create.',
      color: 'text-pink'
    },
    {
      icon: FaCode,
      title: 'Clean Code',
      description: 'I write maintainable, efficient code following best practices and modern patterns.',
      color: 'text-blue'
    }
    
  ];



export const skills = [
  {
    title: 'Frontend Development',
    icon: FaReact,
    description: 'Building responsive and interactive user interfaces with modern frameworks.',
    tags: ['HTML', 'CSS', 'JavaScript', 'React.JS', 'Tailwind CSS']
  },
  {
    title: 'Backend Development',
    icon: FaServer,
    description: 'Creating robust server-side applications and RESTful APIs.',
    tags: ['Node.js', 'Java', 'Spring Boot']
  },
  {
    title: 'Database Management',
    icon: FaDatabase,
    description: 'Designing and optimizing databases for performance and scalability.',
    tags: ['MongoDB','MySQL']
  },
  {
    title: 'Mobile Development',
    icon: FaMobileAlt,
    description: 'Building cross-platform mobile applications with modern tools.',
    tags: ['React Native', 'Flutter']
  },
  {
    title: 'Tools & Technologies',
    icon: FaTools,
    description: 'Essential tools and technologies I use in my development workflow.',
    tags: ['Git & GitHub', 'VS Code']
  },
  {
    title: 'Soft Skills',
    icon: FaUserFriends,
    description: 'Professional qualities that help me collaborate, communicate, and grow effectively.',
    tags: [
      'Communication',
      'Teamwork',
      'Problem Solving',
      'Time Management',
      'Leadership',
      'Adaptability',
      'Critical Thinking',
      'Quick Learning',
      'Muiti-Tasking'
    ]
  }
];



export const projects = [
  {
  title: "🏏 IPL Schedule",
  description: "A mini project built using only HTML5 to demonstrate the practical implementation of various HTML elements. This project presents the IPL 2026 Match Schedule with team details, player information, stadium details, Google Maps integration, and embedded match highlights.",
  image: projectImg1,
  tech: ["HTML5"],
  demo: "https://vedant200507.github.io/HTML-IPL-Schedule/",
  code: "https://github.com/vedant200507/HTML-IPL-Schedule",
},
  {
    title: "💪 FitZone Fitness Club",
    description: "A modern, responsive, and visually appealing fitness club landing page built using HTML5 and CSS3. This project demonstrates strong front-end development skills by implementing modern layouts, attractive UI design, smooth animations, interactive elements, and professional styling techniques.",
    image: projectImg2,
    tech: ["HTML5", "CSS3"],
    demo: "https://vedant200507.github.io/FitZone/",
    code: "https://github.com/vedant200507/FitZone",
  },
  {
    title: "🚀 Task-Manager",
    description: "TaskFlow is a modern, responsive, and interactive Task Management Web Application developed using HTML5, CSS3, and Vanilla JavaScript. The primary goal of this project is to help users efficiently organize, manage, and track their daily tasks through a clean, user-friendly interface with smooth animations and real-time interactions.",
    image: projectImg3,
    tech: ["HTML5", "CSS3", "JavaScript"],
    demo: " https://vedant200507.github.io/Task-Manager/",
    code: "https://github.com/vedant200507/Task-Manager",
  },
  {
    title: "🍔 HungryAdda - Food Delivery Web Application",
    description: "A modern and responsive Food Delivery Web Application built using React.js and Vite. This project allows users to browse delicious food items, add them to the cart, manage item quantities, and proceed to checkout with a QR code-based payment interface.",
    image: projectImg4,
    tech: ["HTML5", "CSS3", "JavaScript", "React.js", "Vite"],
    demo: "https://hungry-adda-z8sa.vercel.app/",
    code: "https://github.com/vedant200507/HungryAdda",
  },
  {
    title: "🩸 Blood Bank Management System (BBMS)",
    description: "A web application built with Node.js and MongoDB to streamline blood donation and transfusion services, ensuring timely access to life-saving blood when and where it’s needed most.",
    image: projectImg5,
    tech: ["HTML", "CSS", "JavaScript", "Node.js", "MongoDB"],
    demo: "blood-bank-management-system-bbms-pi.vercel.app",
    code: "https://github.com/vedant200507/Blood-Bank-Management-System-BBMS-",
  },
  {
    title: "📂 FileShareApp",
    description: "A fast and simple Flutter app to share files between devices with ease! ",
    image: projectImg6,
    tech: ["Flutter","MongoDB"],
    demo: "#",
    code: "https://github.com/vedant200507/File-Sharing-App",
  }
];


export const workData = [
  {
    role: "Full Stack Developer Intern",
    company: "Codec Technologies",
    duration: "July 2025 - Jan 2026",
    description:
      "Completed a 6-month AICTE & ICAC approved internship focused on full stack web development. Worked on frontend and backend development using modern web technologies and gained practical experience in building responsive and dynamic web applications.",
    color: "purple",
    certificate: "/certificates/codec-certificate.pdf"
  },

  {
    role: "Cloud Intern",
    company: "iFuture Technologies Pvt. Ltd., Kalyan",
    duration: "June 2024",
    description:
      "Successfully completed a 30-hour Cloud Internship Program with practical exposure to Microsoft Server Management and Private Cloud Technologies. Worked on concepts related to Offline Applications in Private Cloud environments while developing punctuality, collaboration, and eagerness to learn.",
    color: "blue",
    certificate: "/certificates/ifuture-certificate.pdf"
  }
];
