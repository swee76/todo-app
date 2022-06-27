import React from 'react';
import TodoHome from "./pages/todohome";
// import AddTodo from "./pages/addtodo";
import {BsMastodon} from 'react-icons/bs';
import {FaUserCircle} from 'react-icons/fa'

const App = () => {
  return (
      <div>
          <div className={'bg-gradient-to-r from-amber-800 to-yellow-200 py-6 grid grid-cols-7'}>
              <BsMastodon className={'col-span-1 w-16 h-16'}/>
              <div className={'col-span-4 text-4xl font-bold text-zinc-800 mx-auto'}>Todo Application</div>
              <div className={'col-span-2 flex flex-row gap-2 justify-end items-center mr-10'}>
                  <FaUserCircle className={'w-12 h-12 text-gray-500'}/>
                  <button className={'px-2.5 py-1.5 text-sm text-white font-semibold rounded-lg shadow-sm border-amber-500 bg-amber-500'}>Login</button>
                  <button className={'px-2.5 py-1.5 text-sm text-amber-500 hover:text-white font-semibold rounded-lg shadow-sm border-amber-500 bg-amber-50 hover:bg-amber-500'}>Sign Up</button>
              </div>
          </div>
        <TodoHome/>
        {/*  <AddTodo/>*/}
      </div>
  );
};

export default App;
