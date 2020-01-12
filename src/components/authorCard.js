import React from "react"
import { Link } from "gatsby"
import jane from "../images/jane-eyre-thumbnail.jpg"
import generalStyles from "../pages/styles/general.module.scss"
import bookStyles from "./bookCard.module.scss"

const AuthorCard = (props) => {
    return (
        <div className={bookStyles.bookCard}>
            <Link to="/authorInfo"className={generalStyles.linker}>
                {props.children}
            </Link>
        </div>
    )
}

export default AuthorCard