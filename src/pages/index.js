import * as React from "react"
import Layout from "../components/layout"

const IndexPage = () => {
  return (
      <Layout pageTitle="Home Page">
        <p>개츠비로 만들어 보는 사이트!</p>
      </Layout>
  )
}

export const Head = () => <title>Home Page</title>
export default IndexPage