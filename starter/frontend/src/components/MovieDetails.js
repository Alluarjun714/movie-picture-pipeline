import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

function MovieDetail({ movie }) {
  const [details, setDetails] = useState(null);

  useEffect(() => {
    if (movie && movie.id) {
      axios
        .get(`http://adc443dfb195746a69128bd7c2142491-1230811994.us-east-1.elb.amazonaws.com/movies/${movie.id}`)
        .then((response) => {
          setDetails(response.data);
        });
    }
  }, [movie]);

  return (
    <div>
      <h2>{details?.movie?.title}</h2>
      <p>{details?.movie?.description}</p>
    </div>
  );
}

MovieDetail.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
  }),
};

MovieDetail.defaultProps = {
  movie: null,
};

export default MovieDetail;
