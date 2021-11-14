import React from 'react';
import { AnimalCard } from './AnimalCard';
// import { Counter } from './Counter';
import { Dice } from './Dice';
// import { Roller } from './Roller';

export const App = () => (
  <>
    {/* <Roller/>
    <Counter /> */}
    <Dice
      size={3}/>
      <AnimalCard/>
  </>
);
