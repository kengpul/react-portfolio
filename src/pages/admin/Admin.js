import { useState } from 'react';
import { useFirebase } from '../../hooks/useFirebase';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useAuthContext } from '../../hooks/useAuthContext';

export default function Admin() {
    const [title, setTitle] = useState('');
    const [tags, setTags] = useState('');
    const [about, setAbout] = useState('');
    const [demo, setDemo] = useState('');
    const [code, setCode] = useState('');
    const [image, setImage] = useState();

    const { addCollection, error, isPending } = useFirebase();
    const { user, dispatch } = useAuthContext();

    const handleSubmit = async (e) => {
        e.preventDefault();
        addCollection({ title, tags, about, demo, code, image });
        setTitle('');
        setTags('');
        setAbout('');
        setDemo('');
        setCode('');
        setImage(null);
    }


    const handleSignin = () => {
        const provider = new GoogleAuthProvider();
        const auth = getAuth();
        signInWithPopup(auth, provider)
            .then((result) => {
                const googleUser = result.user;
                dispatch({ type: 'LOGIN', payload: googleUser })

            }).catch((error) => {
                console.log(error)
                throw Error(error);
            });
    }

    const handleLogout = () => {
        dispatch({ type: 'LOGOUT' });
    }

    return (
        <div className="container admin text-dark">

            <div className="row d-flex justify-content-center">
                {!user && <div className='vh-100 text-white text-center d-flex align-items-center justify-content-center'>
                    <button onClick={handleSignin} className="btn btn-lg btn-success">Sign in</button>
                </div>}

                {user && user.email === 'paulpulgares24@gmail.com' &&
                    <div className="col-md-7">

                        <h2 className='text-white text-center mb-3'>Upload Project</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="form-floating mb-3">
                                <input
                                    type="text"
                                    className='form-control'
                                    name='title' id='title'
                                    placeholder='Title'
                                    value={title}
                                    onChange={e => setTitle(e.target.value)}
                                />
                                <label htmlFor="title">Title: </label>
                            </div>
                            <div className="form-floating mb-3">
                                <input
                                    type="text"
                                    className='form-control'
                                    name='tags' id='tags'
                                    placeholder='Tags'
                                    value={tags}
                                    onChange={e => setTags(e.target.value)}
                                />
                                <label htmlFor="tags">Tags: </label>
                            </div>
                            <textarea
                                name="about"
                                className='form-control'
                                rows="4"
                                id="about"
                                placeholder='About'
                                value={about}
                                onChange={e => setAbout(e.target.value)}
                            ></textarea>
                            <div className="form-floating my-3">
                                <input
                                    type="text"
                                    className='form-control'
                                    name='demo' id='demo'
                                    placeholder='Demo'
                                    value={demo}
                                    onChange={e => setDemo(e.target.value)}
                                />
                                <label htmlFor="demo">Demo link: </label>
                            </div>
                            <div className="form-floating my-3">
                                <input
                                    type="text"
                                    className='form-control'
                                    name='code' id='code'
                                    placeholder='Code'
                                    value={code}
                                    onChange={e => setCode(e.target.value)}
                                />
                                <label htmlFor="code">Code link: </label>
                            </div>
                            <div className='mb-3'>
                                <input
                                    className="form-control"
                                    type="file"
                                    id="formFile"
                                    onChange={e => setImage(e.target.files[0])}
                                />
                            </div>

                            {error && <p className='text-danger'>{error}</p>}
                            {isPending ?
                                <button className="btn btn-success w-100 mb-5" disabled>Loading...</button> :
                                <button className="btn btn-success w-100 mb-5">Submit</button>
                            }
                        </form>
                        <button className='btn btn-danger w-100 mb-3' onClick={handleLogout}>Log out</button>
                    </div>
                }

                {user && user.email !== 'paulpulgares24@gmail.com' &&
                    <div className='vh-100 text-white text-center d-flex align-items-center justify-content-center'>
                        <p>Hi {user.displayName}!</p>
                    </div>
                }

            </div>
        </div>
    )
}
