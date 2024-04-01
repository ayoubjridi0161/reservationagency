import { IoIosStar } from "react-icons/io";

export const renderStars = (stars) => {
    const starsArray = []
    for (let i = 0; i < stars; i++) {
        starsArray.push(<IoIosStar key={i} />)
    }
    return starsArray
}