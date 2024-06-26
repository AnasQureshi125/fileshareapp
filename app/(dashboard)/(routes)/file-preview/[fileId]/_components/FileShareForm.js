import React, { useState } from 'react'
import { Copy } from 'lucide-react';
import GlobalApi from '../../../../../_utils/GlobalApi';
import { useUser } from '@clerk/nextjs';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function FileShareForm({ file, onPasswordSave }) {
    const [isPasswordEnable, setIsEnablePassword] = useState(false);
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState();
    const { user } = useUser();

    const sendEmail = () => {
        const data = {
            emailToSend: email,
            userName: user?.fullName,
            fileName: file.fileName,
            fileSize: file.fileSize,
            fileType: file.fileType,
            shortUrl: file.shortUrl,
        }
        GlobalApi.SendEmail(data).then(resp => {
            console.log('SendEmail Response:> ', resp.data.data)
            if (resp.data.data !== null) {
                showToastMessage("Email Sent!");
            }else{
                showToastErrorMessage("Failed to sent, try again later!")
            }
        })
    }

    const showToastErrorMessage = (msg) => {
        toast.error(msg);
    };

    const showToastMessage = (msg) => {
        toast.success(msg);
    };

    const onCopyClick = () => {
        navigator.clipboard.writeText(file.shortUrl)
        // setToast({
        //     status: 'Copied',
        //     msg: 'Url Copied!'
        // })
        showToastMessage("Copied to clipboard!")
    }

    return file && (
        <>
            <div className='flex flex-col gap-2 mt-2'>
                <div>
                    <label className='text-gray-500 text-[14px]'>Short Url</label>
                    <div className='flex gap-5 p-2 border rounded-md'>
                        <input type='text' value={file.shortUrl} disabled
                            className='disabled:text-gray-500 bg-transparent outline-none w-full'
                        />
                        <Copy
                            className='text-gray-400 hover:text-gray-600 cursor-pointer'
                            onClick={() => onCopyClick()}
                        />
                    </div>
                </div>
                <div className='gap-3 flex mt-5'>
                    <input type='checkbox' defaultChecked={file.password != ''} onChange={(e) => setIsEnablePassword(e.target.value)} />
                    <label>Enable Password?</label>
                </div>

                {isPasswordEnable ?
                    <div className='flex gap-3 items-center'>
                        <div className='border rounded-md w-full p-2'>
                            <input type='password'
                                className='disabled:text-gray-500 bg-transparent outline-none'
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <button
                            className='p-2 bg-blue-500 disabled:bg-gray-700 text-white rounded-lg disabled:text-gray-200 hover:bg-blue-600'
                            disabled={password?.length < 3}
                            onClick={() => onPasswordSave(password)}
                        >Save</button>
                    </div> : null
                }

                <div className='border rounded-md p-3 mt-5'>
                    <label className='text-[14px] text-gray-500'>Send File to Email</label>
                    <div className='border rounded-lg p-2'>
                        <input type='email'
                            placeholder='example@gmail.com'
                            className='bg-transparent outline-none'
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <button
                        className='p-2 disabled:bg-gray-300 bg-blue-500 text-white hover:bg-transparent hover:text-blue-500 w-full mt-2 rounded-lg transition duration-300 border-2 border-blue-500'
                        onClick={() => sendEmail()}
                    >
                        Send Email
                    </button>
                </div>
            </div>
            <ToastContainer />
        </>
    )
}

export default FileShareForm