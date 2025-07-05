import { Flex } from '@once-ui-system/core';
import Image from 'next/image';

export const SkillsGrid = () => (
  <Flex wrap horizontal="center" gap="24" paddingY="32">
    <Image src="/logos/figma.png" alt="Figma" width={40} height={40} style={{ objectFit: 'contain' }} />
    <Image src="/logos/notion.png" alt="Notion" width={40} height={40} style={{ objectFit: 'contain' }} />
    <Image src="/logos/photoshop.png" alt="Photoshop" width={40} height={40} style={{ objectFit: 'contain' }} />
    <Image src="/logos/xd.png" alt="Adobe XD" width={40} height={40} style={{ objectFit: 'contain' }} />
    <Image src="/logos/microsoft.png" alt="Microsoft" width={40} height={40} style={{ objectFit: 'contain' }} />
    <Image src="/logos/cisco.png" alt="Cisco" width={40} height={40} style={{ objectFit: 'contain' }} />
  </Flex>
);
