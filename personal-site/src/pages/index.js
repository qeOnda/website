/** @jsx jsx */

import * as React from "react"
import { Link } from "gatsby"
import Layout from '../components/layout'
import Hero from '../components/hero'
import styled from "@emotion/styled"
import { jsx, Box } from 'theme-ui'


const Head = styled.header`
  height: 100vh;
  padding-top: 2.5rem;  
`;


export default function Home()  {
  return (
    <Layout>
    	<Head>
    		<Hero />
    	</Head>	
    	<Hero />    	    	
    </Layout>
  )
}






