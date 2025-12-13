// ===== IMPORT LOCAL IMAGES =====
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
        "On the side I enjoy building personal projects as a way to learn new technologies and push my limits creatively.",
    your_img_url: p1, // optional local image
};

const dataabout = {
    title: "abit about my self",
    aboutme:
        "Currently based in Nigeria, I’ve worked with clients and teams to build clean, scalable, and user-focused digital products across mobile and web platforms.",
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
            "Designing intuitive and visually engaging user interfaces focused on usability and real user needs.",
    },
    {
        title: "Mobile App Development",
        description:
            "Building high-performance Android and cross-platform mobile applications using modern frameworks.",
    },
    {
        title: "ICT Support",
        description:
            "Providing reliable technical support, system maintenance, and troubleshooting for smooth operations.",
    },
];


// ===== PORTFOLIO (ONLY 4 ITEMS, LOCAL IMAGES) =====
const dataportfolio = [
    {
        img: p1,
        description:
            "A full-featured mobile application built with Flutter, focused on performance, scalability, and a smooth user experience. The app includes user authentication, real-time data handling, and a modern UI optimized for both Android and iOS devices.",
        link: "#",
    },
    {
        img: p2,
        description:
            "A complete UI/UX design project centered around user research and usability testing. The design process involved wireframing, prototyping, and creating a visually consistent interface that improves navigation flow and user engagement.",
        link: "#",
    },
    {
        img: p3,
        description:
            "A fintech application interface designed to support secure digital payments and financial tracking. The project emphasizes data security, intuitive dashboards, and seamless transaction flows tailored for everyday users.",
        link: "#",
    },
    {
        img: p4,
        description:
            "A modern web application developed with React, featuring responsive layouts, reusable components, and optimized performance. The project focuses on delivering a clean user experience across desktop and mobile platforms.",
        link: "#",
    },
];


const contactConfig = {
    YOUR_EMAIL: "m.usidamen@gmail.com",
    YOUR_FONE: "(+234)7054-885-172",
    description:
        "Contact me for job opportunities, collaborations, or to discuss new ideas and projects.",
    YOUR_SERVICE_ID: "service_id",
    YOUR_TEMPLATE_ID: "template_id",
    YOUR_USER_ID: "user_id",
};

const socialprofils = {
    github: "https://github.com/Mheek-frosh",
    facebook: "https://facebook.com",
    linkedin: "https://linkedin.com/in/michaelusidamen",
    twitter: "https://twitter.com",
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
