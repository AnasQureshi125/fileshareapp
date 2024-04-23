'use client'
import React, { useState, useEffect } from 'react';
import { app } from '../../../../firebaseConfig';
import { query, getDocs, getFirestore, where, collection } from 'firebase/firestore';
import { useRouter } from 'next/navigation';
import { File } from 'lucide-react';

function Files() {
  const [fileInfo, setFileInfo] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const db = getFirestore(app);

    const getFileInfo = async () => {
      const docRef = query(collection(db, "uploadedFile"), where("userName", "==", "Anas Qureshi"));
      const docSnap = await getDocs(docRef);
      const filesData = [];

      docSnap.forEach((doc) => {
        filesData.push({ id: doc.id, ...doc.data() });
      });

      setFileInfo(filesData);
      setLoading(false);
    };

    getFileInfo();
  }, []); // Run only once after component mounted

  const selectedFile = (file) => {
    console.log("You're Selected File id is now here:> ", file)
    router.push('/file-preview/' + file);
  }

  return (
    <div className='container mx-auto px-8 md:px-0'>
      <h2 className='text-2xl mb-3 mt-5'>Files</h2>

      <div>

        <div className="w-full mx-auto">

          <div className="flex flex-col">
            <div className="overflow-x-auto shadow-md rounded-md sm:rounded-lg dark:bg-gray-900">
              <div className="inline-block min-w-full align-middle">
                <div className="w-full overflow-hidden">

                  {
                    loading ?
                      <div className="border-2 border-dashed border-slate-700 animate-pulse shadow rounded-md p-4 w-full mx-auto">

                        <div className="animate-pulse flex space-x-4">
                          <div className="rounded-full bg-slate-700 h-10 w-10"></div>
                          <div className="flex-1 space-y-2 py-1">
                            <div className="space-y-2">
                              <div className="grid grid-cols-3 gap-4">
                                <div className="h-2 bg-slate-700 rounded col-span-1"></div>
                                <div className="h-2 bg-slate-700 rounded col-span-1"></div>
                                <div className="h-2 bg-slate-700 rounded col-span-1"></div>
                              </div>
                              <div className="grid grid-cols-3 gap-4">
                                <div className="h-2 bg-slate-700 rounded col-span-1"></div>
                                <div className="h-2 bg-slate-700 rounded col-span-1"></div>
                                <div className="h-2 bg-slate-700 rounded col-span-1"></div>
                              </div>
                              <div className="grid grid-cols-3 gap-4">
                                <div className="h-2 bg-slate-700 rounded col-span-1"></div>
                                <div className="h-2 bg-slate-700 rounded col-span-1"></div>
                                <div className="h-2 bg-slate-700 rounded col-span-1"></div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="my-2 animate-pulse flex space-x-4">
                          <div className="rounded-full bg-slate-700 h-10 w-10"></div>
                          <div className="flex-1 space-y-2 py-1">
                            <div className="space-y-2">
                              <div className="grid grid-cols-3 gap-4">
                                <div className="h-2 bg-slate-700 rounded col-span-1"></div>
                                <div className="h-2 bg-slate-700 rounded col-span-1"></div>
                                <div className="h-2 bg-slate-700 rounded col-span-1"></div>
                              </div>
                              <div className="grid grid-cols-3 gap-4">
                                <div className="h-2 bg-slate-700 rounded col-span-1"></div>
                                <div className="h-2 bg-slate-700 rounded col-span-1"></div>
                                <div className="h-2 bg-slate-700 rounded col-span-1"></div>
                              </div>
                              <div className="grid grid-cols-3 gap-4">
                                <div className="h-2 bg-slate-700 rounded col-span-1"></div>
                                <div className="h-2 bg-slate-700 rounded col-span-1"></div>
                                <div className="h-2 bg-slate-700 rounded col-span-1"></div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="mb-2 animate-pulse flex space-x-4">
                          <div className="rounded-full bg-slate-700 h-10 w-10"></div>
                          <div className="flex-1 space-y-2 py-1">
                            <div className="space-y-2">
                              <div className="grid grid-cols-3 gap-4">
                                <div className="h-2 bg-slate-700 rounded col-span-1"></div>
                                <div className="h-2 bg-slate-700 rounded col-span-1"></div>
                                <div className="h-2 bg-slate-700 rounded col-span-1"></div>
                              </div>
                              <div className="grid grid-cols-3 gap-4">
                                <div className="h-2 bg-slate-700 rounded col-span-1"></div>
                                <div className="h-2 bg-slate-700 rounded col-span-1"></div>
                                <div className="h-2 bg-slate-700 rounded col-span-1"></div>
                              </div>
                              <div className="grid grid-cols-3 gap-4">
                                <div className="h-2 bg-slate-700 rounded col-span-1"></div>
                                <div className="h-2 bg-slate-700 rounded col-span-1"></div>
                                <div className="h-2 bg-slate-700 rounded col-span-1"></div>
                              </div>
                            </div>
                          </div>
                        </div>

                      </div>
                      :
                      <div className='w-full overflow-hidden rounded-md'>
                      <table className="w-full divide-y divide-gray-200 dark:divide-gray-700">
                        <thead className="bg-gray-100 dark:bg-gray-700">
                          <tr>

                            <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                              File Name
                            </th>
                            <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                              Size
                            </th>
                            <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                              Uploaded By
                            </th>

                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">

                          {fileInfo.map((file) => (
                            <tr key={file.id} onClick={() => selectedFile(file.id)} className='cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700' >
                              <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white flex gap-2 justify-start items-center"><File /> {file.fileName}</td>
                              <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">{file.fileSize}</td>
                              <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">{file.userName}</td>
                            </tr>
                          ))}

                        </tbody>
                      </table>
                      </div>
                  }
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Files;
