import React from "react"

import Layout from "../components/layout";

import infoStyles from "./styles/info.module.scss"
import bookStyles from "../components/bookCard.module.scss"
import generalStyles from "./styles/general.module.scss"
import jane from "../images/jane-eyre-thumbnail.jpg"
import charlotte from "../images/charlotte_bronte.jpg"
import hobbit from "../images/the-hobbit-fantasy.jpg"
import mooncop from "../images/mooncop-gn.jpg"

import BookCard from "../components/BookCard"
import Separator from "../components/separator";

const AuthorInfo = () => {
    return (
        <Layout>
            <div className={infoStyles.important}>
                <div className={infoStyles.content}>
                    <img src={charlotte} className={infoStyles.coverAuthor} alt="Picture of an author"></img>
                    <div className={infoStyles.other}>
                        <div className={infoStyles.titles}>
                            <h2 className={infoStyles.naslov}>Charlotte Bronte</h2>
                        </div>
                        <p className={infoStyles.summary}>
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, 
                        totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae 
                        dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, 
                        sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. <br/> Neque porro 
                        quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non 
                        numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut 
                        enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi 
                        ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate 
                        velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla 
                        pariatur?
                        </p>
                    </div>
                </div>
                <Separator>
                    AUTHOR'S BOOKS
                </Separator>
                <div className={infoStyles.opus}>
                    <BookCard>
                        <img src={jane} className={generalStyles.thumbnail} alt="Picture of a book cover"></img>
                        <h4 className={bookStyles.bookTitle}>Book Title</h4>
                    </BookCard>
                    <BookCard>
                        <img src={hobbit} className={generalStyles.thumbnail} alt="Picture of a book cover"></img>
                        <h4 className={bookStyles.bookTitle}>Book Title</h4>
                    </BookCard>
                    <BookCard>
                        <img src={mooncop} className={generalStyles.thumbnail} alt="Picture of a book cover"></img>
                        <h4 className={bookStyles.bookTitle}>Book Title</h4>
                    </BookCard>
                </div>
            </div>
        </Layout>
    )
}

export default AuthorInfo