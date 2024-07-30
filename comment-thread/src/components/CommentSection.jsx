import React from 'react';
import Comment from './Comment';
import ReplyInput from './ReplyInput';

const CommentSection = ({ comments, setComments, currentUser }) => {
  const addComment = (text, parentId = 0, replyingTo = null) => {
    const newComment = {
      parent: parentId,
      id: Date.now(),
      content: text,
      createdAt: "Now",
      score: 0,
      replyingTo,
      user: currentUser,
      replies: []
    };

    if (parentId === 0) {
      setComments([...comments, newComment]);
    } else {
      const updatedComments = comments.map(comment => {
        if (comment.id === parentId) {
          return { ...comment, replies: [...comment.replies, newComment] };
        }
        return comment;
      });
      setComments(updatedComments);
    }
  };

  return (
    <div className="comment-section">
      {comments.map(comment => (
        <Comment key={comment.id} comment={comment} addComment={addComment} currentUser={currentUser} />
      ))}
      <ReplyInput addComment={addComment} />
    </div>
  );
};

export default CommentSection;
