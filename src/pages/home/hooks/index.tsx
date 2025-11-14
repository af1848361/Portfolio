import { useMemo } from "react";
import {
  FaMobile,
  FaPlug,
  FaPalette,
  FaFire,
  FaReact,
  FaJs,
} from "react-icons/fa";
import {
  SiTypescript,
  SiRedux,
  SiNodedotjs,
  SiPython,
  SiSelenium,
  SiFlask,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";

export default function useHooks() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  const skills = useMemo(
    () => [
      {
        skill: "Java Script",
        icon: <FaJs color='#FFCA28' />,
      },
      {
        skill: "Type script",
        icon: <SiTypescript color='#3178c6' />,
      },
      {
        skill: "React native",
        icon: <FaReact color='#61dafb' />,
      },
      {
        skill: "Api integration",
        icon: <TbApi color='#4CAF50' />,
      },
      {
        skill: "redux",
        icon: <SiRedux color='#764abc' />,
      },
      {
        skill: "Firebase",
        icon: <FaFire color='#FFCA28' />,
      },
      {
        skill: "Node.js",
        icon: <SiNodedotjs color='#68a063' />,
      },
      {
        skill: "Python",
        icon: <SiPython color='#3776ab' />,
      },
      {
        skill: "Selenium",
        icon: <SiSelenium color='#43B02A' />,
      },
      {
        skill: "Flask",
        icon: <SiFlask color='black' />,
      },
      {
        skill: "responsive design",
        icon: <FaMobile color='#2196F3' />,
      },
      {
        skill: "ui/ux principles",
        icon: <FaPalette color='#FF4081' />,
      },
    ],
    []
  );

  const List_Of_Repons_In_Balawal_IT = useMemo(
    () => [
      "Developed high-quality, cross-platform mobile applications using React Native, with a strong focus on responsive design and user experience across various devices.",
      "Built clean, modular, and reusable UI components, adhering to modern software engineering principles and React Native best practices.",
      "Integrated RESTful APIs and backend services into the frontend architecture, working collaboratively with cross-functional teams including designers, backend developers, and QA engineers.",
      "Wrote efficient, maintainable, and scalable code while following industry-standard coding conventions and participating in peer code reviews.",
      "Diagnosed, debugged, and resolved UI/UX issues and logic errors to maintain a smooth and responsive user interface.",
      "Implemented Firebase Authentication to manage secure user sign-in and access control.",
      "Utilized Firestore Database for real-time data synchronization and reliable storage solutions within the app ecosystem.",
    ],
    []
  );

  const bbitTopics = useMemo(
    () => [
      "Business Fundamentals: Learning the core principles of business operations, including finance, marketing, management, and entrepreneurship.",
      "Technology-Driven Business Improvement: Understanding how modern technology enhances productivity, decision-making, and competitive advantage in business environments.",
      "Information Systems and E-Business: Studying how information systems are designed, managed, and used to streamline business processes and enable e-commerce.",
      "Computer Programming: Gaining knowledge of key programming languages like C++, Python, and Java to develop business applications and tools.",
      "Database Management Systems: Learning how to design, implement, and manage databases to organize and secure business data efficiently.",
      "Software Engineering and Web Development: Developing skills to create software solutions and web-based platforms tailored for business use.",
    ],
    []
  );
  return {
    itemVariants,
    containerVariants,
    skills,
    List_Of_Repons_In_Balawal_IT,
    bbitTopics,
  };
}
