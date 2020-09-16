import React from 'react';
import {
  Switch,
  Route,
} from 'react-router-dom';

import Page from './Page';

const Template = () => (
  <section className="container section">

    <Switch>
      <Route path="/blog">
        <Page heading="The one and only blog !" classes="blog-page" />
      </Route>
      <Route path="/about">
        <Page classes="inner-page" />
      </Route>
      <Route path="/">
        <Page heading="You are looking at one Hell of a blog !" classes="front-page" />
      </Route>
    </Switch>
  </section>
);

export default Template;
