import Image from 'next/image';
import React, { useEffect, useState } from 'react'

function FileInfo({file}) {
    const [fileType, setFileType] = useState();
    useEffect(() => {
      file && setFileType(file?.fileType.split('/')[0]);
      console.log('FileType from FileInfo.js :> ', fileType);
    }, [file])
    
  return file && (
    <div className='text-center border flex justify-center m-0 md:m-4 flex-col items-center p-2 rounded-md border-blue-200 dark:border-blue-300 md:h-96 w-full md:w-auto'>
        <Image src={fileType == 'image' ? file?.fileUrl: '/file.png'}
            width={200}
            height={200}
            className='h-[200px] rounded-md object-contain'
            alt='FileImage'
        />
        <div className=''>
            <h2>{file.fileName}</h2>
            <h2 className='text-gray-400 text-[13px]'>{file.fileName}</h2>
        </div>
    </div>
  )
}

export default FileInfo