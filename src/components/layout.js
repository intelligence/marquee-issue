/* eslint-disable react/no-danger */
import React from 'react';
import Navbar from './navbar';
import Main from './main';





export default ({ children, location, title }) => (
  <div>

    <Navbar/>

    <Main>
      {children}
    </Main>
  </div>
)