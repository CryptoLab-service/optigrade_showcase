import { Flex } from "@once-ui-system/core";
import Image from "next/image";
export const SkillsGrid = () => (
  <Flex wrap horizontal="center" gap="24" paddingY="32">
    <img src="/logos/figma.png" alt="Figma" width="40" />
    <img src="/logos/notion.png" alt="Notion" width="40" />
    <img src="/logos/photoshop.png" alt="Photoshop" width="40" />
    <img src="/logos/xd.png" alt="Adobe XD" width="40" />
    <img src="/logos/jupyter.png" alt="Jupyter" width="40" />
    <img src="/logos/looker.png" alt="Looker Studio" width="40" />
  </Flex>
);
