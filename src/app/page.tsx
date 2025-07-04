import React from "react";
import {
  Heading, Flex, Text, Button, Avatar, RevealFx, Column,
  Badge, Row, Schema, Line
} from "@once-ui-system/core";
import { home, about, person, newsletter, baseURL, routes } from "@/resources";
import { Mailchimp } from "@/components";
import { Projects } from "@/components/work/Projects";
import { Posts } from "@/components/blog/Posts";
import { AboutCard } from "@/components/about/AboutCard";
import { SkillsGrid } from "@/components/about/SkillsGrid";
import { Certifications } from "@/components/about/Certifications";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <Column maxWidth="m" gap="xl" horizontal="center">
      {/* 🧠 SEO Schema */}
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={home.path}
        title={home.title}
        description={home.description}
        image={`/api/og/generate?title=${encodeURIComponent(home.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />

      {/* 🧑🏽‍💻 Hero Section */}
      <Column fillWidth paddingY="48" gap="m">
        <Column maxWidth="s">
          {home.featured.display && (
            <RevealFx fillWidth horizontal="start" paddingTop="16" paddingBottom="32" paddingLeft="12">
              <Badge
                background="brand-alpha-weak"
                paddingX="12"
                paddingY="4"
                onBackground="neutral-strong"
                textVariant="label-default-s"
                arrow={false}
                href={home.featured.href}
              >
                <Row paddingY="2">{home.featured.title}</Row>
              </Badge>
            </RevealFx>
          )}
          <RevealFx translateY="4" fillWidth horizontal="start" paddingBottom="16">
            <Heading wrap="balance" variant="display-strong-xl">
              {home.headline}
            </Heading>
          </RevealFx>
          <RevealFx translateY="8" delay={0.2} fillWidth horizontal="start" paddingBottom="32">
            <Text wrap="balance" onBackground="neutral-weak" variant="heading-default-l">
              {home.subline}
            </Text>
          </RevealFx>
          <RevealFx paddingTop="12" delay={0.4} horizontal="start" paddingLeft="12">
            <Button
              id="about"
              data-border="rounded"
              href={about.path}
              variant="secondary"
              size="m"
              weight="default"
              arrowIcon
            >
              <Flex gap="8" vertical="center" paddingRight="4">
                {about.avatar.display && (
                  <Avatar
                    marginRight="8"
                    style={{ marginLeft: "-0.75rem" }}
                    src={person.avatar}
                    size="m"
                  />
                )}
                {about.title}
              </Flex>
            </Button>
          </RevealFx>
        </Column>
      </Column>

      {/* 🧰 Skills & Tools */}
      <RevealFx translateY="16" delay={0.5}>
        <Flex horizontal="center" wrap gap="24" paddingY="32">
          <img src="/logos/figma.png" alt="Figma" width="40" />
          <img src="/logos/notion.png" alt="Notion" width="40" />
          <img src="/logos/photoshop.png" alt="Photoshop" width="40" />
          <img src="/logos/xd.png" alt="Adobe XD" width="40" />
          <img src="/logos/microsoft.png" alt="Microsoft" width="40" />
          <img src="/logos/cisco.png" alt="Cisco" width="40" />
        </Flex>
      </RevealFx>

      {/* 🖼️ Featured Projects */}
      <RevealFx translateY="16" delay={0.6}>
        <Projects range={[1, 1]} />
      </RevealFx>

      {/* 📚 Blog Preview */}
      {routes["/blog"] && (
        <Flex fillWidth gap="24" mobileDirection="column">
          <Flex flex={1} paddingLeft="l" paddingTop="24">
            <Heading as="h2" variant="display-strong-xs" wrap="balance">
              Latest from the blog
            </Heading>
          </Flex>
          <Flex flex={3} paddingX="20">
            <Posts range={[1, 2]} columns="2" />
          </Flex>
        </Flex>
      )}

      {/* 🧑🏽‍🎓 Case Study Scroll Zone */}
      <RevealFx translateY="24" delay={0.8}>
        <Projects range={[2]} />
      </RevealFx>

      {/* 📄 Embedded Google CV */}
      <RevealFx translateY="24" delay={1}>
        <Heading variant="display-strong-xs" paddingBottom="16">
          View My CV
        </Heading>
        <iframe
          src="https://drive.google.com/file/d/YOUR_FILE_ID/preview"
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

      {/* 📬 Newsletter or Contact */}
      {newsletter.display && <Mailchimp newsletter={newsletter} />}

      {/* 🪙 Footer */}
      <Flex horizontal="center" vertical="center" padding="32" textVariant="display-default-xs">
        &copy; {new Date().getFullYear()} Oluwalowo John Profolio
      </Flex>
    </Column>
  );
}
