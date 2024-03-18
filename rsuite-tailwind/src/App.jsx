import React from 'react';
import { Button } from 'rsuite';

function App() {
  return (
    <>
      <MyButton />
    </>
  )
}
export default App

const MyButton = () => {
  return (
    <div className='flex items-center justify-center h-[100vh] bg-slate-800 '>
      <Button className="bg-emerald-500 hover:bg-amber-600 text-white font-bold py-10 px-36 rounded-3xl  text-3xl">
        Click me
      </Button>
    </div>
  );
};