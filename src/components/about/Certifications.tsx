import { Heading, Flex, Column, Text } from "@once-ui-system/core";
import Image from "next/image";
import styles from "./certifications.module.scss"; // optional custom styling
import { motion } from "framer-motion"; // Updated import for framer-motion

const certifications = [
  {
    src: "/logos/alx.png",
    alt: "ALX Africa",
    label: "ALX Africa",
    desc: "Frontend Engineering (The Room Fellowship)",
  },
  {
    src: "/logos/3mtt.png",
    alt: "3MTT Nigeria",
    label: "3MTT Nigeria",
    desc: "UI/UX Design Certification",
  },
  {
    src: "/logos/accessbank.png",
    alt: "Access Bank",
    label: "Access Bank Youthrive",
    desc: "Career Accelerator (UI/UX Track)",
  },
  {
    src: "/logos/microsoft.png",
    alt: "Microsoft Learn",
    label: "Microsoft Learn",
    desc: "Data, AI & Productivity Modules",
  },
  {
    src: "/logos/cisco.png",
    alt: "Cisco",
    label: "Cisco Networking Academy",
    desc: "Intro to Cybersecurity & Networking",
  },
];

export const Certifications = () => (
  <>
    <Heading variant="display-strong-xs" paddingBottom="8">
      🎓 Certified By
    </Heading>
    <Flex wrap gap="xl" horizontal="center" paddingBottom="32">
      {certifications.map((cert, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
          className={styles.card} // optional styling
        >
          <Column
            horizontal="center"
            vertical="center"
            padding="m"
            style={{
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: "16px",
              background: "rgba(255,255,255,0.05)",
              backdropFilter: "blur(8px)",
              maxWidth: "160px",
              textAlign: "center"
            }}
          >
            <Image
              src={cert.src}
              alt={cert.alt}
              width={64}
              height={64}
              style={{ borderRadius: "8px", marginBottom: "12px" }}
            />
            <Text variant="body-default-s" onBackground="neutral-strong">
              {cert.label}
            </Text>
            <Text variant="body-default-xs" onBackground="neutral-weak">
              {cert.desc}
            </Text>
          </Column>
        </motion.div>
      ))}
    </Flex>
  </>
);
