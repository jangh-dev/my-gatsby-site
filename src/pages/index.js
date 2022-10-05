import * as React from "react"
import Layout from "../components/layout"
import { StaticImage } from "gatsby-plugin-image"

const IndexPage = () => {
  return (
      <Layout pageTitle="Home Page">
        <p>개츠비로 만들어 보는 사이트!</p>
        <StaticImage
          src="http://image.dongascience.com/Photo/2020/03/5bddba7b6574b95d37b6079c199d7101.jpg"
          alt="test" 
          />
      </Layout>
  )
}

export const Head = () => <title>Home Page</title>
export default IndexPage