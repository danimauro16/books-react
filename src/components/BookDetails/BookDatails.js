import React from 'react';
import { Card } from 'semantic-ui-react';
import { useParams } from 'react-router-dom'
import { useApi } from '../../hooks/useApi';

import style from './BookDatails.module.css';

export const BookDatails = () => {
  const { id } = useParams();
  const bookUrl = `http://localhost:3000/api/v1/books/${id}`;
  const { data: book } = useApi(bookUrl);
  console.log(book);
  return (
    <div>
      <hr />
      <p className={style.title}>Books Details</p>
      <div className={style.container}>
        {
          book &&
          <Card
            centered
            image={book.data.photo}
            header={book.data.title}
            meta={book.data.publication_year}
            description={book.data.author}
            extra={book.data.isbn}
          />
        }
      </div>
    </div>
  )
}
