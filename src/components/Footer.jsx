import email_img from "../../icons/email.svg";
import linkedin_img from "../../icons/linked_in.svg";
import github_img from "../../icons/github.svg";
import researchgate_img from "../../icons/research_gate.svg";

function Footer() {
  return (
    <>
      <footer>
        <div className="footer_container">
          <div className="footer_text">
            Contact<span className="info_text"> information</span>:
          </div>
          <div className="footer_contact_icons">
            <a href="mailto:admin@alvio.org" target="_blank">
              <img src={email_img} alt="Email" className="email_icon" />
            </a>

            <a href="https://www.linkedin.com" target="_blank">
              <img
                src={linkedin_img}
                alt="LinkedIn"
                className="linkedin_icon"
              />
            </a>

            <a href="https://github.com" target="_blank">
              <img src={github_img} alt="GitHub" className="github_icon" />
            </a>

            <a href="https://www.researchgate.net" target="_blank">
              <img
                src={researchgate_img}
                alt="ResearchGate"
                className="researchgate_icon"
              />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
