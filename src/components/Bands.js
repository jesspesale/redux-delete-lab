import { render } from "enzyme"
import React from "react"
import Band from "../components/Band"

const Bands = (props) => {

    const bands = props.bands.map(band => {
         console.log(band.id)
        return <Band id={band.id} name={band.name} deleteBand={props.deleteBand} />
    })

    return (
        <div>
            {bands}
        </div>
    )

}

export default Bands