import { FaLinkedin, FaGithub, FaEnvelope, FaIdBadge } from 'react-icons/fa';
import './Links.css';

export default function Links() {
    return (
        <div id="links">
            <a type="button" id="linkedin" className="btn text-white" href="https://www.linkedin.com/in/kingpaulpulgares/"
                target="_blank" rel="noreferrer">
                LINKEDIN<FaLinkedin className='ms-3' />
            </a>
            <a type="button" id="github" className="btn text-white" href="https://github.com/Kengpul"
                target="_blank" rel="noreferrer">
                &nbsp;&nbsp;&nbsp;GITHUB <FaGithub className='ms-3' />
            </a>
            <a type="button" id="email" className="btn text-white" href="mailto:paulpulgares24@gmail.com"
                target="_blank" rel="noreferrer">
                &nbsp;&nbsp;&nbsp;&nbsp; EMAIL <FaEnvelope className='ms-3' />
            </a>
            <a type="button" id="resume" className="btn text-white"
                href="https://drive.google.com/file/d/1Td6ZeOh4jHSr69UQKWCzUKFBaNPYLNgt/view"
                target="_blank" rel="noreferrer">
                RESUME <FaIdBadge className='ms-3' />
            </a>
        </div>
    )
}
