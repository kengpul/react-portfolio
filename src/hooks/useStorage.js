import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { storage } from '../firebase/config';

export function useStorage() {
    const upload = async (image) => {
        const storageRef = ref(storage, `images/${image.name}`);
        const uploaded = await uploadBytes(storageRef, image);
        const url = await getDownloadURL(ref(storage, uploaded.metadata.fullPath));
        console.log(uploaded)
        console.log(url)
    }

    return { upload }
}
