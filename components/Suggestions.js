import SuggestionProfile from './SuggestionProfile'

const suggestions=
[
    {
        id: 1,
        username: 'iamsrk',
        title: 'Shah Rukh Khan',
        avatar: 'https://www.bollywoodhungama.com/wp-content/uploads/2021/09/WhatsApp-Image-2021-09-11-at-8.29.41-PM.jpeg',
    },
    {
        id: 2,
        username: 'deepikapadukone',
        title: 'Deepika Padukone',
        avatar: 'https://in.bmscdn.com/iedb/artist/images/website/poster/large/deepika-padukone-2822-12-09-2017-06-31-43.jpg',
    },
    {
        id: 3,
        username: 'taylorswift',
        title: 'Taylor Swift',
        avatar: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimagesvc.meredithcorp.io%2Fv3%2Fmm%2Fimage%3Furl%3Dhttps%253A%252F%252Fstatic.onecms.io%252Fwp-content%252Fuploads%252Fsites%252F20%252F2021%252F11%252F12%252Ftaylor-swift69.jpg&q=85',
    },
    {
        id: 4,
        username: 'tomcruise',
        title: 'Tom Cruise',
        avatar: 'https://www.pinkvilla.com/files/styles/amp_metadata_content_image/public/mission_-impossible-7-crew-calls-tom-cruise-a-nightmare.jpg',
    },
    {
        id: 5,
        username: 'aliaabhatt',
        title: 'Alia Bhatt',
        avatar: 'https://pbs.twimg.com/profile_images/1426856110036721664/KOCpzVH-_400x400.jpg',
    },

]

function Suggestions() {
    return (
        <div className="ml-10 mt-8">
            <div className="flex justify-between  text-sm">
                <div>
                    <p className=" text-gray-400 font-bold">Suggestitons for you</p>
                </div>
                <button className=" text-gray-600 font-semibold"> See All</button>
            </div>

            {suggestions.map((profile)=> (
                    <SuggestionProfile key={profile.id} username={profile.username} title={profile.title} img={profile.avatar} />
                ))}
            
        </div>
    )
}

export default Suggestions
