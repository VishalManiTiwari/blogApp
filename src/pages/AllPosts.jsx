import React, { useState, useEffect } from 'react';
import { Container, PostCard } from '../components';
import appwriteService from '../appwrite/config';

function AllPosts() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await appwriteService.getPosts([]);
                if (response) {
                    setPosts(response.documents);
                }
            } catch (err) {
                setError('Failed to load posts.');
            } finally {
                setLoading(false);
            }
        };

        fetchPosts();
    }, []);

    if (loading) {
        return (
            <div className="w-full py-8 text-center">
                <Container>
                    <p className="text-lg font-semibold text-gray-600">Loading...</p>
                </Container>
            </div>
        );
    }

    if (error) {
        return (
            <div className="w-full py-8 text-center">
                <Container>
                    <p className="text-lg font-semibold text-red-500">{error}</p>
                </Container>
            </div>
        );
    }

    if (posts.length === 0) {
        return (
            <div className="w-full py-8 text-center bg-gray-50">
                <Container>
                    <div className="flex flex-col items-center justify-center">
                        <h1 className="text-2xl font-bold text-gray-800 mb-4">
                            No Posts Available
                        </h1>
                        <p className="text-gray-600">Check back later for new posts</p>
                    </div>
                </Container>
            </div>
        );
    }

    return (
        <div className="w-full py-8 bg-gray-50">
            <Container>
                <div className="grid grid-cols-1 
                sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {posts.map((post) => (
                        <div key={post.$id} 
                        className="p-2 bg-white shadow-md 
                        border-4 border-violet-400 
                        rounded-lg overflow-hidden">
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    );
}

export default AllPosts;