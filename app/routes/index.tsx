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
        <h1>CHRIS SIGNORE</h1>
        <h2>PRODUCT OF THE INTERNET SINCE WINDOWS 95</h2>
        <p>I’m Chris Signore — small business owner, hobby software developer, and the guy who writes Jeffamzn... plus a few other things.</p>
        <p>Back in 2017, I started my first small business, and it changed my life.</p>
        <p>At the time? i had no clue what to do. Zero connections in media. And nothing but product ideas, internet, and a busted Macbook Pro I thrifted off eBay with my last $500.</p>
        <p>For years I chased bad ideas, spinning my tires. Almost burning them out. But the moment I focused on the <i>right</i> idea with the <i>right</i> strategy — everything changed. That's when my first small business finally started to take off.</p>
        <p>Today? with only one employee, Jeffamzn is on track to do over 7-figures of revenue.</p>
        <p>But the truth is — I got lucky. Because at the time I had no idea that email (yes, email) is one of the best ways to talk to curious people like me and you.</p>
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
      <h2>SIGNORE INC.</h2>
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
        <div className="line"></div>
      <h1>FOLLOW</h1>
      <h2>BUSINESS</h2>
        <div className="socials">
        <a href="https://x.com/signoreinc" target="_blank" rel="noopener noreferrer">
        <img src={logox} alt="Logo" />
        <p>@signoreinc</p>
        </a>
        <a href="https://linkedin.com/company/csmchq" target="_blank" rel="noopener noreferrer">
        <img src={logol} alt="Logo" />
        <p>signoreinc</p>
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