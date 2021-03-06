import { useRef } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';

import { ViewGridIcon, MicrophoneIcon } from '@heroicons/react/solid';
import { SearchIcon } from '@heroicons/react/outline';

import Avatar from '../components/Avatar';
import Footer from '../components/Footer';

const Home = () => {
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
    <div className='flex flex-col justify-center h-screen'>
      <Head>
        <title>Google 2.0</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <header className='flex w-full p-5 justify-between text-sm'>
        <div className='flex space-x-4 items-center'>
          <p className='link'>About</p>
          <p className='link'>Store</p>
        </div>
        <div className='flex space-x-4 items-center'>
          <p className='link'>Gmail</p>
          <p className='link'>Images</p>
          <ViewGridIcon className='h-10 w-10 p-2 rounded-full hover:bg-gray-100 cursor-pointer' />
          <Avatar url='https://coaching.papareact.com/ai9' />
        </div>
      </header>

      <form className='flex flex-col items-center mt-44 flex-grow w=4/5'>
        <Image
          src='https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png'
          width={300}
          height={100}
        />
        <div className='flex w-full mt-5 hover:shadow-lg focus-within:shadow-lg max-w-md rounded-full border border-gray-200 px-5 py-3 items-center sm:max-w-xl lg:max-w-2xl'>
          <SearchIcon className='h-5 mr-3 text-gray-500' />
          <input
            type='text'
            ref={searchInputRef}
            className='flex-grow focus:outline-none'
          />
          <MicrophoneIcon className='h-5' />
        </div>
        <div className='flex flex-col w=1/2 space-y-2 justify-center mt-8 sm:space-y-0 sm:flex-row sm:space-x-4'>
          <button className='btn' onClick={search}>
            Google Search
          </button>
          <button className='btn' onClick={search}>
            I'm Feeling Lucky
          </button>
        </div>
      </form>

      <Footer />
    </div>
  );
};

export default Home;
