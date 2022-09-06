import { useState } from 'react';
import { useStorage } from '../../hooks/useStorage';

export default function Admin() {
    const [title, setTitle] = useState('');
    const [tags, setTags] = useState('');
    const [about, setAbout] = useState('');
    const [demo, setDemo] = useState('');
    const [code, setCode] = useState('');
    const [image, setImage] = useState();

    const { upload } = useStorage();

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log({ title, tags, about, demo, code, image });
        upload(image)
    }

    return (
        <div className="container admin text-dark">
            <div className="row d-flex justify-content-center">
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
                        <div>
                            <input
                                className="form-control"
                                type="file"
                                id="formFile"
                                onChange={e => setImage(e.target.files[0])}
                            />
                            <label htmlFor="formFile" className="form-label">Default file input example</label>
                        </div>
                        <button className="btn btn-success w-100 mb-5">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
