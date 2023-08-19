import { Component } from "react";
import Display from "./Display"
import PanelDeBotones from "./PanelDeBotones"
import operations from "../code/operations";
import "./App.css"

class App extends Component{

  state={
    total :null,
    siguiente:null,
    operador:null
  }
  handlerClick = nombreDeBoton=> this.setState(operations(this.state, nombreDeBoton))
  render(){
  return (
    <div className="component-app">
      <h1>Calculadora</h1>
      <Display value={this.state.siguiente || this.state.total||"0"}/>
      <PanelDeBotones clickHandler={this.handlerClick}/>
    </div>
  )
}
}

export default App;
