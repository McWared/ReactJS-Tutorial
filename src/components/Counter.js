import React from 'react'
import { useState } from 'react'

const Counter = () => {

  const [ count, setCount ] = useState(0)

  return (
    <div>
      <h1>You clicked {count} times</h1>
      <button onClick={(prev) => setCount(count + 1)}>
        <h2>Increment</h2>
        </button>
    </div>
  )
}

// class Counter extends Component {

//     constructor (props) {
//         super (props) 

//         this.state = {
//             count: 0
//         }
//     }

//     increment () {
//         this.setState ((prevState) => ({
//             count: this.state.count + 1
//         }))
//     }

//   render() {
//     return (
//       <div>
//         <div>Count - {this.state.count}</div>
//         <button onClick={() => this.increment()}>Increment</button>
//       </div>
//     )
//   }
// }

export default Counter