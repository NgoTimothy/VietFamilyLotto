import { useState } from 'react';
import { DiceValue } from '../types';

export interface EliminatorProps {
  animalMap: DiceValue[];
};

export interface EliminatorState {
  animalMap: DiceValue[];
};

var animalsToPlayersMap: DiceValue[];

export const setMap = (map: DiceValue[]) => {
  animalsToPlayersMap = map;
}

export function Eliminator(props: EliminatorProps) {
  if (animalsToPlayersMap === undefined) {
    setMap(props.animalMap);
  }
  const [elimPlayer, setPlayer] = useState<DiceValue>({ animal: 'Good', name: 'Luck' });
  const roll = () => {
    if (animalsToPlayersMap.length < 1) {
      return;
    }

    const randElement = animalsToPlayersMap[Math.floor(Math.random() * animalsToPlayersMap.length)];
    animalsToPlayersMap = animalsToPlayersMap.filter(e => e !== randElement);
    setPlayer(randElement);
    console.log(animalsToPlayersMap);
    
    setTimeout(() => roll(), 1000);
  };

  return (
    <>
      {
        animalsToPlayersMap.length === 0 ?
        <h1>{'Winner: ' + elimPlayer.animal + ' ' +  elimPlayer.name}</h1> :
        <h1>{elimPlayer.animal + ' ' + elimPlayer.name}</h1>
      }

      <button onClick={() => roll()}>Roll Dice</button>
    </>
  );
};
