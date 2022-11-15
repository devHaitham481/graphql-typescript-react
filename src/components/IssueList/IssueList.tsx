import { useQuery } from '@apollo/react-hooks';
import {
  CircularProgress,
  List,
  Typography,
  makeStyles,
} from '@material-ui/core';

import { useDebounce } from 'use-debounce';
import Issue from './Issue';
import { QUERY_ISSUE_LIST } from '../../graphql/queries';

const useStyles = makeStyles({
  root: {
    flexDirection: 'column',
  },
  spinnerContainer: {
    display: 'flex',
    justifyContent: 'space-around',
  },
});

const IssueList: React.FC<any> = ({ searchTerm }) => {
  const classes = useStyles();

//   const [debouncedSearchTerm] = useDebounce(searchTerm, 1000);

  const { data, loading, error } = useQuery(QUERY_ISSUE_LIST, {
    variables: { keywords: `repo:facebook/react portals` },
  });

  if (loading) {
    return (
      <div className={classes.spinnerContainer}>
        <CircularProgress />
      </div>
    );
  }
  if (!data.search.edges.length) {
    return <Typography>There are no issues!</Typography>;
  }
  return (
    <div className={classes.root}>
      <Typography variant={'h5'}>Latest issues: </Typography>
      {data && <List>
        {data?.search?.edges.map((issue: any) => (
          <Issue title={issue?.node?.title} bodyHTML={issue?.node?.bodyHTML} comments={issue?.node?.comments} />
        ))}
      </List> }

    </div>
  );
};

export default IssueList;
