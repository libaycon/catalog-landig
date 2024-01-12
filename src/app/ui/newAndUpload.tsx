'use client';
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "./button";
import UploadForm from "@/components/modals/upload";

interface NewUploadBTNProps {
    pushLink: string;
    uploadLInk: string;
}

export default function NewUploadBTN({pushLink}:NewUploadBTNProps): JSX.Element {
    const [showUpload, setShowUpload] = useState<boolean>(false);

    const router = useRouter();

    useEffect(() => {
        const handleClose = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            showUpload && !target.closest('.showUpload') && setShowUpload(false);
        }
        showUpload && window.addEventListener('click', handleClose);
        return () => window.removeEventListener('click', handleClose);
    }, [showUpload]);

    return (
        <>
            <div className="flex flex-wrap gap-2">
                <Button className="bg-blue-500 hover:bg-blue-400"
                    onClick={() => router.push(pushLink)}
                >Nuevo</Button>
                <Button 
                    className="bg-blue-500 hover:bg-blue-400 showUpload"
                    onClick={() => setShowUpload(true)}
                >Subir</Button>
            </div>
            {showUpload && <UploadForm name="upload" setIsOpen={setShowUpload} />}
        </>
    )
}