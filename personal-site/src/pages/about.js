/** @jsx jsx */

import * as React from "react"
import { Link } from "gatsby"
import Layout from '../components/layout'

import { jsx } from 'theme-ui'

export default function About()  {
  return (
    <Layout>
      	<div sx={{bg:'primary'}}>
    		Contrary to popular belief, Lorem Ipsum is not simply random text. <strong>It has roots in a piece of classical</strong> Latin literature from 45 BC
    	</div>
    </Layout>
  )
}

