import React, { useState } from 'react';

const SuggestedUsers = () => {
  // Sample array of suggested users
  const suggestedUsers = [
    { id: 1, username: 'user1' },
    { id: 2, username: 'user2' },
    { id: 3, username: 'user3' },
    // Add more users as needed
  ];

  const [followingUsers, setFollowingUsers] = useState([]);

  const handleFollowToggle = (userId) => {
    // Check if the user is already in the following list
    const isFollowing = followingUsers.includes(userId);

    if (isFollowing) {
      // If already following, unfollow
      setFollowingUsers(followingUsers.filter((id) => id !== userId));
    } else {
      // If not following, follow
      setFollowingUsers([...followingUsers, userId]);
    }
  };

  return (
    <div>
      <h2>Suggested Users</h2>
      <ul>
        {suggestedUsers.map((user) => (
          <li key={user.id}>
            {user.username}
            <button onClick={() => handleFollowToggle(user.id)}>
              {followingUsers.includes(user.id) ? 'Following' : 'Follow'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SuggestedUsers;
