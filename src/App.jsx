import { useState } from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { IncNumber, DECREMENT } from './actions/index';

function App() {
  const myState = useSelector((state) => state.changeNumberReducer);
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <h1 className="text-3xl font-bold mb-4">Counter App</h1>

      {/* Display Counter */}
      <div className="text-4xl font-semibold py-4">{myState}</div>

      {/* Buttons */}
      <div className="flex gap-4">
        <button
          onClick={() => dispatch(DECREMENT())}
          className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
        >
          Decrement
        </button>

        <button
          onClick={() => dispatch(IncNumber())}
          className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
        >
          Increment
        </button>
      </div>
    </div>
  );
}

export default App;
