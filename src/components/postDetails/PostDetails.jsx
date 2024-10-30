import { useLoaderData } from "react-router-dom";


const PostDetails = () => {
    const postDetails = useLoaderData();
   
    const {id,body} = postDetails;
    return (
        <div>
            <h4>Post Details userId: {id}</h4>
            <p>Body: {body}</p>
        </div>
    );
};

export default PostDetails;