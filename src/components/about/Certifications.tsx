import { Heading, Flex } from "@once-ui-system/core";

export const Certifications = () => (
  <>
    <Heading variant="display-strong-xs" paddingBottom="8">
      Certified By
    </Heading>
    <Flex wrap gap="28" horizontal="center" paddingBottom="32">
      <img src="/logos/alx.png" width="80" alt="ALX" />
      <img src="/logos/3mtt.png" width="80" alt="3MTT Nigeria" />
      <img src="/logos/accessbank.png" width="80" alt="Access Bank" />
      <img src="/logos/microsoft.png" width="80" alt="Microsoft Learn" />
      <img src="/logos/cisco.png" width="80" alt="Cisco Network Academy" />
    </Flex>
  </>
);
