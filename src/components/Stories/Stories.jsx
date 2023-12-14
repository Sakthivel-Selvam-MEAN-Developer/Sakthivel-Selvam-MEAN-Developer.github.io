const Stories = ({ users }) => {
    return (
        <div className="stories d-flex overflow-x-scroll mb-2 pb-3 pt-2">
            {users.map(story => (
                <div key={story.name} className='story'>
                    <div className="story-profile">
                        <a href="#">
                            <img src={story.imgUrl} alt={story.name} width={100} />
                        </a>
                    </div>
                    <a href="#" className='text-decoration-none'>
                        <p className='text-white text-center m-0 fw-normal'>{story.name.length > 10 ? story.name.slice(0, 8) + '...' : story.name}</p>
                    </a>
                </div>
            ))}
        </div>
    )
}

export { Stories }