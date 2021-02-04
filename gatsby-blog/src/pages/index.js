/** @jsx jsx */

import * as React from "react"
import { Link } from "gatsby"
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import FeaturedPosts from '../components/FeaturedPosts'
import styled from "@emotion/styled"
import { jsx, Box } from 'theme-ui'


const HeroHead = styled.header`
  height: 100vh;
  padding-top: 2.5rem;  
`;


export default function Home()  {
  return (
    <Layout>
    	<Box
        sx={{
          maxWidth: '40rem',
          mx: 'auto', 
          p: 2          
        }}
      >
        <HeroHead>
      		<Hero />
      	</HeroHead>	
      </Box>    
      <Box
        sx={{
          bg:'primary'
        }}
      >
        <div
          sx={{
            maxWidth: '40rem',
            mx: 'auto', 
            p: 2
          }}
        >
          <FeaturedPosts />
        </div>  
      </Box>
    </Layout>
  )
}






