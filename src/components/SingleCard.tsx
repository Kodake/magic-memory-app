import { Card } from "../interfaces/appInterfaces";
import './SingleCard.css';

interface Props {
    card: Card;
    handleChoise: (card: Card) => void;
    flipped: boolean;
    disabled: boolean;
}

const SingleCard = ({ card, handleChoise, flipped, disabled }: Props) => {

    const handleClick = () => {
        if (!disabled) { handleChoise(card); }
    }

    return (
        <div className='card'>
            <div className={flipped ? 'flipped' : ''}>
                <img className='front' src={card.src} alt='card front' />
                <img
                    className='back'
                    src='/img/cover.png'
                    onClick={handleClick}
                    alt='card back' />
            </div>
        </div>
    )
}

export default SingleCard;
