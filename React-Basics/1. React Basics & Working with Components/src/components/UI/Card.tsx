import { FC } from "react"
import './Card.css';

interface CardInterface {
    className: string,
    children: React.ReactNode
}

export const Card: FC<CardInterface> = ({className, children}) => {
    const classes = 'card ' + className;

    return (
        <div className={classes}>
            {children}
        </div>
    )
}

export default Card