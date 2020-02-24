import React from "react"
import {Title, Panel, Buttom1, Buttom2, AlinharButtom} from "./styles"

export default class Contador extends React.Component {

    constructor() {
        super();

        this.state = {
            contador: 0,
        }
    }

    diminuir(){
        this.setState({
            contador: this.state.contador -1,
        })
    }

    aumentar(){
        this.setState({
            contador: this.state.contador + 1,
        })
    }

    render() {

        return (
            <div>
                <Panel>
                <Title>{this.state.contador}</Title>
                </Panel>
                <AlinharButtom>
                    <Buttom1 onClick={this.diminuir.bind(this)}>-</Buttom1>
                    <Buttom2 onClick={this.aumentar.bind(this)}>+</Buttom2>
                </AlinharButtom>
            </div>
        )
    }
}