import React, { Component } from 'react'
import styled from 'styled-components'

export default class Errorrr extends Component {
    render() {
        return (
            <Compon>
                <button>Home page</button>
                <div className='n404'>
                    <h1>404 Not found</h1>
                    <p>this city not found</p>
                </div>
            </Compon>
        )
    }
}
const Compon = styled.div`
button{
    font-size: 30px;
}
.n404{
    margin-top: 150px;
margin-left: 300px;
}
color: red;
h1{
    font-size: 100px;
}
p{
    font-size: 70px;
}
`
