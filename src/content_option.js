
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
        first: "I love building Mobile Apps",
        second: "Coding cool websites",
        third: "Creating breathtaking UI designs",
        fourth: "Welcome to my portfolio, browse around!",
    },
    description: "On the side I do enjoy building small and large personal projects as a chance to learn new technologies and break things. When I'm not building or trying to break things It's either movies, books or music like most other people, I think.",
    your_img_url: "https://images.unsplash.com/photo-1514790193030-c89d266d5a9d",
};

const dataabout = {
    title: "abit about my self",
    aboutme: "Currently based somewhere on earth, I've had the privilege of working with multiple clients and companies. These experiences have shaped me into striving for simplicity and clarity in my work while finding ways to solve the challenging tasks it takes to build a product that puts a smile on the end user's face.",
};
const worktimeline = [{
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

const skills = [{
        name: "Flutter & Dart",
        value: 90,
    },
    {
        name: "Figma",
        value: 85,
    },
    {
        name: "Javascript",
        value: 80,
    },
    {
        name: "React",
        value: 80,
    },
    {
        name: "Kotlin",
        value: 75,
    },
];

const services = [{
        title: "UI & UX Design",
        description: "I design intuitive and visually appealing user interfaces with a strong focus on usability, accessibility, and user-centered design, ensuring every product is both functional and engaging.",
    },
    {
        title: "Mobile Apps",
        description: "complete mobile solutions from concept to deployment, creating secure, efficient, and user-friendly applications that solve real-world problems across Android and iOS platforms.",
    },
    {
        title: "ICT Support",
        description: "dependable ICT support, including system setup, troubleshooting, network assistance, and software maintenance, ensuring smooth day-to-day technology operations and minimal downtime.",
    },
];

const dataportfolio = [
    {
        img: p1,
        description:
            "A full-featured mobile application, web built with Flutter & React, focused on performance, scalability, and a smooth user experience. The app includes user authentication, real-time data handling, and a modern UI optimized for both Android and iOS devices.",
        link: "https://rexipay-website.vercel.app",
    },
    {
        img: p2,
        description:
            "A complete UI/UX design project centered around law and tech. The design process involved wireframing, prototyping, and creating a visually consistent interface that improves navigation flow and user engagement.",
        link: "https://www.figma.com/design/WMilWqidcAp01M7MwnzbNS/UNICORN?node-id=395-622&t=DjOlA4QcVaNXLDsF-1",
    },
    {
        img: p3,
        description:
            "a hotel landing page, redesign to have a modern and appealing look.",
        link: "https://www.figma.com/design/rzxIRkoUpyRwtw354N8lhA/Barefoot-website?node-id=1106-377&t=eqJET6xTbYBPgSvN-1",
    },
    {
        img: p4,
        description:
            "A modern web portfolio developed with React, featuring responsive layouts, reusable components, and optimized performance. The project focuses on delivering a clean user experience across desktop and mobile platforms.",
        link: "https://codewithmike.vercel.app",
    },
];

const contactConfig = {
    YOUR_EMAIL: "m.usidamen@gmail.com",
    YOUR_FONE: "(+234)7054-885-172",
    description: "Contact me for any job opportunity or collaboration. I am open to discussing new projects, creative ideas, or opportunities to be part of your visions.",
    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "service_id",
    YOUR_TEMPLATE_ID: "template_id",
    YOUR_USER_ID: "user_id",
};

const socialprofils = {
  github: "https://github.com/Mheek-frosh",
  tiktok: "https://www.tiktok.com/@mheek_frosh",
  instagram: "https://www.instagram.com/mheeky_007",
  linkedin: "https://www.linkedin.com/in/michaelusidamen",
  youtube: "https://youtube.com/@creedlearn",
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