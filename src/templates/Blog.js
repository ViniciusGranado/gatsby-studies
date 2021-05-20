import React from "react";
import { graphql } from "gatsby";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import { Layout } from "../components/Layout/Layout";
import Head from "../components/Head/Head";

export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishedDate(fromNow: true)
      body {
        raw
        references {
          __typename
          contentful_id
          title
          fluid(maxWidth: 1000) {
            src
            srcSet
          }
        }
      }
    }
  }
`;

const options = {
  renderNode: {
    "embedded-asset-block": (node) => {
      return (
        <img src={node.data.target.fluid.src} alt={node.data.target.title} />
      );
    },
  },
};

const Blog = (props) => {
  return (
    <Layout>
      <Head title={props.data.contentfulBlogPost.title} />

      <h1>{props.data.contentfulBlogPost.title}</h1>
      <p>{props.data.contentfulBlogPost.publishedDate}</p>

      {renderRichText(props.data.contentfulBlogPost.body, options)}
    </Layout>
  );
};

export default Blog;
