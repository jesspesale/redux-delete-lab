import React from "react"

class Band extends React.Component {
    
    onClick = () => {
        this.props.deleteBand(this.props.id)
    }

    render() {
        console.log(this.props)
        return (
        <div>
            <li>
                {this.props.name}
                <button onClick={this.onClick}>Delete</button>
            </li>
          
        </div>
        )
    }
}

export default Band