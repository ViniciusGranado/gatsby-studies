import React from "react";
import { graphql, useStaticQuery, Link } from "gatsby";
import { Layout } from "../components/Layout/Layout";
import Head from "../components/Head/Head";

import * as blogStyles from "./blog.module.scss";

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            title
            slug
            publishedDate(fromNow: true)
          }
        }
      }
    }
  `);

  const postsList = (
    <ol className={blogStyles.posts}>
      {data.allContentfulBlogPost.edges.map((post) => {
        return (
          <li className={blogStyles.post}>
            <Link to={`${post.node.slug}`}>
              <h2>{post.node.title}</h2>
              <p>{post.node.publishedDate}</p>
            </Link>
          </li>
        );
      })}
    </ol>
  );

  return (
    <Layout>
      <Head title="Blog" />

      <h1>Blog</h1>
      {postsList}
    </Layout>
  );
};

export default BlogPage;
