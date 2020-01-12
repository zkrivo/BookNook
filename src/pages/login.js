import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout";
import generalStyles from "./styles/general.module.scss"
import loginStyles from "./styles/login.module.scss"

const LogInPage = () => {
    return (
        <Layout>
            <div className={loginStyles.loginForm}>
                <h2 className={loginStyles.logTitle}>LOG IN</h2>
                <form className={loginStyles.info}>
                    <label for="uname"><b>Username</b></label>
                    <input type="text" placeholder="Username" name="uname" required/>
                    <label for="psw"><b>Password</b></label>
                    <input type="password" placeholder="Password" name="psw" required/> 
                    <button type="submit" className={loginStyles.loginBtn}><Link className={generalStyles.linker}>LOG IN</Link></button>
                </form>
            </div>
        </Layout>
    )
}

export default LogInPage