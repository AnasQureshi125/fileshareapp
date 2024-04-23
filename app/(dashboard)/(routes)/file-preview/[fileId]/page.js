'use client'
import { app } from '../../../../../firebaseConfig';
import { doc, getDoc, getFirestore, updateDoc } from 'firebase/firestore';
import { ArrowLeftCircle } from 'lucide-react';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import FileInfo from './_components/FileInfo';
import FileShareForm from './_components/FileShareForm';
import Image from 'next/image';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function FilePreview({ params }) {

    const db = getFirestore(app);
    const [file, setFile] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        params?.fileId && getFileInfo();
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

    const onPasswordSave = async (password) => {
        const docRef = doc(db, "uploadedFile", params?.fileId);

        try {
            await updateDoc(docRef, {
                password: password
            })
            console.log("Password Updated Succcessfull");
            showToastMessage('Password Updated!')

        } catch (error) {
            console.log("Some Error in updating the password:> ". error);
        }
    }

    const showToastMessage = (msg) => {
        toast.success(msg);
    };

    return (
        <div className='container mx-auto py-10 px-8 md:px-0'>
            <button>
                <Link href='/upload' className='flex gap-1 pl-3 pr-4 py-2 hover:text-purple-900 transition duration-300 rounded-full hover:bg-gray-100 cursor-pointer'><ArrowLeftCircle /> Go to Upload </Link>
            </button>

            {loading
                ? <div className='flex justify-center items-center gap-3 my-3'>
                    <Image src='/logo-1.png' width={50} height={50} alt='loadingLogo' className='animate-spin' />
                    <h1 className='text-xl animate-pulse'>Loading...</h1>
                </div>
                : <div className='grid grid-cols-1 md:grid-cols-2 mt-5 p-2 rounded-xl shadow-lg shadow-slate-800'>
                    <FileInfo file={file} />
                    <FileShareForm file={file}
                        onPasswordSave={(password) => onPasswordSave(password)}
                    />
                </div>
            }
            <ToastContainer />
        </div>
    )
}

export default FilePreview