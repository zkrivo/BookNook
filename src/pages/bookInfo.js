import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout";

import infoStyles from "./styles/info.module.scss"
import generalStyles from "./styles/general.module.scss"

import jane from "../images/jane-eyre-thumbnail.jpg"
import Separator from "../components/separator";

const BookInfo = () => {
    return (
        <Layout>
            <div className={infoStyles.important}>
                <div className={infoStyles.content}>
                    <img src={jane} className={infoStyles.cover} alt="Picture of a book cover"></img>
                    <div className={infoStyles.other}>
                        <div className={infoStyles.titles}>
                            <h2 className={infoStyles.naslov}>Jane Eyre</h2>
                            <h3 className={infoStyles.name}><Link to="/authorInfo" className={generalStyles.linker}>Charlotte Bronte</Link></h3>
                        </div>
                        <p className={infoStyles.summary}>
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                            totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
                            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
                            sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. <br /> Neque porro
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
                    REVIEWS
                </Separator>
                <div className={infoStyles.reviews}>
                    <div className={infoStyles.opinion}>
                        <p className={infoStyles.recenzija}><span><b>Reviewer's Name:</b></span> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>

                    <div className={infoStyles.opinion}>
                        <p className={infoStyles.recenzija}><span><b>Reviewer's Name:</b></span> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>

                    <div className={infoStyles.opinion}>
                        <p className={infoStyles.recenzija}><span><b>Reviewer's Name:</b></span> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>

                    <div className={infoStyles.opinion}>
                        <p className={infoStyles.recenzija}><span><b>Reviewer's Name:</b></span> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                </div>
                <button className={infoStyles.addReview}><Link to="/login" className={generalStyles.linker}>Add Review</Link></button>
            </div>
        </Layout>
    )
}

export default BookInfo