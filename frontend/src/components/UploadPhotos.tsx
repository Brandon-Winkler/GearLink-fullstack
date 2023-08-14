import { useState, ChangeEvent } from "react";
// import * as AWS from 'aws-sdk';

const UploadPhotos: React.FC = () => {

    const [selectedFiles, setSelectedFiles] = useState<File[]>([]);

    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;
        if (files) {
            setSelectedFiles([...files]);
        }
    };

    // AWS.config.update({
    //     accessKeyId: import.meta.env.AWS_ACCESS_KEY_ID,
    //     secretAccessKey: import.meta.env.AWS_SECRET_ACCESS_KEY,
    //     region: import.meta.env.AWS_REGION
    // });

    // const s3 = new AWS.S3();

    return (
        <>
            <label htmlFor="uploadPhotos">Upload Photos</label>
            <input type="file" name="files[]" multiple onChange={handleFileChange} />
            <ul>
                {selectedFiles.map((file, index) => (
                    <li key={index}>{file.name}</li>
                ))}
            </ul>
        </>
    );
}

export default UploadPhotos;