import React from "react";
import { graphql, useStaticQuery, Link } from "gatsby";
import { Layout } from "../components/Layout/Layout";

import * as blogStyles from "./blog.module.scss";

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
    <ol className={blogStyles.posts}>
      {data.allMarkdownRemark.edges.map(post => {
        return (
          <li className={blogStyles.post}>
            <Link to={`${post.node.fields.slug}`}>
              <h2>{post.node.frontmatter.title}</h2>
              <p>{post.node.frontmatter.date}</p>
            </Link>
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
