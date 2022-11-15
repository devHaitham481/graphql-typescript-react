import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  ListItem,
  ListItemText,
  Button,
} from '@material-ui/core';

import { useQuery } from '@apollo/react-hooks';
import { QUERY_ISSUE_COMMENTS } from '../../graphql/queries';
import Comments from '../IssueView/IssueView';

const Issue = ({ title, bodyHTML, comments }: any) => {
  const [dialogOpened, setDialogOpened] = useState(false);
  const [showComments, setShowComments] = useState(false);
  const { data, loading, error } = useQuery(QUERY_ISSUE_COMMENTS);

  const handleClick = () => {
    setShowComments(true);
  };
  return (
    <>
      <ListItem button onClick={() => setDialogOpened(true)}>
        <ListItemText>{title}</ListItemText>
      </ListItem>
      <Dialog
        maxWidth={'xl'}
        open={dialogOpened}
        onClose={() => setDialogOpened(false)}
      >
        <DialogContent>
          <div dangerouslySetInnerHTML={{ __html: bodyHTML }} />
        </DialogContent>
        <Button variant="outlined" onClick={handleClick}>
          Show Comments
        </Button>
        {showComments && (
          <>
            <Comments comments={comments} />
            <Button variant="contained" onClick={() => setShowComments(false)}>
              Close Comments
            </Button>
          </>
        )}
        {'  '}
      </Dialog>
    </>
  );
};

export default Issue;
