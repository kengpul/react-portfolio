import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase/config';

import './Project.css'

export default function Projects() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        (async function () {
            const projectObjects = []
            const data = await getDocs(collection(db, 'projects'));
            data.forEach((doc) => {
                projectObjects.push({ id: doc.id, ...doc.data() });
            })
            setProjects(projectObjects);
        })();
    }, [])

    return (
        <div className="container project">
            <div className="mb-5 text-start">
                <h2 className="display-4">PORTFOLIO</h2>
                <p className="text-muted">\\ Projects</p>
                <p className="text-muted">\\ Bootstrap, Javascript, NodeJs, ExpressJs, MondgoDB</p>
            </div>

            <div className="row box-container g-4 text-center text-md-start">
                {projects.length === 0 ? <p className='vh-100 display-4 text-center'>Fetching projects...</p> : ''}
                {projects && projects.map((project) => (
                    <div className="col-md-6" key={project.id}>
                        <div className="box">
                            <img className="img-fluid img-preview"
                                src={project.photoUrl}
                                alt="" />

                            <button type="button" className="btn" data-bs-toggle="modal" data-bs-target={`#${project.id}`}>
                                <i className="fas fa-eye"></i> VIEW PROJECT
                            </button>

                            <div className="modal fade" id={project.id} data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1"
                                aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                <div className="modal-dialog modal-dialog-centered modal-lg">
                                    <div className="modal-content">
                                        <div className="modal-body">
                                            <div className="container-fluid">
                                                <div className="row">
                                                    <div className="col-md-7 img-modal">
                                                        <img
                                                            src={project.photoUrl}
                                                            className="img-fluid" alt="" />
                                                    </div>
                                                    <div className="col-md-5">
                                                        <h3 className="mt-3">{project.title}</h3>
                                                        <div className="modal-tags">
                                                            {project.tags.map(tag => (
                                                                <span key={tag}>{tag}</span>
                                                            ))}
                                                        </div>

                                                        <h5>About</h5>

                                                        <div className="modal-about">
                                                            <p>{project.about}</p>
                                                        </div>

                                                        <a href={project.demo} className="modal-btn" target="_blank" rel='noreferrer'>
                                                            <i className="fas fa-eye"></i> DEMO
                                                        </a>

                                                        <a href={project.code} target=" _blank" className="modal-btn" rel='noreferrer'>
                                                            <i className="fas fa-code"></i> CODE
                                                        </a>

                                                        <button type="button" className="btn-close border border-4 border-dark" data-bs-dismiss="modal" aria-label="Close"></button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    )
}
