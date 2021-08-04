import React from 'react';

const styles = {
  container: {
    minHeight: 'calc(100vh - 50px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 500,
    fontSize: 48,
    textAlign: 'center',
  },
};

const HomeView = () => (
  <div style={styles.container}>
    <h1 style={styles.title}>
      Welcome to your private phonebook{' '}
      <span role="img" aria-label="phone icon">
        ☎
      </span>
    </h1>
  </div>
);

export default HomeView;
