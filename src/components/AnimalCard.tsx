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
import {
  Card
} from '../../node_modules/react-bootstrap';
import { DiceValue } from '../types';;

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
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '30px',
    marginBottom: '30px'
  }
};

var animalArr: string[] = [
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

let imgSourceMap: Record<string, string> = {
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
  animalArr = animalArr.filter(e => e !== val);
  const element = document.getElementById(val) as HTMLInputElement;
  animalMap.forEach(e => {
    if (e.animal === val) {
      e.name = element.value;
    }
  });
  if (element) {
    element.value = '';
  }
  console.log(animalMap);
};

export function GetAnimalCard(animal: string, name: string, winner: boolean): JSX.Element {
  return (
    <Card
      bg={winner ? 'warning' : 'danger'}
      key={name}
      text={'light'}
      style={{ width: '33%', height: '350px', marginLeft: 'auto', marginRight: 'auto' }}
      className="mb-2"
    >
      <Card.Header style={cardStyles.cardHeader}>{animal.toUpperCase()}</Card.Header>
      <Card.Body>
        <Card.Img src={imgSourceMap[animal]} style={cardStyles.cardImage}>
        </Card.Img>
        <Card.Title
          className={'text-center'}>
          {name}
        </Card.Title>
      </Card.Body>
    </Card>
  );
}
