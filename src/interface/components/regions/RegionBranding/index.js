/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
/* ------------------------- Internal Dependencies -------------------------- */
import { qrCode, dots } from 'assets/icons'
import Flex from 'atoms/Flex'
import Absolute from 'atoms/Absolute'
import Box from 'atoms/Box'
import Heading from 'atoms/Heading'
import Link from 'atoms/Link'
import SVG from 'atoms/SVG'

import DrawerOpen from 'containers/drawer/DrawerOpen'
import MenuPopoverDecentralizedSolutions from 'components/menus/MenuPopoverDecentralizedSolutions'
import MenuPopoverFeatures from 'components/menus/MenuPopoverFeatures'
import MenuPopoverInterface from 'components/menus/MenuPopoverInterface'
import MenuPopoverSmartContracts from 'components/menus/MenuPopoverSmartContracts'
import MenuPopoverTrustManager from 'components/menus/MenuPopoverTrustManager'
/* ------------------------------- Component -------------------------------- */
export default props =>
<Flex>
  <Absolute
    bottom
    top
    left
    height={1}
    w={[1,0.1]}
  >
  
  </Absolute>
  <Box w={[1]}>
    <Flex
    direction={['row']} align={"stretch"} justify="center"
    boxShadow={[0]} 
    color={['charcoal']}
    pos='relative'
    px={20}
    >
      <Flex align="center" justify="flex-start" w={[0.5]} py={[7]} direction={['row']} >
        <Link to="/">
          <SVG svg={qrCode} width={35}/>
        </Link>
      </Flex>

      <Flex align="center" justify='flex-end' py={[10]} color='white' w={[0.5]} textAlign="center">
        <DrawerOpen>
          {/* <Heading f={[2]} level={[4]} fw={300} ><a>menu</a></Heading> */}
          <SVG svg={dots} width={35}/>
        </DrawerOpen>
      </Flex>
    
  </Flex>
  </Box>


</Flex>