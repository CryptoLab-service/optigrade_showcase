import { Logo } from "@once-ui-system/core";

const person = {
  firstName: "Tolulope",
  lastName: "John",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Designer | Analyst | Creative technologist",
  avatar: "/images/avatar.jpg",
  email: "oluwalowojohn@gmail.com",
  location: "Africa/Lagos", // ✅ Valid IANA timezone for Nigeria
  languages: ["English", "Yoruba", "Hausa"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}&apos;s Newsletter</>,
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
    icon: "twitter",
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
    href: "/work/optigrade-academic-intelligence",
  },
  subline: (
  <>
    I&apos;m Toluwalope John, a designer and founder of <strong style={{ fontSize: "1.1em", fontWeight: 700, color: "#ffffff"}} > Zoe Tech Hub </strong>, where I craft intuitive and purposeful user interfaces and experiences.<br/>
    Through ongoing exploration, I prototype new ideas and build my own projects and tools—like Optigrade, a tool built to simplify and streamline educational workflows for smarter academic performance.
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
    title: "Certifications",
    institutions: [
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

      {/* 🧰 Skills & Tools */}
      <RevealFx translateY="16" delay={0.5}>
        <Flex horizontal="center" wrap gap="24" paddingY="32">
          <Image src="/logos/figma.png" alt="Figma" width={40} height={40} style={{ objectFit: "contain" }} />
          <Image src="/logos/notion.png" alt="Notion" width={40} height={40} style={{ objectFit: "contain" }} />
          <Image src="/logos/photoshop.png" alt="Photoshop" width={40} height={40} style={{ objectFit: "contain" }} />
          <Image src="/logos/xd.png" alt="Adobe XD" width={40} height={40} style={{ objectFit: "contain" }} />
          <Image src="/logos/microsoft.png" alt="Microsoft" width={40} height={40} style={{ objectFit: "contain" }} />
          <Image src="/logos/cisco.png" alt="Cisco" width={40} height={40} style={{ objectFit: "contain" }} />
        </Flex>
      </RevealFx>

      {/* 📄 Embedded Google CV */}
      <RevealFx translateY="24" delay={1}>
        <Heading variant="display-strong-xs" paddingBottom="16">
          View My CV
        </Heading>
        <iframe
          src="https://drive.google.com/file/d/15hR0lR5yNWEsGFyNOXnYyXdHXkPqohND/view?usp=sharing"
          width="100%"
          height="640"
          style={{
            backdropFilter: "blur(16px)",
            width: "auto",
            maxWidth: "100%",
            minWidth: "fit-content",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "center",
            gap: "12px",
          }}
          allow="autoplay"
        ></iframe>
      </RevealFx>

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
