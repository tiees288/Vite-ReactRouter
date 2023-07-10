import { useReducer } from 'react'

type state = {
     count: number
}

type action = {
     type: string
}

export default function TestReducer() {

     const actions = (state: state, action: action) => {
          switch (action.type) {
               case 'increment':
                    return { count: state.count + 1 }
               case 'decrement':
                    return { count: state.count - 1 }
               default:
                    throw new Error()
          }
     }

     const [state, action] = useReducer(actions, { count: 0 })
     return (
          <>
               <div>{state.count}</div>
               <div>
                    <button onClick={() => action({ type: 'increment' })}>+</button>
                    <button onClick={() => action({ type: 'decrement' })}>-</button>
               </div>
          </>
     )
}
