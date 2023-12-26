import { useState } from "react";

const SuggestedUserList = ({ users }) => {
    const [followingUsers, setFollowingUsers] = useState([])

    const handleFollowEvent = (userId) => {
        const isFollowing = followingUsers.includes(userId)

        if (isFollowing) {
            setFollowingUsers(followingUsers.filter((id) => id !== userId))
        } else {
            setFollowingUsers([...followingUsers, userId])
        }
    }

    return (
        <div className="suggested-user-list">
            {users.slice(0, 5).map(suggestion => (
                <div className='suggested-user d-flex justify-content-between align-items-center' key={suggestion.name}>
                    <div className="suggested-user-profile d-flex align-items-center">
                        <img src={suggestion.imgUrl} alt={suggestion.name} width={50} className='rounded-5' />
                        <div className="suggested-user-name ms-3">
                            <p className='m-0'>{suggestion.name}</p>
                            <p className='suggested-text m-0'>Suggested for you</p>
                        </div>
                    </div>
                    <div className="follow-link">
                        <a href="#" style={{ color: followingUsers.includes(suggestion.id) ? 'grey' : '#0d6efd' }} className='text-decoration-none' onClick={() => handleFollowEvent(suggestion.id)}>
                            {followingUsers.includes(suggestion.id) ? 'Following' : 'Follow'}
                        </a>
                    </div>
                </div>
            ))}
        </div>
    )
}

export { SuggestedUserList }