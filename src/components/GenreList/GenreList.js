import React from 'react';
import _ from 'lodash';
import { List, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

import sytle from './GenreList.module.css';

export const GenreList = (props) => {
  const { data } = props;
  return (
    <>
      <p className={sytle.genreTitle}>Genres</p>
      <hr />
      <List divided relaxed>
        {
          data && data.length > 0 &&
          data.map(genre => (
            <List.Item key={genre.id}>
              <Image avatar src={genre.photo} />
              <List.Content>
                <Link to={`/genre/${genre.id}`}><List.Header as='a'>{genre.name}</List.Header></Link>
                <List.Description as='a'>Books: {genre.numBooks}</List.Description>
              </List.Content>
            </List.Item>
          ))
        }
        {_.isEmpty(data) && (
          <List.Item>
            <List.Content>
              <List.Description as='a'>There are not genres</List.Description>
            </List.Content>
          </List.Item>
        )}
      </List>
    </>
  )
};
