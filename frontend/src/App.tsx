import { useState } from "react";
import "./App.css";
import { useReducer } from "react";
import AppRouter from "./AppRouter";

function App() {
  // function reducer(state:any, action:any) {
  //   if(action.type==='add'){
  //     state.cart.push(action.payload)
  //   }
  // }
  // const [state, dispatch] = useReducer<any>(reducer, { cart: {} });
  return (
    <div className="bg-[#0d0e11] min-h-screen">
      <AppRouter />
    </div>
  );
}

export default App;
