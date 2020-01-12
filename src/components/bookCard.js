import React from "react"
import { Link } from "gatsby"
import jane from "../images/jane-eyre-thumbnail.jpg"
import generalStyles from "../pages/styles/general.module.scss"
import bookStyles from "./bookCard.module.scss"

const BookCard = (props) => {
    return (
        <div className={bookStyles.bookCard}>
            <Link to="/bookInfo"className={generalStyles.linker}>
                {props.children}
            </Link>
        </div>
    )
}

export default BookCard