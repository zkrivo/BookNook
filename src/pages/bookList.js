import React from "react"
import Layout from "../components/layout";
import booksStyles from "./styles/bookList.module.scss"
import bookStyles from "../components/bookCard.module.scss"
import BookCard from "../components/bookCard"
import generalStyles from "./styles/general.module.scss"

import jane from "../images/jane-eyre-thumbnail.jpg"
import hobbit from "../images/the-hobbit-fantasy.jpg"
import mooncop from "../images/mooncop-gn.jpg"
import historical from "../images/historical.jpg"
import nonfic from "../images/nonfiction.jpg"

const BooksPage = () => {
    return (
        <Layout>
            <div className={booksStyles.genre}>
                <h2 className={bookStyles.specifier}>Genre's Name</h2>
                <div className={booksStyles.searchBar}>
                    <input type="text" placeholder="Search" className={booksStyles.inputField}></input> 
                </div>
            </div>

            <div className={booksStyles.flexBooks}>
                <BookCard>
                    <img src={jane} className={generalStyles.thumbnail}></img>
                    <h3 className={bookStyles.authorName}>Jane Eyre</h3>
                    <h4 className={bookStyles.bookTitle}>Charlotte Bronte</h4>
                </BookCard>

                <BookCard>
                    <img src={hobbit} className={generalStyles.thumbnail}></img>
                    <h3 className={bookStyles.authorName}>The Hobbit</h3>
                    <h4 className={bookStyles.bookTitle}>J.R.R. Tolkien</h4>
                </BookCard>

                <BookCard>
                    <img src={historical} className={generalStyles.thumbnail}></img>
                    <h3 className={bookStyles.authorName}>The Other Einstein</h3>
                    <h4 className={bookStyles.bookTitle}>Marie Benedict</h4>
                </BookCard>

                <BookCard>
                    <img src={mooncop} className={generalStyles.thumbnail}></img>
                    <h3 className={bookStyles.authorName}>Mooncop</h3>
                    <h4 className={bookStyles.bookTitle}>Tom Gauld</h4>
                </BookCard>

                <BookCard>
                    <img src={nonfic} className={generalStyles.thumbnail}></img>
                    <h3 className={bookStyles.authorName}>Book Title</h3>
                    <h4 className={bookStyles.bookTitle}>Author's Name</h4>
                </BookCard>

                <BookCard>
                    <img src={jane} className={generalStyles.thumbnail}></img>
                    <h3 className={bookStyles.authorName}>Book Title</h3>
                    <h4 className={bookStyles.bookTitle}>Author's Name</h4>
                </BookCard>

                <BookCard>
                    <img src={hobbit} className={generalStyles.thumbnail}></img>
                    <h3 className={bookStyles.authorName}>Book Title</h3>
                    <h4 className={bookStyles.bookTitle}>Author's Name</h4>
                </BookCard>

                <BookCard>
                    <img src={historical} className={generalStyles.thumbnail}></img>
                    <h3 className={bookStyles.authorName}>Book Title</h3>
                    <h4 className={bookStyles.bookTitle}>Author's Name</h4>
                </BookCard>

                <BookCard>
                    <img src={mooncop} className={generalStyles.thumbnail}></img>
                    <h3 className={bookStyles.authorName}>Book Title</h3>
                    <h4 className={bookStyles.bookTitle}>Author's Name</h4>
                </BookCard>

                <BookCard>
                    <img src={nonfic} className={generalStyles.thumbnail}></img>
                    <h3 className={bookStyles.authorName}>Book Title</h3>
                    <h4 className={bookStyles.bookTitle}>Author's Name</h4>
                </BookCard>

                <BookCard>
                    <img src={jane} className={generalStyles.thumbnail}></img>
                    <h3 className={bookStyles.authorName}>Book Title</h3>
                    <h4 className={bookStyles.bookTitle}>Author's Name</h4>
                </BookCard>

                <BookCard>
                    <img src={hobbit} className={generalStyles.thumbnail}></img>
                    <h3 className={bookStyles.authorName}>Book Title</h3>
                    <h4 className={bookStyles.bookTitle}>Author's Name</h4>
                </BookCard>

                <BookCard>
                    <img src={jane} className={generalStyles.thumbnail}></img>
                    <h3 className={bookStyles.authorName}>Jane Eyre</h3>
                    <h4 className={bookStyles.bookTitle}>Charlotte Bronte</h4>
                </BookCard>

                <BookCard>
                    <img src={hobbit} className={generalStyles.thumbnail}></img>
                    <h3 className={bookStyles.authorName}>The Hobbit</h3>
                    <h4 className={bookStyles.bookTitle}>J.R.R. Tolkien</h4>
                </BookCard>

                <BookCard>
                    <img src={historical} className={generalStyles.thumbnail}></img>
                    <h3 className={bookStyles.authorName}>The Other Einstein</h3>
                    <h4 className={bookStyles.bookTitle}>Marie Benedict</h4>
                </BookCard>

            </div>
        </Layout>
    )
}

export default BooksPage