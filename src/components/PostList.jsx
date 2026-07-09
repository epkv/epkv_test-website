import PostCard from "./PostCard"

const PostList = ({ posts, loading }) => {
    if (loading) {
        return (
            <div className="w-full flex justify-center py-12 text-sm text-slate-400 mt-16">
                Loading posts...
            </div>
        )
    }

    if (!posts || posts.length === 0) {
        return (
            <div className="w-full flex justify-center py-12 text-sm text-slate-400 mt-16">
                No posts found.
            </div>
        )
    }

    return (
        <div className="w-full flex flex-col gap-3 p-4 max-w-2xl mx-auto mt-16">
            {posts.map((post, index) => (
                <PostCard key={post.id ?? index} post={post} />
            ))}
        </div>
    )
}

export default PostList;