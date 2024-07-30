import React, { useState } from 'react';
import data from './data/data.json';
import Target from './components/Target';

function App() {
  const [comments, setComments] = useState(data.comments);

  return (
    <div>
      <Target comments={comments} setComments={setComments} currentUser={data.currentUser} />
    </div>
  );
}

export default App;
