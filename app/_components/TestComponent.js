// Import necessary dependencies
import React from 'react';
import Constant from "../_utils/Constant";
import Image from 'next/image';
import Link from 'next/link';

// Define the Next.js component
const TestComponent = () => {

    return (
        <div className="bg-white dark:bg-zinc-900">
            <div className="container flex flex-col mx-auto bg-white dark:bg-zinc-900 md:px-0 px-8">
                <div className="grid w-full grid-cols-1 my-auto mt-3 md:grid-cols-2 xl:gap-14 md:gap-5">
                    <div className="flex flex-col justify-center col-span-1 text-center lg:text-start px-3 md:px-0 mt-16 md:mt-0">
                        <div className="flex items-center justify-center mb-8 lg:justify-normal">
                            <Image src='/logo-1.png' width={50} height={50} alt='ShareFilesExploreLogo' className='h-5 w-5' />
                            <h4 className="ml-2 text-sm font-bold tracking-widest text-blue-500 uppercase">Explore My Share Files App</h4>
                        </div>
                        {/* <h1 className="mb-12 text-4xl font-extrabold leading-tight lg:text-6xl text-dark-grey-900">Elevate your website with Motion</h1> */}
                        <h1 className="mb-8 text-3xl font-extrabold leading-tight lg:text-6xl text-black dark:text-white">
                            <span className="text-blue-500">Upload, Save</span> and easily <span className="text-blue-500">Share</span> your files in one place
                        </h1>
                        <p className="mb-8 text-base font-normal leading-7 lg:w-3/4 text-grey-900">
                            {Constant.desc}
                        </p>
                        <Link href='/upload'>
                            <div className="flex flex-col items-center gap-4 lg:flex-row">
                                <button
                                    className="flex items-center py-2 text-sm font-medium px-5 text-dark-grey-700 hover:text-purple-900 transition duration-300 rounded-2xl hover:bg-gray-100"
                                >
                                    Get started now
                                </button>

                            </div>
                        </Link>
                    </div>
                    <div className="items-center justify-end hidden col-span-1 md:flex">
                        <Image src='/header-1.png' width={430} height={200} className="w-4/5 h-full rounded-md" alt='heroBannerImage' />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TestComponent;
