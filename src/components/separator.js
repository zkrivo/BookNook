import React from "react"
import separateStyles from "./separator.module.scss"

const Separator = (props) => {
    return (
        <div className={separateStyles.separator}>
            <hr />
            <h3 className={separateStyles.sectionTitle}>{props.children}</h3>
            <hr />
        </div>
    )
}

export default Separator