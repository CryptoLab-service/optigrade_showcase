import { Logo } from "@once-ui-system/core";

const person = {
  firstName: "Tolulope",
  lastName: "John",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "UX/UI Designer | Product Desinger | Analyst",
  avatar: "/images/avatar.jpg",
  email: "oluwalowojohn@gmail.com",
  location: "Africa/Lagos", // ✅ Valid IANA timezone for Nigeria
  languages: ["English", "Yoruba", "Hausa"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the intersection of
      creativity, user experience and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/cryptoLab-service",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/oluwalowojohn/",
  },
  {
    name: "Twitter",
    icon: "Threads",
    link: "https://www.x.com/EncryptedMFI",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Building bridges between design, code and user experiences</>,
  featured: {
    display: true,
    title: <>Recent project: <strong className="ml-4">OptiGrade Mobile App</strong></>,
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
      I'm Toluwalope John O., a designer and founder of <Logo icon="/trademarks/wordmark-dark.svg" style={{ display: "inline-flex", top: "0.25em", marginLeft: "-0.25em" }}/>, where I craft intuitive and purposeful
      <br /> user interfaces and experiences. Through ongoing exploration, I prototype new ideas and build my own projects and tools—like Optigrade, a tool built to simplify and streamline educational workflows for smarter academic  performance.
    </>
  ),
};

const about = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://zcal.co/oluwalowojohn",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Toluwalope John is an Nigerian-based UI/UX and graphics designer, entry-level data-scientist, and budding software developer and AI. With a passion for creating purposeful visuals and seamless user experiences, he bridges design and technology to craft solutions that feel both intuitive and impactful. He’s currently channeling that energy into Optigrade—a platform he’s developing to rethink and enhance academic performace in Nigerian higher Institutions.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Zoe Tech Hub",
        timeframe: "2017 - Present",
        role: "Founder",
        achievements: [
          <>
            Redesigned UI/UX and graphcs for key platforms under Zoe Tech Hub—my design and innovation hub—resulting in a 35%+ boost in user engagement and approximately 40% faster load times.
          </>,
          <>
            Led multiple graphics design projects, digital literacy campaigns, and office productivity initiatives, enhancing client impact and improving overall user experience.
          </>,
          <>
            Conducted extensive user research and usability analysis to guide UI/UX and product design decisions.
          </>,
          <>
            Integrated AI-powered tools into the design workflow, enabling faster iteration cycles and more data-driven, user-centered solutions.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/cover-01.jpg",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "CM Project House",
        timeframe: "2024 - 2025",
        role: "Research Analysit and Designer",
        achievements: [
          <>
            Developed a design system that unified the brand across multiple platforms, improving
            design consistency by 25%.
          </>,
          <>
            Led design and graphics efforts in collaboration with cross-functional teams to launch a new academic product line, which contributed to a 15% increase in company revenue and improved student engagement.
          </>,
          <>
            Produced visually compelling digital and print publications at Zoe Tech Hub, combining effective layout design with strategic branding to support digital literacy campaigns and elevate the firm’s creative impact.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Ekiti State University, Ado-Ekiti",
        description: <>Studied Physics.</>,
      },
      {
        name: "The 3 Million Technical Talent",
        description: <>Studied User Interface and User Experience Design.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Figma",
        description: <>Designing next-gen user interfaces with Figma—leveraging its powerful prototyping, design systems, and collaboration features to craft intuitive, scalable digital experiences.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/cover-03.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Google Studio",
        description: <>Creating insightful visual narratives using Google Looker Studio—transforming raw data into interactive dashboards and compelling reports that support smarter decision-making and user-focused digital strategies.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Notion Studio",
        description: <>Designing and organizing knowledge systems with Notion—building structured workspaces, interactive docs, and dynamic content hubs that enhance collaboration and user experience across teams and personal projects.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Jupyter Notebook",
        description: <>Analyzing data and visualizing insights with Jupyter Notebook—leveraging Python-powered notebooks to explore datasets, build prototypes, and communicate findings through clear, interactive reports.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};

const blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
