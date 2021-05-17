import React from "react";
import { graphql, useStaticQuery, Link } from "gatsby";
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
            fields {
              slug
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
            <h2><Link to={`${post.node.fields.slug}`}>{post.node.frontmatter.title}</Link></h2>
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
