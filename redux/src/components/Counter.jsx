import { React,useState } from "react";
import { increment, decrement,reset ,incrementByAmount } from "./slices/counterSlice";
import { useSelector, useDispatch } from "react-redux";

const Counter = () => {
  const count = useSelector((store) => store.counter.count);
  const dispatch = useDispatch();
  const [amount , setAmount] = useState(0);
  return (
    <section className="text-center">
      <p className="text-lg">{count}</p>
      <div>
      <button onClick={() => dispatch(increment())} className="w-4 h-7 bg-blue-600 mr-2 ml-2 text-lg"> + </button>
      <button onClick={() => dispatch(decrement())} className="w-4 h-7 bg-blue-600 mr-2 ml-2 text-lg"> - </button>
      <button onClick={() => dispatch(reset())}>Reset</button>
      </div>
      <div>
        <input 
         type="number" 
         value={amount}
         onChange={(e)=> setAmount(e.target.value)}
        />
         <button onClick={() => dispatch(incrementByAmount(Number(amount)))}>Add</button>
      </div>
     
    </section>
  );
};

export default Counter;
