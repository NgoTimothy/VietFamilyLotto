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
  const [showStartButton, setShowStartButton] = useState<Boolean>(true);
  const [showSingleEliminationButton, setShowSingleEliminationButton] = useState<Boolean>(false);
  
  const eliminate = () => {
    if (animalsToPlayersMap.length < 1) {
      return;
    }

    const randElement = animalsToPlayersMap[Math.floor(Math.random() * animalsToPlayersMap.length)];
    animalsToPlayersMap = animalsToPlayersMap.filter(e => e !== randElement);
    setPlayer(randElement);
  };

  const eliminatePlayers = (numberPlayers: number) => {
    for (var i = 0; i < numberPlayers; i++) {
      if (i === numberPlayers - 1) {
        setTimeout(() => {eliminate(); setShowSingleEliminationButton(true);}, 1000 * i);
      }
      else {
        setTimeout(() => eliminate(), 1000 * i);
      }
    }
  }

  return (
    <>
      {
        animalsToPlayersMap.length === 0 ?
          <h1>{'Winner: ' + elimPlayer.animal + ' ' + elimPlayer.name}</h1>
          :
          <h1>{elimPlayer.animal + ' ' + elimPlayer.name}</h1>
      }

      {showStartButton ?
        <button
          disabled={!showStartButton}
          onClick={() => { setShowStartButton(false); eliminatePlayers(10); }}>
          Start Lotto
        </button>
        :
        <></>}

      {(showSingleEliminationButton && animalsToPlayersMap.length > 0) ?
        <button
          onClick={() => { eliminate() }}>
          Eliminate One Person
        </button>
        :
        <></>
      }
    </>
  );
};
