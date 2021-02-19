import React from 'react'
import _ from 'lodash';
import { List, Image } from 'semantic-ui-react'
import { Link, Route, Switch } from 'react-router-dom';


import style from './BookList.module.css';
import { BookDatails } from '../BookDetails/BookDatails';

export const BookList = (props) => {
  const { data: books } = props;
  return (
    <>
      <div className={style.container}>
        <List divided relaxed>
          {
            books && !_.isEmpty(books) &&
            books.map(book => (
              <List.Item key={book.id}>
                <Image avatar src={book.photo} />
                <List.Content>
                  <List.Description as='a'>Title: {book.title}</List.Description>
                  <List.Description as='a'>Author: {book.author}</List.Description>
                  <List.Description as='a'>Editorial: {book.editorial}</List.Description>
                  <List.Description as='a'>Publication Date: {book.publication_year}</List.Description>
                  <br />
                  <Link to={`/book/${book.id}`}><List.Header as='a'>More info</List.Header></Link>
                </List.Content>
              </List.Item>
            ))
          }
        </List>
      </div>
      <Switch>
        <Route exact path="/book/:id">
          <BookDatails />
        </Route>
      </Switch>
    </>
  )
}
