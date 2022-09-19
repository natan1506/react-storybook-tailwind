import React from 'react';
import logo from '../../assets/logo.png'
import { Button } from '../../components/Button';

export const Login = () => (
  <div className='w-full h-screen bg-slate-100 flex justify-center items-center'>
    <div className='bg-slate-200 flex flex-col rounded-lg p-4'>
      <img src={logo}  className=''/>
      <label for="email" className='text-base text-gray-700 my-2'>Email</label>
      <input id="email" type="text" className='py-2 px-4 text-gray-700 border border-transparent bg-gray-100 focus:bg-white hover:bg-white hover:border-purple-400 rounded-md focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-purple-300'/>

      <label for="password" className='text-base text-gray-700 my-2'>Senha</label>
      <input id="password" type="text" className='py-2 px-4 text-gray-700 border border-transparent bg-gray-100 focus:bg-white hover:bg-white hover:border-purple-400 rounded-md focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-purple-300'/>
      <Button label="Login"/>
    </div>

  </div>
);

