import { useSelector } from 'react-redux'

const Stories = () => {

    const users = useSelector(state => state.stories)

    return (
        <div className="stories d-flex overflow-scroll mb-2 pb-3 pt-2">
            {users.length && users.map(story => (
                <div key={story.id} className='story'>
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