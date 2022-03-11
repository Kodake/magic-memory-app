import { useState } from 'react';
import './App.css';
import SingleCard from './components/SingleCard';
import { Card } from './interfaces/appInterfaces';

const cardImages = [
  { 'src': '/img/helmet-1.png' },
  { 'src': '/img/potion-1.png' },
  { 'src': '/img/ring-1.png' },
  { 'src': '/img/scroll-1.png' },
  { 'src': '/img/shield-1.png' },
  { 'src': '/img/sword-1.png' },
];

const App = () => {

  const [cards, setCards] = useState<Card[]>([]);
  const [turns, setTurns] = useState(0);
  const [choiseOne, setChoiseOne] = useState<Card | null>(null);
  const [choiseTwo, setChoiseTwo] = useState<Card | null>(null);

  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, 'id': Math.random() }));

    setCards(shuffledCards);
    setTurns(0);
  }

  const handleChoise = (card: Card) => {
    choiseOne ? setChoiseTwo(card) : setChoiseOne(card);
  }

  return (
    <div className="App">
      <h1>Magic Match</h1>
      <button onClick={shuffleCards}>New Game</button>

      <div className="card-grid">
        {cards.map(card => (
          <SingleCard
            key={card.id}
            card={card}
            handleChoise={handleChoise}
          />
        ))}
      </div>
    </div>
  )
}

export default App;
