/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
/* ------------------------- Internal Dependencies -------------------------- */
import { account, check, information } from 'assets/icons'
import {
  Box, Container, Flex,  Button,
  Heading, Paragraph, SVG, Link,
  BackgroundGradient
} from 'atomic'

import Resources from 'components/sections/FrontResources'
import EnsScan from 'features/EnsScan'
import MeetupEvent from 'features/MeetupEvent'
import DialogOpen from 'containers/dialog/DialogOpen'

const MenuMap = [
  {
    title: 'My Information',
    to: 'information',
    svg: information, // Find correct icons before enabling
  },
  {
    title: 'Verifications',
    to: 'verifications',
    svg: check, // Find correct icons before enabling
  },
  {
    title: 'Accounts',
    to: 'accounts',
    svg: account, // Find correct icons before enabling
  }
]

const MenuItem = props => <Flex align="center" mb={20} >
  {/* <SVG svg={props.svg} w={40} mr={20}/> */}
  <Heading f={[3]}>
    <Link to={props.to} > {props.title}</Link>
  </Heading>
</Flex>

/* ------------------------------- Component -------------------------------- */
export default props =>
<Box align='center' justify='center'>
  <Box px={25} py={25}>
    {
      MenuMap.map(item=> <MenuItem {...item}/> )
    }
  </Box>
</Box>