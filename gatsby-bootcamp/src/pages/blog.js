import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { Layout } from "../components/Layout/Layout";

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
            }
          }
        }
      }
    }
  `);

  const postsList = (
    <ol>
      {data.allMarkdownRemark.edges.map(post => {
        return (
          <li>
            <h2>{post.node.frontmatter.title}</h2>
            <p>{post.node.frontmatter.date}</p>
          </li>
        );
      })}
    </ol>
  );

  return (
    <Layout>
      <h1>Blog</h1>
      {postsList}
    </Layout>
  );
};

export default BlogPage;
