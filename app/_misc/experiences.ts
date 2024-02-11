import logoMap from "./logoMap";

type Project = {
  title: string;
  logo: string;
  description: string[];
  stack: (keyof typeof logoMap)[];
  date: string;
  category: string;
  link?: string;
};

export const featuredProjects: Project[] = [
  {
    title: "Parsian Crypto",
    logo: "",
    description: [
      "Used REST API to get the required data from Headless CMS (WordPress)",
      "Live price and stat for cryptocurrencies using Web Socket",
      "Developed with Next.js 13 SSG, SSR and Server Components to deliver fast static and dynamic pages",
      "Improved first load time by 90 percent compared to old WordPress website",
      "Improved website performance by 30 percent compared to old WordPress website",
      "Implemented user authentication by email, mobile number and Google authentication",
      "Intuitive search functionality to easily find specific cryptocurrency or related news and articles",
      "Conducted regular testing and debugging to ensure smooth functionality of the website",
    ],
    stack: [
      "Next.js 13",
      "Typescript",
      "Tailwind",
      "React Hook Form",
      "Radix UI",
    ],
    date: "May 2023 - Nov 2023",
    category:
      "Cryptocurrency, NFT, and metaverse blog with live price and stat",
    link: "https://parsiancrypto.com",
  },
  {
    title: "1EX",
    logo: "",
    description: [
      "Developed a system with smart contracts and blockchain with liquidity pool to exchange different cryptocurrencies on multiple chains",
      "Used Ether.js for interacting with the Ethereum Blockchain and its ecosystem",
      "Ability to connect to different wallets on different devices",
      "Implemented and used CI/CD pipeline using AWS Amplify",
      "Developed landing page and documentation section using Next.js 13 and Docusaures",
      "Implemented responsive UI with different interaction for mobile and desktop",
      "Participated in code reviews and provided feedback to improve overall code quality",
    ],
    stack: [
      "Next.js 13",
      "React",
      "React Router",
      "Typescript",
      "Redux",
      "Docusaurus",
      "Tailwind",
      "Styled-components",
      "Radix UI",
    ],
    date: "Jan 2022 - April 2023",
    category: "Cryptocurrency decentralized exchange (DEX)",
    link: "https://1ex.net",
  },
  {
    title: "Acronaline",
    logo: "",
    description: [
      "User authentication with mobile number for pilots and users",
      "Developed profile section for pilots to create flights for different time ranges to be shown to the users as tickets",
      "Users can buy tickets for different locations, reserve courses or buy products from the store",
      "Developed complete store and its procedure with cart functionality",
      "Developed admin dashboard with access management functionality for different admins",
      "Implemented dynamic filtering options to narrow down search results based on location, category, price, date and more",
      "Developed notification system using web socket",
    ],
    stack: [
      "Next.js 12",
      "Tailwind",
      "TanStack Query",
      "React Hook Form",
      "Headless UI",
    ],
    date: "Apr 2021 - Dec 2021",
    category: "Paraglider ticket, courses, and product store",
    link: "https://acronaline.com",
  },
  {
    title: "Omid90",
    logo: "",
    description: [
      "User authentication with username and password for three tiers of agents and users",
      "Conditional sections and pages for different user roles",
      "Developed ticketing and notification system with admin ability to notify group of users based on their role",
      "Developed admin dashboard with data visualization and charts for detailed sales statistics",
      "Developed PWA app for usage in mobile phones",
      "Implemented a complex advanced mode for participation with scenarios defined by user",
      "Designed and implemented the section that users can simulate number of winners and their prize based on their prediction of match results",
      "Handles a large number of users simultaneously",
    ],
    stack: ["React", "React Router", "Styled-components"],
    date: "Aug 2020 - March 2021",
    category: "Football bet services",
    link: "https://omid90.com",
  },
  {
    title: "Pistat",
    logo: "",
    description: [
      "Developed a dashboard with integrated Mapbox to put tree as points or draw lines as rows of trees",
      "Impleneted the ability to output report as xlsx(Microsoft Excel) format",
      "Developed an ID system for trees so that their info be shown by QR code",
    ],
    stack: [
      "Javascript",
      "Turf.js",
      "Mapbox",
      "Sass",
      "Node.js",
      "Express",
      "MongoDB",
      "Mongoose",
    ],
    date: "June 2019 - Dec 2019",
    category: "Farm management system",
    link: "http://pistat.ir",
  },
];

export const otherProjects: Project[] = [
  {
    title: "EZ.link",
    logo: "",
    description: [
      "Developed a system that user can create a personalized and easily customizable page with the ability to drag and drop blocks of information",
      "Collaborated with back-end developer and UI/UX designer to implement the system with the best performance and pixel-perfect",
      "Utilized modern front-end technologies and frameworks to enhance the applications capabilities",
    ],
    stack: ["React", "React Router", "Javascript", "Formik"],
    date: "May 2020 – Jul 2020",
    category: "Bio link tool",
  },
  {
    title: "Bazdidan",
    logo: "",
    description: [""],
    stack: ["Node.js", "Express", "MongoDB", "Mongoose"],
    date: "Jan 2020 – April 2020",
    category: "Live Virtual Tour service designed for real estate agents",
    link: "https://bazdidan.com",
  },
];
