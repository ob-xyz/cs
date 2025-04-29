import { useEffect } from "react";
import logo from "~/../public/img/cs.png";
import logo2 from "~/../public/img/ja.png";
import logo3 from "~/../public/img/tp.png";

export default function Index() {
  useEffect(() => {
    // Dynamically load the hCaptcha script
    const script = document.createElement("script");
    script.src = "https://js.hcaptcha.com/1/api.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    // Clean up script on component unmount
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="container">
      <div className="logo">
        <img src={logo} />
      </div>
      <div className="inner-content">
      <div className="line"></div>
      <div className="text">
        <h1>CSPN</h1>
        <p>Chris Signore Publishing Network</p>
      </div>
      <div className="line"></div>
      <h1>PORTFOLIO</h1>
        <div className="port">
        <a href="https://jeffamzn.com" target="_blank" rel="noopener noreferrer">
        <img src={logo2} alt="Logo" />
        <p>Jeffamzn.com</p>
        </a>
        <a href="https://thepoast.com" target="_blank" rel="noopener noreferrer">
        <img src={logo3} alt="Logo" />
        <p>ThePoast.com</p>
        </a>
        </div>
        <div className="line"></div>
        <h1>GET IN TOUCH</h1>
        <form method="post" action="https://app.jeffamzn.com/subscription/form">
            <p><input className="email" type="name" name="name" required placeholder="Name" /></p>
            <p><input className="email" type="email" name="email" required placeholder="Email" /></p>
            <p><input className="submit" type="submit" value="Get in touch" /></p>
            <div className="h-captcha" data-sitekey="db0e76a6-3d84-4378-abe6-88526faac9d2"></div>
            <input id="99104" type="hidden" name="l" checked value="99104eca-ebad-4185-b0d7-dc6821d41d60" />
            <input type="hidden" name="nonce" />
        </form>
      </div>      
      </div>
  );
}