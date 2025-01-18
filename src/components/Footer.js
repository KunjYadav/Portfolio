import { FaGithubSquare, FaHome, FaPhone } from 'react-icons/fa';
import './FooterStyles.css';
import { MdEmail } from 'react-icons/md';
import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa6';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-container'>
        <div className='left'>
          <div className='location'>
            <FaHome size={20} style={{ color: '#fff', marginRight: '2rem' }} />
            <div>
              <p>Scheme No 78, Indore</p>
              <p>Madhya Pradesh.</p>
            </div>
          </div>
          <div className='phone'>
            <h4>
              <FaPhone
                size={20}
                style={{ color: '#fff', marginRight: '2rem' }}
              />
              7000584374
            </h4>
          </div>
          <div className='email'>
            <h4>
              <MdEmail
                size={20}
                style={{ color: '#fff', marginRight: '2rem' }}
              />
              kunj.yadav555@gmail.com
            </h4>
          </div>
        </div>
        <div className='right'>
          <h4>About Me</h4>
          <p>
            Passionate Full Stack Web Developer | Crafting Innovative Solutions
            Across Frontend & Backend
          </p>
          <div className='social'>
            <a
              href='https://github.com/KunjYadav'
              target='_blank'
              rel='noreferrer'
            >
              <FaGithubSquare
                size={30}
                style={{ color: '#fff', marginRight: '1rem' }}
              />
            </a>
            <a
              href='https://www.linkedin.com/in/kunj-yadav/'
              target='_blank'
              rel='noreferrer'
            >
              <FaLinkedin
                size={30}
                style={{ color: '#fff', marginRight: '1rem' }}
              />
            </a>
            <a
              href='https://www.facebook.com/kunj.yadav555/'
              target='_blank'
              rel='noreferrer'
            >
              <FaFacebook
                size={30}
                style={{ color: '#fff', marginRight: '1rem' }}
              />
            </a>
            <a
              href='https://x.com/KunjYadavRox'
              target='_blank'
              rel='noreferrer'
            >
              <FaTwitter
                size={30}
                style={{ color: '#fff', marginRight: '1rem' }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
