import { useState, ChangeEvent } from "react";

const UploadPhotos: React.FC = () => {

    const [selectedFiles, setSelectedFiles] = useState<File[]>([]);

    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;
        if (files) {
            setSelectedFiles([...files]);
        }
    };

    return (
        <>
            <label htmlFor="photos">Upload Photos</label>
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