import { useLoaderData, useNavigate, useParams } from "react-router-dom";


const PostDetails = () => {
    const {postId} = useParams();
    const postDetails = useLoaderData();
    const navigate = useNavigate();
    const handleGoBack = () =>{
        navigate(-1)
    }
    console.log(postId)
   
    const {id,body} = postDetails;
    return (
        <div>
            <h4>Post Details userId: {id}</h4>
            <p>Body: {body}</p>
            <button onClick={handleGoBack}>Go Back</button>
        </div>
    );
};

export default PostDetails;