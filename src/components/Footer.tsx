import { Instagram, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="site-footer">
            <div className="container site-footer-inner">
                <h2 className="footer-wordmark">The Still Space</h2>

                <div className="footer-divider" />

                <p className="footer-quote">
                    &ldquo;You don&rsquo;t have to arrive with the right words.
                    You can arrive exactly as you are.&rdquo;
                </p>

                <div className="footer-divider" />

                <div className="footer-social">
                    <a
                        href="mailto:thestillspacebyarshita@gmail.com"
                        aria-label="Email us"
                    >
                        <Mail size={18} strokeWidth={1.5} />
                    </a>
                    <a
                        href="https://www.instagram.com/thestillspacebyarshita/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Follow us on Instagram"
                    >
                        <Instagram size={18} strokeWidth={1.5} />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/arshita-sharma-12a0801a9/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Connect on LinkedIn"
                    >
                        <Linkedin size={18} strokeWidth={1.5} />
                    </a>
                </div>

                <div className="footer-bottom">
                    &copy; {new Date().getFullYear()} The Still Space. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;