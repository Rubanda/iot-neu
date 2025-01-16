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
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from '../ui/button';
import { Icons } from '../icons';
import { Input } from '../ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { z } from 'zod';
import { catchError } from '@/lib/utils';
import { createPrediction } from '@/app/_action/prediction';
import { UploadButton } from "@/utils/uploadthing";
const videoConstraints = {
    width: 1280,
    height: 720,
    facingMode: 'user',
};
let img = '/atiot.jpeg';
const label_map = [
    { name: 'MonkeyPox', icon: '😤' },
    { name: 'non_monkeypox', icon: '😶' },
]
const predictionSchema = z.object({
    result: z.string(),
    confidence: z.number().optional(),
    imageUrl: z.string().optional(),
});

export function CheckSkinCondition() {
    const [image, setImage] = useState<any>(null);
    const [createObjectURL, setCreateObjectURL] = useState<any>(null);
    const [res, setRes] = useState<any>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [screenShot, setScreenShot] = useState<any>(null);
    const [showCamera, setShowCamera] = useState<boolean>(false);
    const [isPending, startTransition] = React.useTransition();
    const webcamRef: any = React.useRef(null);

    const capture = React.useCallback(() => {
        const imageSrc = webcamRef.current.getScreenshot();
        setScreenShot(imageSrc);
        setShowCamera(false)
    }, [webcamRef]);

    const analyzeSkinCondition = async (imageFile: string) => {
        setLoading(true);
        try {
            const path = "predict";
            const data: any = await poster(path, { file: imageFile });

            if (data.status !== 200) {
                throw new Error('Failed to analyze image');
            }

            if (data.data.probabilities.MonkeyPox > 0.6) {
                setRes({ result: 'MonkeyPox', probabilities: data.data.probabilities });
            } else {
                setRes({ result: 'non_monkeypox', probabilities: data.data.probabilities });
            }
            const payload = {
                result: data.data.probabilities.MonkeyPox > 0.6 ? 'MonkeyPox' : 'non_monkeypox',
                confidence: data.data.probabilities.MonkeyPox,
                image: imageFile,
                recommendation: data.data.probabilities.MonkeyPox > 0.6 ? 'Go see doctor' : 'No need to see doctor',
            };

            await createPrediction(JSON.stringify(payload));
            toast.success("Analysis completed and saved to database.");
        } catch (error) {
            toast.error("Failed to analyze image");
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    const final = label_map.find(
        (lab: any) => lab.name === res?.result
    )
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline">Test</Button>
            </DialogTrigger>
            <DialogContent className="max-w-[700px] mx-auto max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                    <DialogTitle>Test Your Skin</DialogTitle>
                    <DialogDescription>
                        Check your <span className='text-violet-600'>skin </span>condition.
                    </DialogDescription>
                </DialogHeader>
                <div className='flex flex-1 flex-col items-center justify-center px-2 '>
                    <div className='mt-6 grid grid-cols-1 md:grid-cols-3  flex-1 flex-wrap gap-4 '>
                        <div className='col-span-1'>
                            <Image
                                width={300}
                                height={300}
                                alt="Image to predict"
                                src={image ?? '/skin.jpg'}
                                className={`${image ? 'h-52 w-72 rounded-xl' : 'rounded-2xl h-52 w-72'}`}
                            />
                        </div>
                        <div className='col-span-2 flex flex-col gap-3'>
                            <form className='flex flex-col gap-3 items-start justify-start'>
                                <UploadButton
                                    endpoint="imageUploader"
                                    onClientUploadComplete={(res) => {
                                        if (res && res.length > 0) {
                                            const uploadedFile = res[0];
                                            setImage(uploadedFile.url);
                                            analyzeSkinCondition(uploadedFile.url);
                                        }
                                    }}
                                    onUploadError={(error: Error) => {
                                        toast.error(`Upload failed: ${error.message}`);
                                    }}
                                />
                            </form>
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
                                            <h5 className='mb-2 text-2xl font-semibold tracking-tight'>
                                                {final?.name}
                                            </h5>
                                            <div>
                                                {Object.entries(res?.probabilities)?.map(([key, value]) => {

                                                    return (<p key={key}>
                                                        {key}: {String(value)}
                                                    </p>
                                                    )
                                                })}


                                            </div>
                                        </>
                                    ) : res?.error ? (
                                        <p>{res?.error}</p>
                                    ) : (
                                        'No Data Yet'
                                    )}

                                </CardContent>
                            </Card>
                        </div>
                    </div>
                    <div></div>

                </div>

            </DialogContent>
        </Dialog>
    )
}

