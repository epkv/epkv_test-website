const formatDate = (dateValue) => {
    if (!dateValue) return ""
    const parsed = new Date(dateValue)
    if (isNaN(parsed.getTime())) return String(dateValue)
    return parsed.toLocaleDateString(undefined, {
        year: "numeric",
        month: "short",
        day: "numeric",
    })
}

const PostCard = ({ post }) => {
    const { content, score, date } = post

    return (
        <div className="w-full border border-slate-200 rounded-md p-4 shadow-sm bg-white flex flex-col gap-2">
            <p className="text-sm text-slate-800 whitespace-pre-wrap">{content}</p>
            <div className="flex flex-row justify-between items-center text-xs text-slate-400">
                <span>{formatDate(date)}</span>
                <span className="px-2 py-0.5 bg-gray-200 rounded-full text-slate-600">
                    score: {score}
                </span>
            </div>
        </div>
    )
}

export default PostCard;