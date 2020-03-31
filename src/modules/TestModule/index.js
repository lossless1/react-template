import React from 'react';
import { Route } from 'react-router-dom';
import routes from './routes';
import MainComponent from './components/TestModule';

export default function TestModule() {
  return <Route path={routes.main} component={MainComponent} />;
}
