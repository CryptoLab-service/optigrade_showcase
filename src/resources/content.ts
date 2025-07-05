import React from 'react'; // Added import to it
import { SkillsGrid } from '@/components/about/SkillsGrid';

interface Person {
  firstName: string;
  lastName: string;
  name: string;
  role: string;
  avatar: string;
  email: string;
  location: string;
  languages: string[];
}

interface Social {
  name: string;
  icon: string;
  link: string;
}

interface Newsletter {
  display: boolean;
  title: JSX.Element;
  description: JSX.Element;
}

interface Home {
  path: string;
  image: string;
  label: string;
  title: string;
  description: string;
  headline: JSX.Element;
  featured: {
    display: boolean;
    title: JSX.Element;
    href: string;
  };
  subline: JSX.Element;
}

interface About {
  path: string;
  label: string;
  title: string;
  description: string;
  tableOfContent: {
    display: boolean;
    subItems: boolean;
  };
  avatar: {
    display: boolean;
  };
  calendar: {
    display: boolean;
    link: string;
  };
  intro: {
    display: boolean;
    title: string;
    description: JSX.Element;
  };
  work: {
    display: boolean;
    title: string;
    experiences: {
      company: string;
      timeframe: string;
      role: string;
      achievements: JSX.Element[];
      images: {
        src: string;
        alt: string;
        width: number;
        height: number;
      }[];
    }[];
  };
  studies: {
    display: boolean;
    title: string;
    institutions: {
      name: string;
      description: JSX.Element;
    }[];
  };
  technical: {
    display: boolean;
    title: string;
    skills: {
      title: string;
      description: JSX.Element;
      images: {
        src: string;
        alt: string;
        width: number;
        height: number;
      }[];
    }[];
  };
  certification: {
    display: boolean;
    title: string;
    awards: {
      name: string;
      description: JSX.Element;
    }[];
  };
}

interface Blog {
  path: string;
  label: string;
  title: string;
  description: string;
}

interface Work {
  path: string;
  label: string;
  title: string;
  description: string;
}

interface Gallery {
  path: string;
  label: string;
  title: string;
  description: string;
  images: {
    src: string;
    alt: string;
    orientation: string;
  }[];
}

export const person: Person = {
  firstName: "Tolulope",
  lastName: "John",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Designer | Analyst | Creative technologist",
  avatar: "/images/avatar.jpg",
  email: "oluwalowojohn@gmail.com",
  location: "Africa/Lagos",
  languages: ["English", "Yoruba", "Hausa"],
};

export const newsletter: Newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the intersection of
      creativity, user experience and engineering.
    </>
  ),
};

export const social: Social[] = [
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
    icon: "twitter",
    link: "https://www.x.com/EncryptedMFI",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

export const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Building bridges between design, code and user experiences</>,
  featured: {
    display: true,
    title: <>Recent project: <strong className="ml-4">OptiGrade Mobile App</strong></>,
    href: "/work/optigrade-academic-intelligence",
  },
  subline: (
    <>
      I'm Toluwalope John, a designer and founder of <strong style={{ fontSize: "1.1em", fontWeight: 700, color: "#ffffff" }} > Zoe Tech Hub </strong>, where I craft intuitive and purposeful user interfaces and experiences.<br />
      Through ongoing exploration, I prototype new ideas and build my own projects and tools—like Optigrade, a tool built to simplify and streamline educational workflows for smarter academic performance.
    </>
  ),
};

export const about: About = {
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
        Toluwalope John is a UI/UX and graphics designer, entry-level data scientist, and budding software developer and AI agent. With a passion for creating purposeful visuals and seamless user experiences, he bridges design and technology to craft solutions that feel intuitive and impactful. He’s currently channeling that energy into Optigrade—a platform he’s developing to rethink and enhance academic performance in Nigerian higher institutions.
      </>
    ),
  },
  work: {
    display: true,
    title: "Work Experience",
    experiences: [
      {
        company: "Zoe Tech Hub",
        timeframe: "2017 - Present",
        role: "Founder",
        achievements: [
          <>
            Redesigned UI/UX and graphics for key platforms under Zoe Tech Hub—my design and innovation hub—resulting in a 35%+ boost in user engagement and approximately 40% faster load times.
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
        role: "Research Analyst and Designer",
        achievements: [
          <>
            Developed a design system that unified the brand across multiple platforms, improving design consistency by 25%.
          </>,
          <>
            Collaborated with cross-functional teams to launch a new academic product line, contributing to a 15% increase in company revenue and improved student engagement.
          </>,
          <>
            Produced visually compelling digital and print publications for Zoe Tech Hub, combining effective layout design with strategic branding to elevate creative impact.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true,
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
    display: true,
    title: "Technical Skills",
    skills: [
      {
        title: "Figma",
        description: <>Crafting modern user interfaces with Figma—using its design systems and prototyping features to build scalable, collaborative experiences.</>,
        images: [
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "Figma UI Design",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/cover-03.jpg",
            alt: "Figma components",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Google Looker Studio",
        description: <>Transforming raw data into interactive dashboards with Looker Studio—supporting smarter decisions through clear visuals and insights.</>,
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Data Dashboard",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Notion",
        description: <>Organizing ideas and teams with Notion—creating structured knowledge bases and design systems that support agile collaboration.</>,
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Notion workspace",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Jupyter Notebook",
        description: <>Exploring data and building prototypes with Python-powered notebooks—visualizing insights to support design and development decisions.</>,
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Jupyter visualization",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
  certification: {
    display: true,
    title: "Certification",
    awards: [
      {
        name: "ALX Africa",
        description: <>Completed Frontend Engineering Training under The Room Fellowship.</>,
      },
      {
        name: "Access Bank Youthrive Internship",
        description: <>Certified in UI/UX Design with career acceleration support.</>,
      },
      {
        name: "3MTT Nigeria",
        description: <>Certified in User Interface and User Experience Design as part of the Federal Training Initiative.</>,
      },
      {
        name: "Cisco Networking Academy",
        description: <>Completed Introduction to Cybersecurity and Networking Basics.</>,
      },
      {
        name: "LinkedIn Learning",
        description: <>Completed courses on Design Thinking, Figma Essentials, and Creative Productivity.</>,
      },
    ],
  },
};

export const skills = <SkillsGrid />;

export const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
};

export const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
};

export const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
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
