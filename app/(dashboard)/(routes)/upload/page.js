"use client"
import React, { useEffect, useState } from 'react'
import UploadForm from './_components/UploadForm'
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from "firebase/storage";
import { app } from '../../../../firebaseConfig'
import { doc, getFirestore, setDoc } from "firebase/firestore"
import { useUser } from '@clerk/nextjs';
import { generateRandomString } from '../../../_utils/GenerateRandomStrings';
import { useRouter } from 'next/navigation';

function Upload() {

  const { user } = useUser();
  const [progress, setProgress] = useState(0);
  const router = useRouter();
  const [uploadCompleted, setUploadCompleted] = useState(false);
  const [fileDocId, setFileDocId] = useState();
  const storage = getStorage(app)
  const db = getFirestore(app)

  const uploadFile = (file) => {
    const metadata = {
      contentType: file.type
    };
    const storageRef = ref(storage, 'file-upload/' + file?.name);
    console.log("file?name:> ", file?.name);
    console.log("Here is storageRef", storageRef)
    const uploadTask = uploadBytesResumable(storageRef, file, file.type);
    uploadTask.on('state_changed',
      (snapshot) => {
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progres = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progres + '% done');
        setProgress(progres);

        // progres == 100 && await getDownloadURL(anotherStorageRef).then((res) => {
        //   console.log('File available at', res);
        //   saveInfo(file, res);
        // }).catch((error) => {
        //   console.log("Here is the error in Uploading large files:> ", error);
        // })

        // progres == 100 && await getDownloadURL(uploadTask.snapshot.ref).then((res) => {
        //   console.log('File available at', res);
        //   saveInfo(file, res);
        // });

      },
      (error) => {
        console.log("Here is the error in uploading the file:> ", error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((res) => {
          console.log('File available at', res);
          saveInfo(file, res);
        });
      }
    )

  }

  const saveInfo = async (file, fileUrl) => {

    const docId = generateRandomString().toString();
    setFileDocId(docId);
    // fileDocId.current = docId
    console.log("Checking fileDocId=> ", fileDocId);


    const saveRes = await setDoc(doc(db, "uploadedFile", docId), {
      fileName: file?.name,
      fileSize: file?.size,
      fileType: file?.type,
      fileUrl: fileUrl,
      userEmail: user?.primaryEmailAddress.emailAddress,
      userName: user?.fullName,
      password: '',
      id: docId,
      shortUrl: process.env.NEXT_PUBLIC_BASE_URL + 'f/' + docId
    })
    console.log("saveInfo checking:> ", fileDocId)
    setUploadCompleted(true);
  }

  // useEffect(() => {
    
  //   progress == 100 && setTimeout(() => {
  //     setUploadCompleted(true);
  //     console.log("Trigger", fileDocId);
  //   }, 3000);

  // }, [progress == 100])


  useEffect(() => {

    uploadCompleted == true && setTimeout(() => {
      console.log("Checking Ref fileDocId:> ", fileDocId);
      setUploadCompleted(false)
      router.push('/file-preview/' + fileDocId);
    }, 3000);

  }, [uploadCompleted == true])


  return (
    <div className='p-5 px-8 md:px-0 container mx-auto'>
      <h2 className='text-[20px] text-center m-5'>Start <strong className='text-blue-500'>Uploading</strong> File and <strong className='text-blue-500'>Share</strong> it</h2>
      <UploadForm uploadBtnClick={(file) => uploadFile(file)} progress={progress} />
    </div>
  )
}

export default Upload