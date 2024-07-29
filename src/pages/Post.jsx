// import React, { useEffect, useState } from "react";
// import { Link, useNavigate, useParams } from "react-router-dom";
// import appwriteService from "../appwrite/config";
// import { Button, Container } from "../components";
// import parse from "html-react-parser";
// import { useSelector } from "react-redux";

// export default function Post() {
//     const [post, setPost] = useState(null);
//     const { slug } = useParams();
//     const navigate = useNavigate();

//     const userData = useSelector((state) => state.auth.userData);

//     const isAuthor = post && userData ? post.userId === userData.$id : false;

//     useEffect(() => {
//         if (slug) {
//             appwriteService.getPost(slug).then((post) => {
//                 if (post) setPost(post);
//                 else navigate("/");
//             });
//         } else navigate("/");
//     }, [slug, navigate]);

//     const deletePost = () => {
//         appwriteService.deletePost(post.$id).then((status) => {
//             if (status) {
//                 appwriteService.deleteFile(post.featuredImage);
//                 navigate("/");
//             }
//         });
//     };

//     return post ? (
//         <div className="py-8 bg-gray-50 min-h-screen">
//             <Container>
//                 <div className="w-full flex justify-center mb-8 relative p-2">
//                     <img
//                         src={appwriteService.getFilePreview(post.featuredImage)}
//                         alt={post.title}
//                         className="rounded-lg shadow-lg max-h-96 object-cover w-full"
//                     />

//                     {isAuthor && (
//                         <div className="absolute top-4 right-4 flex space-x-2">
//                             <Link to={`/edit-post/${post.$id}`}>
//                                 <Button bgColor="bg-green-500">Edit</Button>
//                             </Link>
//                             <Button bgColor="bg-red-500" onClick={deletePost}>
//                                 Delete
//                             </Button>
//                         </div>
//                     )}
//                 </div>
//                 <div className="w-full mb-6 text-center">
//                     <h1 className="text-3xl font-bold text-gray-800 mb-4">{post.title}</h1>
//                     <p className="text-gray-600">Published by {post.authorName} on {new Date(post.createdAt).toLocaleDateString()}</p>
//                 </div>
//                 <div className="prose lg:prose-xl max-w-none">
//                     {parse(post.content)}
//                 </div>
//             </Container>
//         </div>
//     ) : null;
// }



import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import appwriteService from "../appwrite/config";
import { Button, Container } from "../components";
import parse from "html-react-parser";
import { useSelector } from "react-redux";

export default function Post() {
    const [post, setPost] = useState(null);
    const { slug } = useParams();
    const navigate = useNavigate();

    const userData = useSelector((state) => state.auth.userData);

    const isAuthor = post && userData ? post.userId === userData.$id : false;

    useEffect(() => {
        if (slug) {
            appwriteService.getPost(slug).then((post) => {
                if (post) setPost(post);
                else navigate("/");
            });
        } else navigate("/");
    }, [slug, navigate]);

    const deletePost = () => {
        appwriteService.deletePost(post.$id).then((status) => {
            if (status) {
                appwriteService.deleteFile(post.featuredImage);
                navigate("/");
            }
        });
    };

    return post ? (
        <div className="py-8 bg-gray-50 min-h-screen">
            <Container>
                <div className="w-full flex justify-center mb-8 relative p-2">
                    <img
                        src={appwriteService.getFilePreview(post.featuredImage)}
                        alt={post.title}
                        className="rounded-lg shadow-lg max-h-96 object-cover w-full sm:w-3/4 md:w-1/2"
                    />

                    {isAuthor && (
                        <div className="absolute top-4 right-4 flex space-x-2">
                            <Link to={`/edit-post/${post.$id}`}>
                                <Button bgColor="bg-green-500">Edit</Button>
                            </Link>
                            <Button bgColor="bg-red-500" onClick={deletePost}>
                                Delete
                            </Button>
                        </div>
                    )}
                </div>
                <div className="w-full mb-6 text-center px-4 md:px-0">
                    <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">{post.title}</h1>
                    <p className="text-gray-600">Published by {post.authorName} on {new Date(post.createdAt).toLocaleDateString()}</p>
                </div>
                <div className="prose lg:prose-xl max-w-none px-4 md:px-0">
                    {parse(post.content)}
                </div>
            </Container>
        </div>
    ) : null;
}
