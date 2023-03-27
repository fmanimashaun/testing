import React from 'react';
import PropTypes from 'prop-types';

const Screen = (props) => {

  return (
    <form>
      <input type="text" value={props.counter} readOnly/>
    </form>
  )
};

Screen.propTypes = {
  counter: PropTypes.number.isRequired,
};

export default Screen;
