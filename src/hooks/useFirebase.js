import { useState } from 'react';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { collection, addDoc } from 'firebase/firestore';
import { storage, db } from '../firebase/config';

export function useFirebase() {
    const [error, setError] = useState(null);
    const [isPending, setisPending] = useState(false);

    const addCollection = async ({ title, tags, about, demo, code, image }) => {
        setError(false);
        setisPending(true);
        const storageRef = ref(storage, `images/${image.name}`);
        const uploaded = await uploadBytes(storageRef, image);
        const url = await getDownloadURL(ref(storage, uploaded.metadata.fullPath));

        try {
            await addDoc(collection(db, 'projects'), {
                title,
                tags: tags.split(','),
                about,
                demo,
                code,
                photoUrl: url
            })
            setisPending(false);
            setError(null);
        } catch (e) {
            setError('Error adding document', e);
            setisPending(false);
        }
    }

    return { addCollection, error, isPending }
}
