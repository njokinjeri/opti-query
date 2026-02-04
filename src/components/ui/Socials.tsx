import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons'; 
import { faInstagram } from '@fortawesome/free-brands-svg-icons'; 
import { faYoutube } from '@fortawesome/free-brands-svg-icons'; 

export default function Socials() {
    return (
        <div className="flex items-center gap-4 text-white/40 ">
            <FontAwesomeIcon icon={faXTwitter} size="xl" className="hover:text-purple-dark-2 cursor-pointer"/>
            <FontAwesomeIcon icon={faInstagram} size="xl" className="hover:text-purple-dark-2 cursor-pointer"/>
            <FontAwesomeIcon icon={faYoutube} size="xl" className="hover:text-purple-dark-2 cursor-pointer"/>

        </div>
    )
};
