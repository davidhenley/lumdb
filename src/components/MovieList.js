import React, { PureComponent } from 'react';
import axios from 'axios';
import styled from 'styled-components';

import Movie from './Movie';

class MovieList extends PureComponent {
  state = {
    movies: []
  }

  async componentDidMount() {
    try {
      const { data } = await axios.get('https://api.themoviedb.org/3/discover/movie?api_key=7f1a05c5ac8d8c4869d31263fa7a157e&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1');
      data.results.length > 0 && this.setState({ movies: data.results });
    } catch (e) {
      console.log('Error fetching movies', e);
    }
  }

  render() {
    const { movies } = this.state;

    return (
      <MovieGrid>
        {movies.map(movie => <Movie key={movie.id} movie={movie} />)}
      </MovieGrid>
    );
  }
}

export default MovieList;

const MovieGrid = styled.div`
  display: grid;
  padding: 1rem;
  grid-template-columns: repeat(6, 1fr);
  grid-row-gap: 1rem;
`;