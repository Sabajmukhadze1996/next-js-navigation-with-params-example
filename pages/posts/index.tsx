import Link from "next/link";
import React from "react";

export type PostObjTypes = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

const PostList = ({ posts }: any) => {
  return (
    <div>
      <h1>List of Posts</h1>
      {posts.map((post: PostObjTypes, index: any) => {
        return (
          <div key={index}>
            <Link href={`/posts/${post.id}`} passHref={true}>
              <h2>
                {post.id}) {post.title}
              </h2>
            </Link>
            <hr />
          </div>
        );
      })}
    </div>
  );
};

export default PostList;

export const getStaticProps = async () => {
  try {
    const resp = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await resp.json();
    return {
      props: {
        posts: data,
      },
    };
  } catch (error: any) {
    console.log("Please try again,", error.message);
  }
};
