'use client'
import React, { useState } from 'react'
import Webcam from 'react-webcam';
import axios from 'axios';
import Image from 'next/image';
import { toast } from "sonner"
import { poster } from '../fetchet';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from '../ui/button';
import { Icons } from '../icons';
import { Input } from '../ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
const videoConstraints = {
    width: 1280,
    height: 720,
    facingMode: 'user',
};
let img = '/atiot.jpeg';
const label_map = [
    { name: 'Monkeypox', icon: '😤' },
    { name: 'Chickenpox', icon: '😶' },
    { name: 'Measles', icon: '😨' },
    { name: 'Healthy', icon: '😅' },
];
export function CheckSkinCondition() {
    const [image, setImage] = useState<any>(null);
    const [createObjectURL, setCreateObjectURL] = useState<any>(null);
    const [res, setRes] = useState<any>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [screenShot, setScreenShot] = useState<any>(null);
    const [showCamera, setShowCamera] = useState<boolean>(false);

    const webcamRef: any = React.useRef(null);

    const capture = React.useCallback(() => {
        const imageSrc = webcamRef.current.getScreenshot();
        setScreenShot(imageSrc);
        setShowCamera(false)
    }, [webcamRef]);
    const uploadImage = async (event: any) => {
        event.preventDefault();
        if (image == null) {
            toast.error('upload image first')
            return
        }
        console.log(`${process.env.AI_API_URL}/upload-file/`)
        const body = new FormData();
        body.append('file', image);
        const data: any = await poster(`${process.env.AI_API_URL}/upload-file/`, body);
        if (data.status === 200) toast.success('image sent ');
        setRes(data);
        setScreenShot(null)
    };
    const uploadToClient = async (event: any) => {
        setScreenShot(null);
        if (event.target.files && event.target.files[0]) {
            const i = event.target.files[0];

            setImage(i);
            // toast.success('image uploaded')
            setCreateObjectURL(URL.createObjectURL(i));
        }
    };
    const sendToBackend = async (event: any) => {
        event.preventDefault();
        if (screenShot == null) {
            toast.error('take image first')
            return
        }
        console.log('process', process.env.AI_API_URL)
        const body = new FormData();
        body.append('file', screenShot);
        const data: any = await poster(`${process.env.AI_API_URL}/upload/`, body);
        if (data.status === 200) toast.success('sent photo to Analyze');
        setImage(null)
    };
    const Analyze = async (event: any) => {
        console.log('process', process.env.AI_API_URL)
        event.preventDefault();
        setLoading(true)
        const data: any = await axios.get(`https://fastapi.masatafit.com/predict/`);
        if (data === 200) toast.success('predicted');
        setRes(data.data);
        setLoading(false)
    };
    console.log('data', { res })
    const final: { name: string; icon: string } = label_map.find(
        (lab: any) => lab.name === res?.result
    ) ?? { name: 'Monkeypox', icon: '😤' };
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline">Test</Button>
            </DialogTrigger>
            <DialogContent className="max-w-[800px] mx-auto max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                    <DialogTitle>Test Your Skin</DialogTitle>
                    <DialogDescription>
                        Check your <span className='text-violet-600'>skin </span>condition.
                    </DialogDescription>
                </DialogHeader>
                <div className='flex flex-1 flex-col items-center justify-center px-2 '>
                    <div className='mt-6 grid grid-cols-1 md:grid-cols-3  flex-1 flex-wrap gap-4 '>
                        <div className='col-span-2'>
                            {screenShot ? (
                                <Image
                                    width={500}
                                    height={500}
                                    alt="Image to predict"
                                    src={screenShot ?? '/skin.jpg'}
                                    className={` ${screenShot
                                        ? 'h-72 w-96 rounded-xl'
                                        : ' rounded-2xl h-full w-96'
                                        } `}
                                />
                            ) : (
                                <Image
                                    width={500}
                                    height={500}
                                    alt="Image to predict"
                                    src={createObjectURL ?? '/skin.jpg'}
                                    className={` ${createObjectURL
                                        ? 'h-72 w-96 rounded-xl'
                                        : ' rounded-2xl h-72 w-96'
                                        } `}
                                />
                            )}
                        </div>
                        <form className='flex flex-col gap-3 items-start justify-start'>
                            <div className='flex '>
                                {!showCamera ?
                                    <>
                                        <label className=' flex  gap-3 items-center px-1 py-1 text-blue rounded-md tracking-wide uppercase border border-blue cursor-pointer hover:text-violet-600'>
                                            <p className='flex items-center gap-2'>
                                                <svg
                                                    className='w-3 h-3'
                                                    fill='currentColor'
                                                    xmlns='http://www.w3.org/2000/svg'
                                                    viewBox='0 0 20 20'
                                                >
                                                    <path d='M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z' />
                                                </svg>
                                                <span className=''>upload</span>
                                            </p>
                                            <Input
                                                className='hidden'
                                                id='default_size'
                                                type='file'
                                                onChange={uploadToClient}
                                            />

                                        </label>
                                        <Button
                                        variant='outline'
                                            onClick={uploadImage}
                                            className='ml-2'
                                        >
                                            <Icons.send className='h-4 w-4' />
                                        </Button></> : null
                                }
                            </div>
                            <div className='flex items-center gap-2'>
                                <Button
                                    variant='outline'
                                    onClick={(event) => {
                                        event?.preventDefault();
                                        setShowCamera(!showCamera);
                                    }}
                                >
                                    <Icons.camera className='h-4 w-4 mr-2' /> Camera
                                </Button>
                                <Button
                                    className=''
                                    variant='outline'
                                    onClick={sendToBackend}
                                >
                                    <Icons.send className='h-4 w-4' />
                                </Button>
                            </div>

                            <Button
                                onClick={Analyze}
                                variant='secondary'
                            >
                                {loading ? (<p>Loading...</p>) : 'ANALYZE'}
                            </Button>
                        </form>
                    </div>
                    <div></div>

                </div>
                <div className='flex flex-col gap-3 md:flex-row  justify-center items-center'>
                    {showCamera && (
                        <>
                            <div className='flex flex-col rounded-2xl'>
                                <Webcam
                                    audio={false}
                                    height={100}
                                    ref={webcamRef}
                                    screenshotFormat='image/jpeg'
                                    width={400}
                                    videoConstraints={videoConstraints}
                                />
                                <Button
                                    variant='outline'
                                    onClick={capture}
                                >
                                    Capture photo
                                </Button>
                            </div>
                            {screenShot && (
                                <div className='flex flex-col'>
                                    <Image width={500}
                                        height={500}
                                        alt="Image to predict" src={screenShot} />


                                </div>
                            )}
                        </>
                    )}

                </div>
                <Card className='w-full flex flex-col justify-center items-center mt-9 mb-4 p-4 rounded-lg shadow-md'>
                    <CardHeader>
                        <CardTitle>
                            Result
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        {final ? (
                            <>
                                <span className='text-xl'>{final?.icon}</span>
                                <a href='#'>
                                    <h5 className='mb-2 text-2xl font-semibold tracking-tight'>
                                        {final?.name}
                                    </h5>
                                </a>
                            </>
                        ) : res?.error ? (
                            <p>{res?.error}</p>
                        ) : (
                            'No Data Yet'
                        )}

                    </CardContent>
                </Card>
            </DialogContent>
        </Dialog>
    )
}