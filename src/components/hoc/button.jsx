/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';

const withType = (BaseComponent) => (props) => (
  <BaseComponent {...props} data-type="submit" />
);

export default withType;
