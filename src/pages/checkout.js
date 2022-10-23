import Image from 'next/image';
import React from 'react'
import Header from '../components/Header'

function Checkout() {
  return (
    <div className="bg-gray-100">
      <Header />
      <main className='lg:flex max-w-screen-2xl mx-auto'>
       {/* left */}
        <div>
          <Image src="https://links.papareact.com/dyz" 
          width={1020}
          height={250}
          objetcFit="contain"
          />
        </div>


       {/* right */}
       <div>

       </div>
      </main>
    </div>
  );
}

export default Checkout
