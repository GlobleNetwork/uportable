/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
/* ------------------------- Internal Dependencies -------------------------- */
import { gitcoin } from 'assets/images'
import {
  Flex, Button,
  Heading, Paragraph, Section, Link,
  BackgroundImage
} from 'atomic'
/* ------------------------------- Component -------------------------------- */
export default props =>
<Section
  py={[30,60,120]}
>
  <Flex align='center' justify='center' direction='column' w={[1]} h={'20vh'}  >
    <Button bg="green" f={[2]} py={15} >Transaction History</Button>
  </Flex>
</Section>
