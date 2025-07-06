// --- Imports ---
import {
  Avatar,
  Button,
  Column,
  Flex,
  Heading,
  Icon,
  IconButton,
  Media,
  Tag,
  Text,
  Meta,
  Schema,
} from "@once-ui-system/core";

import { baseURL, about, person, social } from "@/resources";
import TableOfContents from "@/components/about/TableOfContents";
import styles from "@/components/about/about.module.scss";
import React from "react";

// --- Metadata Generator ---
export async function generateMetadata() {
  return Meta.generate({
    title: about.title,
    description: about.description,
    baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(about.title)}`,
    path: about.path,
  });
}

// --- Main Page Component ---
export default function About() {
  const structure = [
    {
      title: about.intro.title,
      display: about.intro.display,
      items: [],
    },
    {
      title: about.work.title,
      display: about.work.display,
      items: about.work.experiences.map((exp) => exp.company),
    },
    {
      title: about.studies.title,
      display: about.studies.display,
      items: about.studies.institutions.map((inst) => inst.name),
    },
    {
      title: about.technical.title,
      display: about.technical.display,
      items: about.technical.skills.map((skill) => skill.title),
    },
    {
      title: about.certification.title,
      display: about.certification.display,
      items: about.certification.awards.map((award) => award.name),
    },
  ];

  // ✅ All visual output now stays inside this return block
  return (
    <Column maxWidth="m">
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={about.title}
        description={about.description}
        path={about.path}
        image={`/api/og/generate?title=${encodeURIComponent(about.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />

      {/* --- Table of Contents --- */}
      {about.tableOfContent.display && (
        <Column
          left="0"
          style={{ top: "50%", transform: "translateY(-50%)" }}
          position="fixed"
          paddingLeft="24"
          gap="32"
          hide="s"
        >
          <TableOfContents structure={structure} about={about} />
        </Column>
      )}

      {/* --- Main Layout Container --- */}
      <Flex fillWidth mobileDirection="column" horizontal="center">
        {/* --- Avatar and Languages --- */}
        {about.avatar.display && (
          <Column
            className={styles.avatar}
            position="sticky"
            minWidth="160"
            paddingX="l"
            paddingBottom="xl"
            gap="m"
            flex={3}
            horizontal="center"
          >
            <Avatar src={person.avatar} size="xl" />
            <Flex gap="8" vertical="center">
              <Icon onBackground="accent-weak" name="globe" />
              {person.location}
            </Flex>
            {person.languages.length > 0 && (
              <Flex wrap gap="8">
                {person.languages.map((lang) => (
                  <Tag key={lang} size="l">
                    {lang}
                  </Tag>
                ))}
              </Flex>
            )}
          </Column>
        )}
      </Flex>
    </Column>
  );
}
        {/* --- Main Content --- */}
        <Column className={styles.blockAlign} flex={9} maxWidth={40}>
          {/* --- Header Section --- */}
          <Column
            id={about.intro.title}
            fillWidth
            minHeight="160"
            vertical="center"
            marginBottom="32"
          >
            {about.calendar.display && (
              <Flex
                fitWidth
                border="brand-alpha-medium"
                className={styles.blockAlign}
                style={{ backdropFilter: "blur(var(--static-space-1))" }}
                background="brand-alpha-weak"
                radius="full"
                padding="4"
                gap="8"
                marginBottom="m"
                vertical="center"
              >
                <Icon paddingLeft="12" name="calendar" onBackground="brand-weak" />
                <Flex paddingX="8">Schedule a call</Flex>
                <IconButton
                  href={about.calendar.link}
                  data-border="rounded"
                  variant="secondary"
                  icon="chevronRight"
                />
              </Flex>
            )}
            <Heading className={styles.textAlign} variant="display-strong-xl">
              {person.name}
            </Heading>
            <Text className={styles.textAlign} variant="display-default-xs" onBackground="neutral-weak">
              {person.role}
            </Text>

            {/* --- Social Links --- */}
            {social.length > 0 && (
              <Flex
                className={styles.blockAlign}
                paddingTop="20"
                paddingBottom="8"
                gap="8"
                wrap
                horizontal="center"
                fitWidth
                data-border="rounded"
              >
                {social.map((item) =>
                  item.link ? (
                    <React.Fragment key={item.name}>
                      <Button
                        className="s-flex-hide"
                        href={item.link}
                        prefixIcon={item.icon}
                        label={item.name}
                        size="s"
                        weight="default"
                        variant="secondary"
                      />
                      <IconButton
                        className="s-flex-show"
                        size="l"
                        href={item.link}
                        icon={item.icon}
                        variant="secondary"
                      />
                    </React.Fragment>
                  ) : null
                )}
              </Flex>
            )}
          </Column>

          {/* --- Intro Section --- */}
          {about.intro.display && (
            <Column textVariant="body-default-l" fillWidth gap="m" marginBottom="xl">
              {about.intro.description}
            </Column>
          )}

          {/* --- Work Section --- */}
          {about.work.display && (
            <>
              <Heading as="h2" id={about.work.title} variant="display-strong-s" marginBottom="m">
                {about.work.title}
              </Heading>
              <Column fillWidth gap="l" marginBottom="40">
                {about.work.experiences.map((experience, index) => (
                  <Column key={`${experience.company}-${experience.role}-${index}`} fillWidth>
                    <Flex fillWidth horizontal="space-between" vertical="end" marginBottom="4">
                      <Text id={experience.company} variant="heading-strong-l">
                        {experience.company}
                      </Text>
                      <Text variant="heading-default-xs" onBackground="neutral-weak">
                        {experience.timeframe}
                      </Text>
                    </Flex>
                    <Text variant="body-default-s" onBackground="brand-weak" marginBottom="m">
                      {experience.role}
                    </Text>

                    {/* ✅ FIXED: achievements mapped correctly */}
                    <Column as="ul" gap="16">
                      {experience.achievements.map((achievement: string, index: number) => (
                        <Text as="li" variant="body-default-m" key={`${experience.company}-${index}`}>
                          {achievement}
                        </Text>
                      ))}
                    </Column>

                    {/* --- Experience Images --- */}
                    {experience.images.length > 0 && (
                      <Flex fillWidth paddingTop="m" paddingLeft="40" gap="12" wrap>
                        {experience.images.map((image, idx) => (
                          <Flex
                            key={idx}
                            border="neutral-medium"
                            radius="m"
                            //@ts-ignore
                            minWidth={image.width}
                            //@ts-ignore
                            height={image.height}
                          >
                            <Media
                              enlarge
                              radius="m"
                              //@ts-ignore
                              sizes={image.width.toString()}
                              //@ts-ignore
                              alt={image.alt}
                              //@ts-ignore
                              src={image.src}
                            />
                          </Flex>
                        ))}
                      </Flex>
                    )}
                  </Column>
                ))}
              </Column>
            </>
          )}

          {/* --- Studies Section --- */}
          {about.studies.display && (
            <>
              <Heading as="h2" id={about.studies.title} variant="display-strong-s" marginBottom="m">
                {about.studies.title}
              </Heading>
              <Column fillWidth gap="l" marginBottom="40">
                {about.studies.institutions.map((institution, index) => (
                  <Column key={`${institution.name}-${index}`} fillWidth gap="4">
                    <Text id={institution.name} variant="heading-strong-l">
                      {institution.name}
                    </Text>
                    <Text variant="heading-default-xs" onBackground="neutral-weak">
                      {institution.description}
                    </Text>
                  </Column>
                ))}
              </Column>
            </>
          )}
          {/* --- Technical Skills Section --- */}
{about.technical.display && (
  <>
    <Heading
      as="h2"
      id={about.technical.title}
      variant="display-strong-s"
      marginBottom="40"
    >
      {about.technical.title}
    </Heading>
    <Column fillWidth gap="l">
      {about.technical.skills.map((skill, index) => (
        <Column key={`${skill.title}-${index}`} fillWidth gap="4">
          <Text id={skill.title} variant="heading-strong-l">
            {skill.title}
          </Text>
          <Text variant="body-default-m" onBackground="neutral-weak">
            {skill.description}
          </Text>

          {/* --- Skill Images --- */}
          {skill.images && skill.images.length > 0 && (
            <Flex fillWidth paddingTop="m" gap="12" wrap>
              {skill.images.map((image, idx) => (
                <Flex
                  key={idx}
                  border="neutral-medium"
                  radius="m"
                  //@ts-ignore
                  minWidth={image.width}
                  //@ts-ignore
                  height={image.height}
                >
                  <Media
                    enlarge
                    radius="m"
                    //@ts-ignore
                    sizes={image.width.toString()}
                    //@ts-ignore
                    alt={image.alt}
                    //@ts-ignore
                    src={image.src}
                  />
                </Flex>
              ))}
            </Flex>
          )}
        </Column>
      ))}
    </Column>
  </>
)}

{/* --- Certification Section --- */}
{about.certification.display && (
  <>
    <Heading
      as="h2"
      id={about.certification.title}
      variant="display-strong-s"
      marginBottom="40"
    >
      {about.certification.title}
    </Heading>
    <Column fillWidth gap="l" marginBottom="40">
      {about.certification.awards.map((award, index) => (
        <Column key={`${award.name}-${index}`} fillWidth gap="4">
          <Text id={award.name} variant="heading-strong-l">
            {award.name}
          </Text>
          <Text variant="body-default-m" onBackground="neutral-weak">
            {award.description}
          </Text>
        </Column>
      ))}
    </Column>
  </>
)}
