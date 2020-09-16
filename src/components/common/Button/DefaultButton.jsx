/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import withType from '../../hoc/button';

const Button = ({ ...otherProps }) => (
  <button {...otherProps} type="submit" className="button"> Default button </button>
);

export default withType(Button);
