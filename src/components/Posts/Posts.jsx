import { useLoaderData } from "react-router-dom";
import Post from "../post/Post";

const Posts = () => {
    const posts = useLoaderData();
    console.log(posts)
   
    return (
        <div>
            <h2>My all posts: {posts.length}</h2>
            <div>
                {
                    posts.map(post => <Post key={post.id} post={post}></Post>)
                }
            </div>
        </div>
    );
};

export default Posts;