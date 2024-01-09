import { Button, ListGroup } from "react-bootstrap";

const SingleComment = ({ comment }) => {
  const deleteComment = async (asin) => {
    try {
      let response = await fetch("https://striveschool-api.herokuapp.com/api/comments/" + asin, {
        method: "DELETE",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTcxZDRhNTBkOGEyMDAwMThhNDhhNWEiLCJpYXQiOjE3MDQ4MTIyODksImV4cCI6MTcwNjAyMTg4OX0.XrZ6Gv4cM94mb3a9LkViw8RAbmkk80ucQ20E1M0IQIw",
        },
      });
      if (response.ok) {
        alert("La recensione è stata eliminata!");
      } else {
        throw new Error("La recensione non è stata eliminata!");
      }
    } catch (error) {
      alert(error);
    }
  };

  return (
    <ListGroup.Item>
      {comment.comment}
      <Button variant="danger" className="ms-2" onClick={() => deleteComment(comment._id)}>
        Elimina
      </Button>
    </ListGroup.Item>
  );
};

export default SingleComment;
