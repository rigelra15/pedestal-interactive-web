const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3001;

// Sample data to store likes
let likesData = {
  postId1: { likes: 0, isLiked: false },
  postId2: { likes: 0, isLiked: false },
};

app.use(bodyParser.json());

// Endpoint to get like status
app.get('/posts/:postId/like', (req, res) => {
  const { postId } = req.params;
  const likeData = likesData[postId] || { likes: 0, isLiked: false };
  res.json(likeData);
});

// Endpoint to like a post
app.post('/posts/:postId/like', (req, res) => {
  const { postId } = req.params;
  if (!likesData[postId]) {
    likesData[postId] = { likes: 0, isLiked: false };
  }

  likesData[postId].likes += 1;
  likesData[postId].isLiked = true;

  res.json({ likes: likesData[postId].likes, isLiked: true });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
