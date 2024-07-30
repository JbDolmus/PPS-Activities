export const useComment = () => {
  const insertComment = (tree, commentId, item) => {
    if (tree.id === commentId) {
      tree.replies.push({
        id: new Date().getTime(),
        content: item,
        createdAt: new Date().toLocaleString(),
        score: 0,
        user: tree.user,
        replies: [],
      });

      return tree;
    }

    let latestNode = [];
    latestNode = tree.replies.map((ob) => {
      return insertComment(ob, commentId, item);
    });

    return { ...tree, replies: latestNode };
  };


  return { insertComment };
};
