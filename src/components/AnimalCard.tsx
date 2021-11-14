import React from 'react';
// const dragon = require('../resources/dragon.jpg');
import dragon from '../resources/dragon.jpg';

export function AnimalCard() {
  console.log(dragon);
  return (
    // <h1>hi</h1>
    <img alt={'hi'} src={dragon}></img>
  );
}
