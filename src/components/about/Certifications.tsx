import { Heading, Flex } from "@once-ui-system/core";
import Image from "next/image";

export const Certifications = () => (
  <>
    <Heading variant="display-strong-xs" paddingBottom="8">
      Certified By
    </Heading>
    <Flex wrap gap="xl" horizontal="center" paddingBottom="32">
      <Image src="/logos/alx.png" alt="ALX" width={80} height={80} />
      <image src="/logos/3mtt.png" width="80" alt="3MTT Nigeria" />
      <image src="/logos/accessbank.png" width="80" alt="Access Bank" />
      <image src="/logos/microsoft.png" width="80" alt="Microsoft Learn" />
      <image src="/logos/cisco.png" width="80" alt="Cisco Network Academy" />
    </Flex>
  </>
);
