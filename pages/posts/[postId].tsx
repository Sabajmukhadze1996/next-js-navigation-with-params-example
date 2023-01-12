import React from "react";
import { PostObjTypes } from "./index";

const Post = ({ post }: any) => {
  return (
    <div>
      <h2>
        {post.id} {post.title}
      </h2>
      <p>{post.body}</p>
    </div>
  );
};

export default Post;

export const getStaticProps = async (context: any) => {
  const { params } = context;

  try {
    const resp = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${params.postId}`
    );
    const data = await resp.json();
    return {
      props: {
        post: data,
      },
    };
  } catch (error: any) {
    console.log("Please try again,", error.message);
  }
};

export const getStaticPaths = async () => {
  try {
    const resp = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await resp.json();
    const paths = data.map((post: PostObjTypes) => {
      return {
        params: {
          postId: `${post.id}`,
        },
      };
    });
    return {
      //   paths: [
      //     {
      //         params: {postId: '1'}
      //     },
      //     {
      //         params: {postId: '2'}
      //     },
      //     {
      //         params: {postId: '3'}
      //     },
      //   ],
      paths,
      fallback: false,
    };
  } catch (error: any) {
    console.log("Please try again", error.message);
  }
};
