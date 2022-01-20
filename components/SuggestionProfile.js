function SuggestionProfile({username, title, img}) {
    return (
        <div className="flex items-center justify-between mt-3">
            <img className=" w-10 h-10 object-cover rounded-full border p-[2px]" src={img} alt="Profile Pic" />
            <div className=" flex-1 ml-4">
                    <h2 className=" font-semibold text-sm hover:underline">{username}</h2>
                    <h3 className=" text-xs text-gray-400">{title}</h3>
            </div>
            <button className=" text-xs font-semibold text-blue-400">Follow</button>
        </div>
    )
}

export default SuggestionProfile
