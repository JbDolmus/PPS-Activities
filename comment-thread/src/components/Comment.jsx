import React, { useState } from 'react';
import ReplyInput from './ReplyInput';
import user from '../img/usuario.svg';
import replyIcon from '../img/icon-reply.svg';
import minusIcon from '../img/icon-minus.svg';
import plusIcon from '../img/icon-plus.svg';

const Comment = ({ comment, addComment, currentUser }) => {
  const [showReply, setShowReply] = useState(false);
  const [score, setScore] = useState(comment.score);

  const handleReply = (text) => {
    addComment(text, comment.id);
    setShowReply(false);
  };

  const decreaseScore = () => {
    if (score > 0) {
      setScore(score - 1);
    }
  }

  const increaseScore = () => {
    if (score < 5) {
      setScore(score + 1);
    }
  }

  return (
    <div className="comment-wrp">
      <div className="comment container">
        <div className="c-score">
          <button onClick={ decreaseScore }><img src={minusIcon} alt="plus" className="score-control score-plus" /></button>
          <p className="score-number">{score}</p>
          <button onClick={ increaseScore }><img src={plusIcon} alt="minus" className="score-control score-minus" /></button>
        </div>
        <div className="c-controls">

          <button className="reply" onClick={() => setShowReply(!showReply)}><img src={replyIcon} alt="" className="control-icon" />Responder</button>
        </div>
        <div className="c-user">
          <img src={user} alt="" className="usr-img" />
          <p className="usr-name">{comment.user.username}</p>
          <p className="cmnt-at">{comment.createdAt}</p>
        </div>
        <p className="c-text">
          {comment.replyingTo && <span className="reply-to">@{comment.replyingTo} </span>}
          <span className="c-body">{comment.content}</span>
        </p>
      </div>
      {showReply && <ReplyInput addComment={handleReply} />}
      <div className="replies comments-wrp">
        {comment.replies && comment.replies.map(reply => (
          <Comment key={reply.id} comment={reply} addComment={addComment} currentUser={currentUser} />
        ))}
      </div>
    </div>
  );
};

export default Comment;
