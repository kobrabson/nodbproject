import React, { Component } from 'react'
import axios from 'axios'

class Recipes extends Component{
    constructor(){
        super ()

        this.state = {
            recipe: []
        }
    }

componentDidMount(){
    axios.get('/api/recipes') 
    .then((res) => {
        console.log(res.data)
    })
}

    render(){
        return(
            <div>
                <h1>recipe</h1>
            </div>
        )
    }
}

export default Recipes