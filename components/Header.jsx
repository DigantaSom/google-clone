import { useRef } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';

import { XIcon, MicrophoneIcon, SearchIcon } from '@heroicons/react/solid';

import Avatar from './Avatar';
import HeaderOptions from './HeaderOptions';

const Header = () => {
  const router = useRouter();
  const searchInputRef = useRef(null);

  const search = e => {
    e.preventDefault();

    const term = searchInputRef.current.value;

    if (!term) {
      return;
    }
    router.push(`/search?term=${term}`);
  };

  return (
    <header className='sticky top-0 bg-white'>
      <div className='flex w-full p-6 items-center'>
        <Image
          src='https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png'
          width={120}
          height={40}
          onClick={() => router.push('/')}
          className='cursor-pointer'
        />
        <form className='flex flex-grow px-6 py-3 ml-10 mr-5 border border-gray-200 rounded-full shadow-lg max-w-3xl items-center'>
          <input
            type='text'
            ref={searchInputRef}
            className='flex-grow w-full focus:outline-none'
          />
          <XIcon
            className='h-7 sm:mr-3 text-gray-500 cursor-pointer transition duration-100 transform hover:scale-125'
            onClick={() => (searchInputRef.current.value = '')}
          />
          <MicrophoneIcon className='h-6 mr-3 hidden sm:inline-flex text-blue-500 border-l-2 pl-4 border-green-300' />
          <SearchIcon className='h-6 text-blue-500 hidden sm:inline-flex' />
          <button type='submit' hidden onClick={search}>
            Search
          </button>
        </form>
        <Avatar url='https://coaching.papareact.com/ai9' className='ml-auto' />
      </div>

      <HeaderOptions />
    </header>
  );
};

export default Header;
