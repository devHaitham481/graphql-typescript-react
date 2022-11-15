import React, { useState } from 'react';
import './App.css';
import IssueList from './components/IssueList/IssueList';
import IssueView from './components/IssueView/IssueView';
import { Typography, Container, makeStyles } from '@material-ui/core';

import client from './apollo-client/client';
import { ApolloProvider } from '@apollo/react-hooks';
import SearchBar from './components/SearchBar/SearchBar';

const App = () => {
  const useStyles = makeStyles({
    title: {
      marginTop: '1rem',
      marginBottom: '1rem',
      textAlign: 'center',
    },
  });
  const classes = useStyles();
  const [searchTerm, setSearchTerm] = useState('');
  return (
    <ApolloProvider client={client}>
      <Container maxWidth={'sm'}>
        <Typography variant={'h3'} className={classes.title}>
          GraphQL Github Client
        </Typography>
        <SearchBar value={searchTerm} onChange={setSearchTerm} />
        <IssueList searchTerm={searchTerm} />
      </Container>
    </ApolloProvider>
  );
};

export default App;
