import React, { useState } from 'react';
import _ from 'lodash';
import { Accordion, Image, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import { useApi } from '../../hooks/useApi';
import { BookList } from '../BookList/BookList';

import style from './Home.module.css';


export const Home = () => {
  const [state, setState] = useState(1);
  const [genreIdState, setGenreIdState] = useState(1);

  const genreUrl = 'http://localhost:3000/api/v1/genres/books/numbooks';
  const bookUrl = `http://localhost:3000/api/v1/genres/${genreIdState}/books`;

  const { data: genres } = useApi(genreUrl);
  const { data: books } = useApi(bookUrl);

  const handleSelectGenre = (id) => {
    const newIndex = state === id ? -1 : id;
    setGenreIdState(id);
    setState(newIndex);
  }

  return (
    <div>
      <div className={style.navbar} >
        <p className={style.navbarName} >Public Books</p>
        <div className={style.login}>
          <Button>LogIn</Button>
        </div>
      </div>
      <div className={style.container}>
        <p className={style.genreTitle}>Genres</p>
        {
          genres && !_.isEmpty(genres.data) &&
          genres.data.map(genre => (
            <Link to={`/`}>
              <Accordion fluid styled key={genre.id}>
                <Accordion.Title
                  active={state === genre.id}
                  index={genre.id}
                  onClick={() => handleSelectGenre(genre.id)}
                >
                  <Image avatar src={genre.photo} />
                  {genre.name} / Books: {genre.numBooks}
                </Accordion.Title>
                <Accordion.Content active={state === genre.id}>
                  {
                    books && !_.isEmpty(genres.data) && <BookList {...books} />
                  }
                </Accordion.Content>
              </Accordion>
            </Link>
          ))
        }
      </div>
    </div>
  )
};

