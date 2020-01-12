import React, { Component } from "react"
import { Link } from "gatsby"
import Layout from "../components/layout";

import booksStyles from "./styles/bookList.module.scss"
import bookStyles from "../components/bookCard.module.scss"
import generalStyles from "./styles/general.module.scss"

import charlotte from "../images/charlotte_bronte.jpg"
import austen from "../images/jane_austen.jpg"
import rumi from "../images/melvana_rumi.jpg"
import oscar from "../images/oscar_wilde.jpg"
import hardy from "../images/thomas_hardy.jpg"
import woolf from "../images/virgina_woolf.jpg"


import AuthorCard from "../components/authorCard"

// class App extends Component {
//     state = {
//         search: ""
//     }
// }

// onChange = e => {
//     this.setState({search:e.target.value});
// }


const AuthorsPage = () => {
    return (
        <Layout>
            <div className={booksStyles.genre}>
                <h2 className={bookStyles.specifier}>All Authors</h2>
                <div className={booksStyles.searchBar}>
                    <input type="text" placeholder="Search" className={booksStyles.inputField}/>
                </div>
            </div>

            <div className={booksStyles.flexBooks}>
                <AuthorCard>
                    <img src={charlotte} className={generalStyles.thumbnail}></img>
                    <h3 className={bookStyles.authorName}>Charlotte Bronte</h3>
                </AuthorCard>

                <AuthorCard>
                    <img src={austen} className={generalStyles.thumbnail}></img>
                    <h3 className={bookStyles.authorName}>Jane Austen</h3>
                </AuthorCard>

                <AuthorCard>
                    <img src={rumi} className={generalStyles.thumbnail}></img>
                    <h3 className={bookStyles.authorName}>Melvana Rumi</h3>
                </AuthorCard>

                <AuthorCard>
                    <img src={oscar} className={generalStyles.thumbnail}></img>
                    <h3 className={bookStyles.authorName}>Oscar Wilde</h3>
                </AuthorCard>

                <AuthorCard>
                    <img src={hardy} className={generalStyles.thumbnail}></img>
                    <h3 className={bookStyles.authorName}>Thomas Hardy</h3>
                </AuthorCard>

                <AuthorCard>
                    <img src={woolf} className={generalStyles.thumbnail}></img>
                    <h3 className={bookStyles.authorName}>Virginia Woolf</h3>
                </AuthorCard>

                <AuthorCard>
                    <img src={charlotte} className={generalStyles.thumbnail}></img>
                    <h3 className={bookStyles.authorName}>Charlotte Bronte</h3>
                </AuthorCard>

                <AuthorCard>
                    <img src={austen} className={generalStyles.thumbnail}></img>
                    <h3 className={bookStyles.authorName}>Jane Austen</h3>
                </AuthorCard>

                <AuthorCard>
                    <img src={rumi} className={generalStyles.thumbnail}></img>
                    <h3 className={bookStyles.authorName}>Melvana Rumi</h3>
                </AuthorCard>

                <AuthorCard>
                    <img src={oscar} className={generalStyles.thumbnail}></img>
                    <h3 className={bookStyles.authorName}>Oscar Wilde</h3>
                </AuthorCard>

                <AuthorCard>
                    <img src={hardy} className={generalStyles.thumbnail}></img>
                    <h3 className={bookStyles.authorName}>Thomas Hardy</h3>
                </AuthorCard>

                <AuthorCard>
                    <img src={woolf} className={generalStyles.thumbnail}></img>
                    <h3 className={bookStyles.authorName}>Virginia Woolf</h3>
                </AuthorCard>
            </div>
        </Layout>
    )
}

export default AuthorsPage