import React from 'react';

function Header() {
  return (
    <header className=' p-4 bg-gray-800 text-white'>
      <a href="/" className='logo text-2xl font-bold text-white'>FoodApp</a>
      <nav aria-label="Main Navigation">
        <ul className='flex space-x-4'>
          <li>
            <a href="/" className='hover:text-gray-400'>Home</a>
            {/* nothing */}
          </li>
          <li>
            <a href="/checkout" className='hover:text-gray-400'>Checkout</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
