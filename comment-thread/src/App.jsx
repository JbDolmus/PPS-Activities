import React, { useState } from 'react';
import CommentSection from './components/CommentSection';
import data from './data/data.json';

function App() {
  const [comments, setComments] = useState(data.comments);

  return (
    <div >
      <CommentSection comments={comments} setComments={setComments} currentUser={data.currentUser} />
    </div>
  );
}

export default App;
