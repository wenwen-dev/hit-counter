import React from 'react';

import { readFile, writeFile } from '../helpers/file-helpers';

const DATABASE_PATH = '/src/database.json';

function incrementNumOfVisitors() {
  const current = JSON.parse(readFile(DATABASE_PATH));
  const newNumber = current.hits + 1;
  console.log(newNumber);
  const result = JSON.stringify({ hits: newNumber });
  writeFile(DATABASE_PATH, result);
}

function getNumOfVisitors() {
  const ob = JSON.parse(readFile(DATABASE_PATH));
  return ob.hits;
}

function Home() {
  incrementNumOfVisitors();

  return (
    <main>
      <h1>Welcome!</h1>
      <p>You are visitor number {getNumOfVisitors()}.</p>
    </main>
  );
}

export default Home;
