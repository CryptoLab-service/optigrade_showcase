"use client";

import { Column, Flex, Text, Heading, Avatar } from "@once-ui-system/core";
import { person } from "@/resources";

export const AboutCard = () => (
  <Column gap="m" maxWidth="m" horizontal="center" paddingY="32">
    <Flex gap="16" vertical="center">
      <Avatar src={person.avatar} size="xl" />
      <Column>
        <Heading variant="display-strong-xs">{person.name}</Heading>
        <Text onBackground="neutral-weak" variant="body-default-l">
          UI/UX Designer · Data Analyst · Researcher · Founder of ZoeTechHub
        </Text>
      </Column>
    </Flex>
    <Text>
      I design thoughtful interfaces, automate workflows, and offer technical and digital services with productivity tools like. My mission is to turn digital challenges into intuitive design and provide solutions.
    </Text>
  </Column>
);
