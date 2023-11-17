import React, { useState, useEffect } from 'react';

const LikeButton = ({ postId, initialLikes }) => {
  const [likes, setLikes] = useState(initialLikes);
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:3001/posts/${postId}/like`)
      .then(response => response.json())
      .then(data => {
        setIsLiked(data.isLiked);
        setLikes(data.likes);
      })
      .catch(error => {
        console.error('Error fetching like status:', error);
      });
  }, [postId]);

  const handleLike = () => {
    fetch(`http://localhost:3001/posts/${postId}/like`, {
      method: 'POST',
    })
      .then(response => response.json())
      .then(data => {
        setLikes(data.likes);
        setIsLiked(true);
      })
      .catch(error => {
        console.error('Error liking post:', error);
      });
  };

  return (
    <div>
      <button onClick={handleLike} disabled={isLiked}>
        {isLiked ? 'Liked' : 'Like'}
      </button>
      <span>{likes} Likes</span>
    </div>
  );
};

export default LikeButton;
