import path from "path";
import { writeFile } from "fs/promises";
//import {v2 as cloudinary} from 'cloudinary';


export async function filesystem(file: File, directory: string = '') {
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const filepath = path.join(process.cwd(), `public/${directory}`, file.name);
    writeFile(filepath, buffer);
}


/* cloudinary.config({ 
    cloud_name: process.env.CLOUD_NAME, 
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET,
    secure: true
});
console.log(cloudinary.api.ping());
export async function upload(file: File) {
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes)
    const response = await new Promise((resolve, reject) => {
        cloudinary.uploader.upload_stream({use_filename: true, unique_filename: false, overwrite: true}, (err, result) => {
            err && reject(err);
            resolve(result);
        }).end(buffer)
    });
    console.log(response)
    return response;
} */