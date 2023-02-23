import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import SearchBooks from './pages/SearchBooks';
import SavedBooks from './pages/SavedBooks';
import Navbar from './components/Navbar';
import { Nav } from 'react-bootstrap';


const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Navbar />

        <Route exact path='/' component={SearchBooks} />
        <Route exact path='/saved' component={SavedBooks} />
        <Route render={() => <h1 className='display-2'>Wrong page!</h1>} />
      </Router>
    </ApolloProvider>
  );
}

export default App;
