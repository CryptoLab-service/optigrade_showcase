import { Heading, Text, Flex } from "@once-ui-system/core";

export const Contact = () => (
  <Flex direction="column" horizontal="center" gap="12" paddingY="48">
    <Heading variant="heading-default-m">Let’s Connect 📬</Heading>
    <Text onBackground="neutral-weak">Reach me via WhatsApp, LinkedIn, or email:</Text>
    <Flex gap="16">
      <a href="https://wa.me/2347030739128">🟢 WhatsApp</a>
      <a href="mailto:zoetechh@zoetechhub.name.ng">📧 Email</a>
      <a href="https://linkedin.com/in/oluwalowojohn">🔗 LinkedIn</a>
      <a href="https://x.com/EncryptedMFI">🔗 Twitter</a>
    </Flex>
  </Flex>
);
