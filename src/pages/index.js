import React from "react"
import { Link } from "gatsby" //link je react komponenta za otvaranje novih stranica, optimizirano

import Layout from "../components/layout"
import generalStyles from "./styles/general.module.scss"
//ono što je jedinstveno za neku stranicu ide unutar layout taga
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

import jane from "../images/jane-eyre-thumbnail.jpg"
import hobbit from "../images/the-hobbit-fantasy.jpg"
import mooncop from "../images/mooncop-gn.jpg"
import historical from "../images/historical.jpg"
import nonfic from "../images/nonfiction.jpg"

const IndexPage = () => {
    return (
        <Layout>
            <div className={generalStyles.imgContainer}>
                <img src="https://www.icas.com/__data/assets/image/0006/266154/varieties/wide-715px.jpg" className={generalStyles.titleImage} alt="Books on a shelf"/>
            </div>

            <div className={generalStyles.everything}>
                <div className={generalStyles.discover}>
                    <h1 className={generalStyles.welcomeMsg}>Find your next read</h1>
                </div>

                <div className={generalStyles.flexContainer}>
                    <div className={generalStyles.card}>
                        <Link to="/bookList" className={generalStyles.linker}>
                            <img src={jane} className={generalStyles.thumbnail} alt="Picture of a book cover"/>
                            <h3>Classics</h3>
                        </Link>
                    </div>

                    <div className={generalStyles.card}>
                        <Link to="/bookList" className={generalStyles.linker}>
                            <img src={hobbit} className={generalStyles.thumbnail} alt="Picture of a book cover"/>
                            <h3>Fantasy</h3>
                        </Link>
                    </div>

                    <div className={generalStyles.card}>
                        <Link to="/bookList" className={generalStyles.linker}>
                            <img src={mooncop} className={generalStyles.thumbnail} alt="Picture of a book cover"/>
                            <h3>Graphic novels</h3>
                        </Link>
                    </div>

                    <div className={generalStyles.card}>
                        <Link to="/bookList" className={generalStyles.linker}>
                            <img src={historical} className={generalStyles.thumbnail} alt="Picture of a book cover"/>
                            <h3>Historical fiction</h3>
                        </Link>
                    </div>

                    <div className={generalStyles.card}>
                        <Link to="/bookList" className={generalStyles.linker}>
                            <img src={nonfic} className={generalStyles.thumbnail} alt="Picture of a book cover"/>
                            <h3>Non-fiction</h3>
                        </Link>
                    </div>

                </div>

            </div>
        </Layout>
    )
}

export default IndexPage
