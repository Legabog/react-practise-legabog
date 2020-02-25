import React from 'react'
import {connect} from 'react-redux'
import { add2 } from './redux/Actions/Actions'

class Counter extends React.Component {
    render() {
        return(
            <div style={{padding:20, border: '1px solid #ccc'}}>
                <h1>Counter {this.props.counter}</h1>
                <hr/>
                <div>
                    <button onClick={() => this.props.onChange(1)}>Add</button>
                    <button onClick={() => this.props.onChange(-1)}>Sub</button>
                </div>
            </div>
            
        )
    }
}

function mapStateToProps(state) {
    return {
        counter: state.counter2.counter
    }
}

function mapDispatchToProps(dispath) {
    return {
      onChange: number => dispath(add2(number))
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(Counter)