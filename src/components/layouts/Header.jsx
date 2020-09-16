import React from 'react';

import Logo from '../../assets/images/logo.png';
import SiteLogo from '../common/SiteLogo';

import Navigation from '../common/Navigation';

const Header = () => (
  <header className="entry-header">
    <div className="container">
      <div className="columns two-column">
        <SiteLogo logo={Logo} />
      </div>
      <div className="columns two-column">
        <Navigation />
      </div>
    </div>
  </header>
);

export default Header;
