import { Download } from 'lucide-react'
import Image from 'next/image'
import React, { useState } from 'react'

function FileItem({file}) {
    
    const [password, setPassword] = useState('');

  return file && (
    <div className='p-5 rounded-lg bg-white dark:bg-zinc-800 flex flex-col items-center'>
        <div className='text-center flex-col gap-3 items-center flex'>
            <h2 className='text-[20px] text-gray-600 dark:text-gray-100'>
                <strong className='text-primary'>{file.userName} </strong>
                Shared the file with you
            </h2>
            <h2 className='text-[10px] text-gray-400 dark:text-gray-300'>Find File details below</h2>
            <Image src='/download-file.gif' alt='downloadImageIcon' width={150} height={150} 
                className='w-[150px] h-[150px] p-4 border rounded-full' />
            <h2 className='text-gray-500 dark:text-gray-300 text-[15px]'>{file.fileName} ⚡ {file.fileType} ⚡ {file.fileSize} Bytes</h2>
        </div>
        {file.password.length >3 ?
        <input type='password'
            className='p-2 border rounded-md text-[14px] mt-5 text-center outline-none border-blue-500 text-blue-500 placeholder:text-blue-500'
            placeholder='Enter password to access'
            onChange={(e)=>setPassword(e.target.value)}
        /> : null}
        <button href=''
            className='flex gap-2 p-2 bg-blue-500 text-white rounded-full w-full items-center hover:bg-blue-600 text-[14px] mt-5 text-center justify-center disabled:bg-zinc-500 transition duration-300'
            onClick={()=>window.open(file?.fileUrl)}
            disabled={file.password !== password}
        >
            <Download className='h-4 w-4' /> Download
        </button>
        <h2 className='text-gray-400 text-[12px] dark:text-gray-300 pt-3'>Terms and Conditions apply</h2>
    </div>
  )
}

export default FileItem