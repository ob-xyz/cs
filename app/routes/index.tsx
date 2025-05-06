import { useEffect } from "react";
import logo from "~/../public/img/cs3.jpeg";
import logo2 from "~/../public/img/ja.png";
import logo3 from "~/../public/img/tp.png";
import logo4 from "~/../public/img/vw.png";
import logox from "~/../public/img/x-logo.png";
import logol from "~/../public/img/l-logo.png";


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
        <h2>I'm Chris Signore. And in 2017 I started a small business that changed mine (and my families life) forever.</h2>
        <h2>Maybe you've heard of the one person billion dollar company?</h2>
        <h2>Well, I'm the guy who's actually doing it.</h2>
        <h2>This year my small business is on track to do over 8-figures of revenue and is still growing like a rocket.</h2>
        <h2>With only one employee — me!!</h2>
      </div>
      <div className="line"></div>
      <h1>GET IN TOUCH</h1>
        <form method="post" action="https://app.jeffamzn.com/subscription/form">
            <p><input className="email" type="name" name="name" required placeholder="First Name *" /></p>
            <p><input className="email" type="email" name="email" required placeholder="Business Email Address *" /></p>
            <p><input className="submit" type="submit" value="Subscribe" /></p>
            <div className="h-captcha" data-sitekey="db0e76a6-3d84-4378-abe6-88526faac9d2"></div>
            <input id="99104" type="hidden" name="l" checked value="99104eca-ebad-4185-b0d7-dc6821d41d60" />
            <input type="hidden" name="nonce" />
        </form>
      <div className="line"></div>
      <h1>PORTFOLIO</h1>
      <h2>CSPN</h2>
        <div className="port">
        <a href="https://jeffamzn.com" target="_blank" rel="noopener noreferrer">
        <img src={logo2} alt="Logo" />
        <p>jeffamzn.com</p>
        </a>
        <a href="https://thepoast.com" target="_blank" rel="noopener noreferrer">
        <img src={logo3} alt="Logo" />
        <p>thepoast.com</p>
        </a>
        </div>
        <div className="port">
        <a href="https://thevalleywag.com" target="_blank" rel="noopener noreferrer">
        <img src={logo4} alt="Logo" />
        <p>thevalleywag.com</p>
        </a>
        </div>
        <div className="line"></div>
      <h1>FOLLOW</h1>
      <h2>BUSINESS</h2>
        <div className="socials">
        <a href="https://x.com/thecspn" target="_blank" rel="noopener noreferrer">
        <img src={logox} alt="Logo" />
        <p>@thecspn</p>
        </a>
        <a href="https://linkedin.com/company/csmchq" target="_blank" rel="noopener noreferrer">
        <img src={logol} alt="Logo" />
        <p>cspnhq</p>
        </a>
        </div>
        <h1>MORE</h1>
        <h2>PERSONAL</h2>
        <div className="socials2">
        <a href="https://x.com/chrissignore" target="_blank" rel="noopener noreferrer">
        <img src={logox} alt="Logo" />
        <p>@chrissignore</p>
        </a>
        <a href="https://linkedin.com/in/chrissignore" target="_blank" rel="noopener noreferrer">
        <img src={logol} alt="Logo" />
        <p>chrissignore</p>
        </a>
        </div>
      </div>      
      </div>
  );
}