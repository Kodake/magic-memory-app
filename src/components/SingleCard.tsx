import { Card } from "../interfaces/appInterfaces";

interface Props {
    card: Card;
    handleChoise: (card: Card) => void;
    flipped: boolean;
}

const SingleCard = ({ card, handleChoise, flipped }: Props) => {

    const handleClick = () => {
        handleChoise(card);
    }

    return (
        <div className='card'>
            <div>
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
