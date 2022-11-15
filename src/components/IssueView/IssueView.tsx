import { ListItemText } from '@material-ui/core';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

const Comments = ({ comments }: any) => {
  return (
    <List sx={{ width: '100%', maxWidth: 720 }}>
      {comments.nodes.map((comment: any) => {
        return (
          <ListItem button>
            <ListItemText>{comment.body}</ListItemText>
          </ListItem>
        );
      })}
    </List>
  );
};

export default Comments;
