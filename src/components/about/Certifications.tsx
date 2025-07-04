import { Heading, Flex } from "@once-ui-system/core";

export const Certifications = () => (
  <>
    <Heading variant="display-strong-xs" paddingBottom="8">
      Certified By
    </Heading>
    <Flex wrap gap="28" horizontal="center" paddingBottom="32">
      <image src="/logos/alx.png" width="80" alt="ALX" />
      <image src="/logos/3mtt.png" width="80" alt="3MTT Nigeria" />
      <image src="/logos/accessbank.png" width="80" alt="Access Bank" />
      <image src="/logos/microsoft.png" width="80" alt="Microsoft Learn" />
      <image src="/logos/cisco.png" width="80" alt="Cisco Network Academy" />
    </Flex>
  </>
);
