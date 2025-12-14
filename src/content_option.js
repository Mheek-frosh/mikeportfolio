import p1 from "./assets/images/port1.png";
import p2 from "./assets/images/port2.png";
import p3 from "./assets/images/port3.png";
import p4 from "./assets/images/port4.png";

const logotext = "Codewithmike";

const meta = {
  title: "Michael Usidamen",
  description:
    "I’m Michael Usidamen a mobile app developer and full stack developer, currently working in Nigeria",
};

const introdata = {
  title: "Hi I'm Michael Usidamen",
  animated: {
    first: "I love coding Mobile Apps",
    second: "Building cool websites",
    third: "Creating breathtaking UI designs",
  },
  description:
    "On the side I do enjoy building small and large personal projects as a chance to learn new technologies and break things.",
  your_img_url: p1,
};

const dataabout = {
  title: "abit about my self",
  aboutme:
    "Currently based somewhere on earth, I've had the privilege of working with multiple clients and companies. These experiences have shaped me into striving for simplicity and clarity in my work while finding ways to solve challenging problems.",
};

const worktimeline = [
  {
    jobtitle: "Seventh Sea Technologies",
    where: "Abuja, Nigeria",
    date: "2025 - Present",
  },
  {
    jobtitle: "Frontend Developer",
    where: "Afretrade DTM",
    date: "2024",
  },
  {
    jobtitle: "UI/UX Designer",
    where: "Secured Records Solutions",
    date: "2023",
  },
];

const skills = [
  { name: "Flutter & Dart", value: 90 },
  { name: "Figma", value: 85 },
  { name: "JavaScript", value: 80 },
  { name: "React", value: 80 },
  { name: "Kotlin", value: 75 },
];

const services = [
  {
    title: "UI & UX Design",
    description:
      "I design intuitive and visually appealing user interfaces with a strong focus on usability and accessibility.",
  },
  {
    title: "Mobile Apps",
    description:
      "Complete mobile solutions from concept to deployment, creating efficient and user-friendly applications.",
  },
  {
    title: "ICT Support",
    description:
      "Dependable ICT support including system setup, troubleshooting, and maintenance.",
  },
];

const dataportfolio = [
  {
    img: p1,
    description:
      "A Flutter-based mobile application focused on performance, scalability, and smooth user experience.",
    link: "#",
  },
  {
    img: p2,
    description:
      "A UI/UX design project emphasizing user research, prototyping, and modern visual consistency.",
    link: "#",
  },
  {
    img: p3,
    description:
      "A fintech interface designed for secure transactions, intuitive dashboards, and clean data flow.",
    link: "#",
  },
  {
    img: p4,
    description:
      "A responsive web application built with React, featuring reusable components and optimized performance.",
    link: "#",
  },
];

const contactConfig = {
  YOUR_EMAIL: "m.usidamen@gmail.com",
  YOUR_FONE: "(+234)7054-885-172",
  description:
    "Contact me for any job opportunity or collaboration. I am open to discussing new projects or creative ideas.",
  YOUR_SERVICE_ID: "service_id",
  YOUR_TEMPLATE_ID: "template_id",
  YOUR_USER_ID: "user_id",
};

/* ✅ FIXED SOCIAL PROFILES (KEYS MATCH ICON_MAPPING) */
const socialprofils = {
  github: "https://github.com/Mheek-frosh",
  tiktok: "https://www.tiktok.com/@mheek_frosh",
  instagram: "https://www.instagram.com/mheek_frosh",
  linkedin: "https://www.linkedin.com/in/michaelusidamen",
  twitter: "https://twitter.com",
  youtube: "https://www.youtube.com",
};

export {
  meta,
  dataabout,
  dataportfolio,
  worktimeline,
  skills,
  services,
  introdata,
  contactConfig,
  socialprofils,
  logotext,
};
