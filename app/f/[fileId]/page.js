'use client'
import { app } from '../../../firebaseConfig';
import { doc, getDoc, getFirestore } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import localFont from 'next/font/local';
import FileItem from './_components/FileItem';
import Link from 'next/link';
import Image from 'next/image';

//👇 Configure my local font object
const myFont = localFont({ src: '../../../fonts/DancingScript-Bold.ttf' })

function FileView({ params }) {

  const db = getFirestore(app);
  const [file, setFile] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("Params For File View:> ", params.fileId);
    params.fileId && getFileInfo();
  }, [])

  const getFileInfo = async () => {

    const docRef = doc(db, "uploadedFile", params?.fileId);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      setFile(docSnap.data());
      setLoading(false);
    }
    else {
      // docSnap.data() will be undefined in this case
      console.log("No such document!");
    }

  }

  return (
    <div className='bg-gray-100 dark:bg-zinc-900 h-screen w-full flex justify-center items-center flex-col gap-4'>
      {loading ?
        <div className='flex justify-center items-center gap-3 my-3'>
          <Image src='/logo-1.png' width={50} height={50} alt='loadingLogo' className='animate-spin' />
          <h1 className='text-xl animate-pulse'>Loading...</h1>
        </div>
        :
        <div className=''>
          <Link className="flex items-center justify-center gap-3" href=''>
            <img className="h-8" src="https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/motion-tailwind/img/logos/logo-1.png" alt="mylogo" />
            <span className={`${myFont.className} text-2xl py-3`}>Share Files</span>
          </Link>
          <FileItem file={file} />
        </div>
      }
    </div>
  )
}

export default FileView