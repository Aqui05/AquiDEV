import {
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
  pac,
  philJohn,
  carrent,
  jobit,
  tripguide,
  resto,
  threejs,
  kamgoko,
  sgte,
  myMTN,
  laravel,
  php,
  angularjs,
  vuejs,
  mysql,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full Stack Developer",
    icon: web,
  },
  {
    title: "Database Administrator",
    icon: mobile,
  },
  {
    title: "Software engineer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
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
    name: "Vue JS",
    icon: vuejs,
  },
  {
    name: "Angular JS",
    icon: angularjs,
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
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "php",
    icon: php,
  },
  {
    name: "laravel",
    icon: laravel,
  },

];

const experiences = [
  // {
  //   title: "React.js Developer",
  //   company_name: "Starbucks",
  //   icon: starbucks,
  //   iconBg: "#383E56",
  //   date: "March 2020 - April 2021",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  {
    title: "Backend Developer",
    company_name: "Port Autonome de Cotonou(PAC)",
    icon: pac,
    iconBg: "#E6DEDD",
    date: "Aug 2023 - Sep 2023",
    points: [
      "Developing and maintaining web applications using laravel and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Port Autonome de Cotonou(PAC)",
    icon: pac,
    iconBg: "#383E56",
    date: "Mar 2024 - Jun 2024",
    points: [
      "Developing and maintaining web applications using Angular.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "PhilJohn",
    icon:   philJohn  ,
    iconBg: "#E6DEDD",
    date: "Jun 2024 - Aug 2024",
    points: [
      "Developing and maintaining web applications with CMS Odoo and other related technologies.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    "title": "Web Developer",
    "company_name": "Kamgoko",
    "icon": kamgoko,
    "iconBg": "#383E56",
    "date": "Sep 2024 - Jan 2025",
    "points": [
      "Developing custom WordPress plugins to meet specific client requirements.",
      "Building reactive and dynamic user interfaces using Vue.js.",
      "Translating Figma mockups into responsive HTML, CSS, and JavaScript designs.",
      "Collaborating with design teams to ensure technical and visual consistency.",
    ]
  }
];

const testimonials = [
  // {
  //   testimonial:
  //     "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
  //   name: "Sara Lee",
  //   designation: "CFO",
  //   company: "Acme Co",
  //   image: "https://randomuser.me/api/portraits/women/4.jpg",
  // },
  // {
  //   testimonial:
  //     "I've never met a web developer who truly cares about their clients' success like Rick does.",
  //   name: "Chris Brown",
  //   designation: "COO",
  //   company: "DEF Corp",
  //   image: "https://randomuser.me/api/portraits/men/5.jpg",
  // },
  // {
  //   testimonial:
  //     "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
  //   name: "Lisa Wang",
  //   designation: "CTO",
  //   company: "456 Enterprises",
  //   image: "https://randomuser.me/api/portraits/women/6.jpg",
  // },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "laravel",
        color: "blue-text-gradient",
      },
      {
        name: "mysql",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/Aqui05/LOCAVO",
  },
  /*{
    name: "SSP",
    description:
      "web application to manage transport, make reservations and monitor the shipment of goods...",
    tags: [
      {
        name: "angular.js",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "laravel",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/Aqui05/SSP",
  },*/

  {
    name: "LogiTrack",
    description:
      "Web-based platform that allows users to book, manage, and track transportation and shipping services for goods, providing a streamlined and efficient solution for logistics and supply chain needs.",
    tags: [
      {
        name: "Laravel",
        color: "blue-text-gradient",
      },
      {
        name: "Angular JS",
        color: "green-text-gradient",
      },
      {
        name: "mySQL",
        color: "pink-text-gradient",
      },
    ],
    image: sgte,
    source_code_link: "https://github.com/Aqui05/SGTE",
  },
  {
    name: "Quinz",
    description:
      "Web-based platform that enables restaurant owners to manage orders, track inventory, and oversee operations seamlessly, providing an all-in-one solution to streamline restaurant management.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: resto,
    source_code_link: "https://github.com/Aqui05/Quinz",
  },

  {
    name: "MyMTN",
    description:
      "A user-friendly front-end interface for managing MTN accounts, enabling balance checks, airtime recharge, data purchases, and transaction tracking with a clean, responsive design.",
    tags: [
      /*{
        name: "Laravel",
        color: "blue-text-gradient",
      },
      {
        name: "Angular JS",
        color: "green-text-gradient",
      },*/
      {
        name: "Vue JS",
        color: "pink-text-gradient",
      },
    ],
    image: myMTN,
    source_code_link: "https://github.com/Aqui05/SGTE",
  },
];

export { services, technologies, experiences, testimonials, projects };