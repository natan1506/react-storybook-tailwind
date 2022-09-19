import React from 'react';


export const Header = ({ user, onLogin, onLogout, onCreateAccount }) => (
  <>
    <nav className="backdrop-filter backdrop-blur-xl border-b border-slate-900/5 z-10 bg-gray-50/90 fixed top-0 w-full">
      <div className='container py-3 mx-auto'>
        <div className='flex flex-col md:flex-row md:justify-between md:items-center'>
          <div>
            <span>LOGO</span>
            <input type="text" />
          </div>
          <div className="items-center md:flex">
            <div className="flex flex-col px-2 py-3 -mx-4 md:flex-row md:mx-0 md:py-0">
              <a href="#" className="px-3 py-2 text-sm font-medium text-gray-700 transition-colors duration-200 transform rounded-full  hover:bg-purple-900 hover:text-gray-100 md:mx-2">Home</a>
              <a href="#" className="px-3 py-2 text-sm font-medium text-gray-700 transition-colors duration-200 transform rounded-full  hover:bg-purple-900 hover:text-gray-100 md:mx-2">Listas</a>
              <a href="#" className="px-3 py-2 text-sm font-medium text-gray-700 transition-colors duration-200 transform rounded-full  hover:bg-purple-900 hover:text-gray-100 md:mx-2">Grupos</a>
              <a href="#" className="px-3 py-2 text-sm font-medium text-gray-700 transition-colors duration-200 transform rounded-full  hover:bg-purple-900 hover:text-gray-100 md:mx-2">Descubra</a>
              <a href="#" className="px-3 py-2 text-sm font-medium text-gray-700 transition-colors duration-200 transform rounded-full  hover:bg-purple-900 hover:text-gray-100 md:mx-2">Meu
                Perfil</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </>
);

