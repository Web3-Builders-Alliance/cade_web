import React from 'react';
import WelcomeBoard from '../components/Common/WelcomeBoard';
import CadeCardOnboarding from '../components/GetCade/CadeCard';
import Link from 'next/link';
import { ImEnter } from "react-icons/im";
import { FaArrowRight } from "react-icons/fa6";
const Onboarding = () => {
  return (
    <>

      <div class="relative flex flex-col min-h-screen bg-[url('/brickwall.jpg')]">


        <div id="first" class="h-1/4 flex flex-row bg-gradient-to-r from-red-950 via-yellow-100 to-red-950">
          <div class="ml-10 hidden lg:block">
            <div class="relative">
              <div className='flex flex-row'>
                <img class="h-72 w-28" src="pipe.png" alt="pole" />
                <img className='h-24 w-24' src='/redspotlight.png' alt='' />
              </div>
              <div class="absolute top-1/2">
                <WelcomeBoard message={"Welcome To"} width={"96"} />
              </div>
            </div>
          </div>

          <div class="block lg:hidden h-screen flex flex-col overflow-y-scroll bg-[url('/brickwall.jpg')]">
            <div class="relative">
              <div class="ml-5 flex justify-start">
                <img class="h-72 w-28" src="pipe.png" alt="pole" />
              </div>
              <div class="ml-5 absolute top-1/2 left-0 overflow-x-hidden">
                <WelcomeBoard message={"Welcome To Cade"} width={"80"} />
              </div>
            </div>
            <div class="mt-10 flex flex-col justify-center">
              <div class="w-screen">
                <CadeCardOnboarding />
              </div>
              <div class="flex flex-row justify-center">
                <div>
                  <button type="button" class="mt-5 font-abc text-4xl bg-gray-900 text-white border-2 border-yellow-400 focus:outline-none rounded-lg px-3 py-3 me-2 mb-2">
                    <div className='flex flex-row'>
                      <Link href='/'><span>To Arcade</span></Link><span><FaArrowRight className='ml-2 text-4xl mt-1 text-yellow-300' /></span>
                    </div>
                  </button>
                </div>
              </div>
              <div class="mt-10 flex flex-row justify-center overflow-x-hidden ">
                <img class="w-60 h-60" src='/c6.png' alt='ff' />
                <img class="w-60 h-60" src='/c4.png' alt='ff' />
                <img class="w-60 h-60" src='/c9.png' alt='ff' />
                <img class="w-60 h-60" src='/c1.png' alt='ff' />
                <img class="w-60 h-60" src='/newarcade.png' alt='ff' />
              </div>
            </div>
          </div>

          <div class="absolute right-0 mr-10 hidden lg:block">
            <div class="relative">
              <div class="flex justify-end flex-row">
                <img className='h-24 w-24' src='/redspotlight.png' alt='' />
                <img class="h-72 w-28" src='pipe.png' alt='pole' />
              </div>
              <div class="absolute top-1/2 right-0">
                <WelcomeBoard message={"Cade 🔥🔥"} width={"96"} />
              </div>
            </div>
          </div>
        </div>


        <div className='absolute top-0 left-1/3 hidden lg:block'>
          <div className='flex justify-center gap-x-14'>
            <img className='h-24 w-24' src='/spotlight.png' alt='' />
            <img className='h-24 w-24' src='/spotlight.png' alt='' />
            <img className='h-24 w-24' src='/spotlight.png' alt='' />
            <img className='hidden xl:block h-24 w-24' src='/spotlight.png' alt='' />
          </div>
        </div>

        <div class="hidden lg:flex flex-col h-3/4 overflow-y-auto  bg-[url('/brickwall.jpg')]">

          <div class="h-1/2 flex flex-row">
            <div class="relative w-1/5 mb-10 flex justify-center">
              <button type="button" class="cursor-default absolute top-1/2 left-1/2 font-abc text-4xl bg-gray-900 text-yellow-400 border-2 border-yellow-400 focus:outline-none rounded-lg px-12 py-4 me-2 mb-2"><span className='animate-blink'>Open <ImEnter className='mt-2' /></span></button>
            </div>

            <div class="flex justify-center w-3/5 mb-14">
              <div class="w-2/4 flex flex-col justify-center items-center">
                <div className='mt-5'>
                  <CadeCardOnboarding />
                </div>
                <div class="flex flex-row">
                  <div>
                    <button type="button" class="mt-5 font-abc text-4xl bg-gray-900 text-white border-2 border-yellow-400 focus:outline-none rounded-lg px-8 py-5  me-2 mb-2">
                      <div className='flex flex-row'>
                        <Link href='/'><span>To Arcade</span></Link><span><FaArrowRight className='ml-2 text-4xl mt-1 text-yellow-300' /></span>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div class="relative w-1/5 mb-10 flex justify-center">
              <button type="button" class="cursor-default absolute top-1/2 right-1/2 font-abc text-4xl bg-gray-900 text-yellow-400 border-2 border-yellow-400 focus:outline-none rounded-lg px-12 py-4 me-2 mb-2"><span className='animate-blink'>Open <ImEnter className='mt-2' /> </span></button>
            </div>
          </div>

          <div class="mb-0 h-1/2 flex flex-row bg-transparent overflow-x-scroll">
            <div class="flex flex-row items-center justify-end w-1/4  overflow-y-hidden">
              <img class="w-60 h-60" src='/c8.png' alt='ff' />
              <img class="hidden xl:block w-60 h-60" src='/c1.png' alt='ff' />
            </div>

            <div class="w-2/4 flex justify-center flex-row items-center">
              <img class="w-60 h-60" src='/c4.png' alt='ff' />
              <img class="w-60 h-60" src='/c9.png' alt='ff' />
              <img class="w-60 h-60" src='/c2.png' alt='ff' />
            </div>

            <div class="flex flex-row items-center w-1/4 overflow-x-hidden">
              <img class="hidden xl:block w-60 h-60" src='/c6.png' alt='ff' />
              <img class="w-60 h-60" src='/newarcade3.png' alt='ff' />
            </div>
          </div>
        </div>
      </div>


    </>
  );
};

export default Onboarding;
