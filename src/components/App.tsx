import React, { useState } from 'react';
// import { AnimalCard } from './AnimalCard';
// import { Counter } from './Counter';
// import { Roller } from './Roller';
import {
  Card,
  // Button,
  // CardGroup
} from '../../node_modules/react-bootstrap';
import Carp from '../resources/carp.jpg';
import Unicorn from '../resources/unicorn.jpg';
import Bear from '../resources/bear.jpg';
import Dog from '../resources/dog.jpg';
import Cat from '../resources/cat.jpg';
import Pig from '../resources/pig.jpg';
import Whale from '../resources/whale.jpg';
import Elephant from '../resources/elephant.jpg';
import Tiger from '../resources/tiger.jpg';
import Emu from '../resources/emu.jpg';
import Dragon from '../resources/dragon.jpg';
import Deer from '../resources/deer.jpg';
import Shrimp from '../resources/shrimp.jpg';
import Crab from '../resources/crab.png';
import Chicken from '../resources/chicken.jpg';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { InputGroup, Button, FormControl, Row } from '../../node_modules/react-bootstrap'
import { DiceValue } from '../types';
import { Eliminator } from './Eliminator';

var arr: string[] = [
  'unicorn',
  'bear',
  'dog',
  'cat',
  'pig',
  'whale',
  'elephant',
  'tiger',
  'emu',
  'dragon',
  'deer',
  'shrimp',
  'crab',
  'chicken',
  'carp'
];

var imgSourceMap: Record<string, string> = {
  'unicorn': Unicorn,
  'bear': Bear,
  'dog': Dog,
  'cat': Cat,
  'pig': Pig,
  'whale': Whale,
  'elephant': Elephant,
  'tiger': Tiger,
  'emu': Emu,
  'dragon': Dragon,
  'deer': Deer,
  'shrimp': Shrimp,
  'crab': Crab,
  'chicken': Chicken,
  'carp': Carp
};

const animalMap: DiceValue[] =
  [
    {animal: "unicorn", name: ""} as DiceValue,
    {animal: "bear", name: ""} as DiceValue,
    {animal: "dog", name: ""} as DiceValue,
    {animal: "cat", name: ""} as DiceValue,
    {animal: "pig", name: ""} as DiceValue,
    {animal: "whale", name: ""} as DiceValue,
    {animal: "elephant", name: ""} as DiceValue,
    {animal: "tiger", name: ""} as DiceValue,
    {animal: "emu", name: ""} as DiceValue,
    {animal: "dragon", name: ""} as DiceValue,
    {animal: "deer", name: ""} as DiceValue,
    {animal: "shrimp", name: ""} as DiceValue,
    {animal: "crab", name: ""} as DiceValue,
    {animal: "chicken", name: ""} as DiceValue,
    {animal: "carp", name: ""} as DiceValue
  ];

export const ButtonClicked = (val: string) => {
  arr = arr.filter(e => e !== val);
  const element = document.getElementById(val) as HTMLInputElement;
  animalMap.forEach(e => {
    if (e.animal === val) {
      e.name = element.value;
    }
  });
  if (element) {
    element.value = '';
  }
};

export interface CounterState {
  value: number;
  map: Record<string, string>;
};

const cardStyles = {
  cardHeader: {
    width: 'auto',
    'text-align': 'center',
    fontSize: 'large'
  },
  cardImage: {
    borderRadius: '50%',
    width: '12vw',
    height: '15vh',
    display: 'block',
    'margin-left': 'auto',
    'margin-right': 'auto'
  }
};

export const App = () => {
  const [value, setValue] = useState(0);
  const handleDecrement = () => setValue(value - 1);

  return (
    <>
      {/* <Roller/>
    <Counter /> */}
      {/* {(arr.length === 0) ? <Dice size={3}/> : <></>} */}
      {(arr.length === 0) ? <Eliminator animalMap={animalMap}/> : <></>}
      {/* <AnimalCard /> */}
      {
        <Row md={4} className='g-0 gx-0 gy-0'>
          {arr.map((variant, idx) => (
            <Card
              bg={'dark'}
              key={idx}
              text={'light'}
              style={{ width: '33%', marginLeft: 'auto', marginRight: 'auto' }}
              className="mb-2"
            >
              <Card.Header style={cardStyles.cardHeader}>{variant.toUpperCase()}</Card.Header>
              <Card.Body>
                {/* <Card.Title>{variant} Card Title </Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk
                  of the card's content.
                </Card.Text> */}
                <Card.Img src={imgSourceMap[variant]} style={cardStyles.cardImage}>
                </Card.Img>
              </Card.Body>
              <InputGroup className="mb-3">
                <InputGroup.Text id="inputGroup-sizing-default">Name</InputGroup.Text>
                <FormControl
                  aria-label="Name"
                  aria-describedby="Name"
                  id={variant}
                />
                <Button
                  onClick={(e) => { ButtonClicked(variant); handleDecrement(); }}>
                  Submit
                </Button>
              </InputGroup>
            </Card>
          ))}
        </Row>
      }
    </>
  );
};
