import React from 'react';

const Layout = ({ children }) => (
  <div
    style={{
      width: '100vw',
      height: '100vh',
    }}
  >
    {children}
  </div>
);

export default Layout;
