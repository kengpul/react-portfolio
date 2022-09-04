import { FaLinkedin, FaGithub, FaEnvelope, FaIdBadge } from 'react-icons/fa';
import './Links.css';

export default function Links() {
    return (
        <div id="links">
            <a type="button" id="linkedin" class="btn text-white" href="https://www.linkedin.com/in/kingpaulpulgares/"
                target="_blank" rel="noreferrer">
                LINKEDIN<FaLinkedin className='ms-3' />
            </a>
            <a type="button" id="github" class="btn text-white" href="https://github.com/Kengpul"
                target="_blank" rel="noreferrer">
                &nbsp;&nbsp;&nbsp;GITHUB <FaGithub className='ms-3' />
            </a>
            <a type="button" id="email" class="btn text-white" href="mailto:paulpulgares24#gmail.com"
                target="_blank" rel="noreferrer">
                &nbsp;&nbsp;&nbsp;&nbsp; EMAIL <FaEnvelope className='ms-3' />
            </a>
            <a type="button" id="resume" class="btn text-white"
                href="https://drive.google.com/file/d/1v6cheSRU18nMKBW0Um_32eHDKTEGW6_e/view"
                target="_blank" rel="noreferrer">
                RESUME <FaIdBadge className='ms-3' />
            </a>
        </div>
    )
}
