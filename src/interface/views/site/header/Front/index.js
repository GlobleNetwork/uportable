/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
/* ------------------------- Internal Dependencies -------------------------- */
import { 
  Flex, Box,
  Button, Container, Heading, Image, Paragraph, Section,
} from 'atomic'
import DialogOpen from 'containers/dialog/DialogOpen'
import UportCredentialsRequest from 'assimilation/containers/uport/UPortCredentialsRequest'
/* ------------------------------- Component -------------------------------- */
export default props => 
<Section {...props} px={[20,40]} color='charcoal' pos='relative' >
  <Container w={[1200]} >
    <Flex direction={['column', 'row']} align='center' justify={['center']} py={[20,40]} >

      <Container w={[540]} >
        <Flex align='center' justify='center' w={1} >
          <UportCredentialsRequest text="Login with uPort" styledButton={{ gradient: "purple"}} />
        </Flex>
      </Container>

    </Flex>
  </Container>
</Section>
