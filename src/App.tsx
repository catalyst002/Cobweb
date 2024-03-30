import { ReactElement, useEffect } from 'react';
import {redirect } from 'react-router-dom';

import LoginPage from './pages/Login';

function App(): ReactElement {
  redirect("/login")
  return <div />;
}

export default App;
