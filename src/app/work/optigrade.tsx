import { Heading, Text } from "@once-ui-system/core";
import Image from "next/image";

<div style={{ scrollSnapType: "y mandatory", overflowY: "scroll", height: "100vh" }}>
  <section style={{ scrollSnapAlign: "start", height: "100vh", padding: "48px" }}>
    <Heading variant="heading-default-l">🎓 The Challenge</Heading>
    <Text>Students face productivity loss, lack of structure, academic anxiety.</Text>
  </section>
  <section style={{ scrollSnapAlign: "start", height: "100vh", padding: "48px" }}>
    <Heading variant="heading-default-l">💡 The Solution</Heading>
    <Image src="/images/optigrade-dashboard.png" alt="Optigrade dashboard" width={1200} height={800} priority style={{ width: "100%", height: "auto" }} />
  </section>
  <section style={{ scrollSnapAlign: "start", height: "100vh", padding: "48px" }}>
    <Heading variant="heading-default-l">📈 The Outcome</Heading>
    <Text>Launched for over 2M+ students across Nigeria, with 40% productivity uplift.</Text>
  </section>
</div>
