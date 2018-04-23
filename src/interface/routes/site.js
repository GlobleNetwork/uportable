import React from 'react'
import {
  Flex, Box, 
  Heading, Image, Paragraph, Link, Span, 
  BackgroundImage, BackgroundGradient
} from 'atomic'
import FrontHeader from 'views/site/header/Front'
import FrontMain from 'views/site/main/Front'


const Information = props => <Box p={30}>
  <Heading f={[3]}>
    My Information
  </Heading>
</Box>
const Accounts = props => <Box p={30}>
  <Heading f={[3]}>
    Accounts
  </Heading>
</Box>
const Verifications = props => <Box p={30}>
  <Heading f={[3]}>
    Verifications
  </Heading>
</Box>

export default [
  {
    path: "/",
    header: FrontHeader,
    main: FrontMain,
    meta: {
      exact: true,
    }
  },
  {
    path: "/information",
    header: FrontHeader,
    main: Information,
    meta: {
      exact: true,
    },
  },
  {
    path: "/verifications",
    header: FrontHeader,
    main: Verifications,
    meta: {
      exact: true,
    },
  },
  {
    path: "/accounts",
    header: FrontHeader,
    main: Accounts,
    meta: {
      exact: true,
    },
  },

  
]