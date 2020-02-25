import React, {Component} from 'react'
import {connect} from 'react-redux'
import './App.scss'
import Counter from './Counter'
import { add, sub, addNumber, asyncAdd } from './redux/Actions/Actions'


class App extends Component {

  render() {
    // console.log(this.props)
    return (
      <div className={'App'}>
        <h1>Счетчик <strong>{this.props.counter}</strong></h1>

        <hr/>

        <div className="Actions">
          <button onClick={this.props.onAdd}>Добавить 1</button>
          <button onClick={this.props.onSub}>Вычесть 1</button>
        </div>
        <div className="Actions">
          <button onClick={() => this.props.onAddNumber(15)}>Добавить 15</button>
          <button onClick={() => this.props.onAddNumber(-17)}>Вычесть 17</button>
        </div>
        <div className="Actions">
          <button onClick={() => this.props.onAsyncAdd(100)}>Ассинхронно добавить 100</button>
        </div>

        <Counter></Counter>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    counter: state.counter1.counter
  }
}

function mapDispatchToProps(dispath) {
  return {
    onAdd: () => dispath(add()),
    onSub: () => dispath(sub()),
    onAddNumber: number => dispath(addNumber(number)),
    onAsyncAdd: number => dispath(asyncAdd(number))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
