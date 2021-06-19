import React from 'react';
import PropTypes from 'prop-types';

import { Example } from "../components/Example";

export function HomePage() {
  return (
    <div className="page">
      Home page
      <Example />
    </div>
  );
}

HomePage.propTypes = {};
