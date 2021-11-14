import React, { useEffect, useState } from 'react';
import { DiceValue } from '../types';

export interface DiceProps {
  size: number;
}

export interface DiceState {}


const animalMap: DiceValue[] =
  [
    {animal: "Unicorn", name: "Tommy"} as DiceValue,
    {animal: "Bear", name: "Nam"} as DiceValue,
    {animal: "Dog", name: "Nick"} as DiceValue,
    {animal: "Cat", name: "David"} as DiceValue,
    {animal: "Pig", name: "Cindy"} as DiceValue,
    {animal: "Whale", name: "Anthony"} as DiceValue,
    {animal: "Elephant", name: "Vince"} as DiceValue,
    {animal: "Tiger", name: "Victoria"} as DiceValue,
    {animal: "Emu", name: "Josephine"} as DiceValue,
    {animal: "Dragon", name: "Emma"} as DiceValue,
    {animal: "Deer", name: "Linda"} as DiceValue,
    {animal: "Shrimp", name: "Sharon"} as DiceValue,
    {animal: "Crab", name: "Vivian"} as DiceValue,
    {animal: "Chicken", name: "Christina"} as DiceValue,
    {animal: "Carp", name: "Timothy"} as DiceValue
  ];

export function Dice(props: DiceProps) {
  const [value, setValue] = useState<DiceValue[]>([]);
  const roll = () => {
    const newValues = Array(props.size).fill({name: "default", animal:"default"} as DiceValue).map(() => {
      return animalMap[Math.floor(Math.random() * animalMap.length)];
    });

    setValue(newValues);
  };

  useEffect(() => {
    if (!(value.every(e => e === value[0]))) {
      setTimeout(() => {
        roll();
      }, 1000);
    }
  });

  return (
    <>
      {
        value.map.length !== 0 ?
          <h1>{value.map(entry =>
            <div>{entry.animal + ' ' + entry.name}</div>
          )}
          </h1> :
          <></>
      }

      <button onClick={roll}>Roll Dice</button>
    </>
  );
}
