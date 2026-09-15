export interface BlogsType{
    id: number;
    title: string;
    description: string;
}

const blogs: BlogsType[] = [
  {
    id: 1,
    title: "Getting Started with React",
    description:
      "Learn the fundamentals of React, including components, props, state, and how to build your first interactive user interface.",
  },
  {
    id: 2,
    title: "Why TypeScript is Important for Modern Web Development",
    description:
      "Discover how TypeScript improves code quality, developer productivity, and maintainability in large-scale web applications.",
  },
  {
    id: 3,
    title: "Understanding Next.js",
    description:
      "Explore Next.js and learn how it extends React with routing, server-side rendering, API routes, and powerful full-stack capabilities.",
  },
  {
    id: 4,
    title: "Building Better APIs with Node.js",
    description:
      "Learn the basics of creating scalable and maintainable REST APIs using Node.js and modern JavaScript development practices.",
  },
  {
    id: 5,
    title: "The Importance of Clean Code",
    description:
      "Understand why writing clean, readable, and maintainable code matters when working on real-world software projects.",
  },
];

export default async function PostsDetails({params}:{params: Promise<{postId: string}>}){
    const {postId} = await params;
    const posts = blogs.find(data=> data.id === parseInt(postId));
    console.log(posts)

    return (
        <div>
            <h2>Post Details ID: {postId}</h2>

            {
                posts && <>
                    <div>
                        <h2>{posts.title}</h2>
                        <p>{posts.description}</p>
                    </div>
                </>
            }
        </div>
    )
}