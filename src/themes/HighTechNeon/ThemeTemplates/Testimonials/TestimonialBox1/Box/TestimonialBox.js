// TestimonialBox.js

import React from "react";
import PropTypes from "prop-types";
import Box from "../../../../themeComponents/Box/Box"; // Adjust the path as necessary
import "./testimonial-box.css"; // Assuming you have some CSS for styling

const TestimonialBox = ({ quote, name, position }) => {
  return (
    <Box className="testimonial-box square-box flex column justify-center item-align-center text-center">
      <p className="quote">"{quote}"</p>
      <p className="name">
        - {name}, <span className="position">{position}</span>
      </p>
    </Box>
  );
};

TestimonialBox.propTypes = {
  quote: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
};

export default TestimonialBox;
