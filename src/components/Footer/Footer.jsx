import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-dark p-5 mt-5 "id='contact'>
      <div className="container text-center mt-5">
        <p className="mb-2">&copy; {year} Rosane Sales. Todos os direitos reservados.</p>

        <div className="d-flex justify-content-center gap-4 fs-4">
          <a href="https://github.com/MarcussPablo" target="_blank" rel="noopener noreferrer" className="" style={{color:'rgb(253, 56, 137)'}}>
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/marcus-lins-83216a313/" target="_blank" rel="noopener noreferrer" style={{color:'rgb(253, 56, 137)'}}>
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
}
