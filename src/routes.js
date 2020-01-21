import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/Main';
import Results from './pages/Results';
import Faq from './pages/Faq';
import Contact from './pages/Contact';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/results" component={Results} />
        <Route path="/faq" component={Faq} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </BrowserRouter>
  );
}
