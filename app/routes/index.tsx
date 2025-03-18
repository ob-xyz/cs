import { useEffect } from "react";
import logo from "~/../public/img/pc.png";

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
      <div className="text">
         <p>Canada's Not Big Enough.</p>
         <p>Hey! I'm <u>Chris Signore</u>, and here's how we're gonna build a Bigger, Better Canada with the Progressive Conservative Party of Canada 🇨🇦</p>
         <p>Recently some guy as old as my Grandpa joked about the sovereignty of my country, called my Prime Minister a Governor (on the internet of all places), questioned an unbreakable treaty from 1908.... then added big tariffs that will impact 400,000 regular everyday Canadians like me and you.</p>
         <p>Right now Canada wants someone who knows how to build a bigger, better something. And the only way I know how to do that is by doing 3 things:</p>
          <p>- bigger, better <u>Jobs</u><br></br>
          - bigger, better <u>GDP</u><br></br>         
          - bigger, better <u>Canada</u><br></br></p>
        <p>Wanna build a bigger, better Canada with me? Begin by joining my weekly newsletter The Citizen.</p>
      </div>
      <form method="post" action="https://app.jeffamzn.com/subscription/form">
          <p><input className="email" type="email" name="email" required placeholder="Email" /></p>
          <p><input className="submit" type="submit" value="Subscribe" /></p>
          <div className="h-captcha" data-sitekey="db0e76a6-3d84-4378-abe6-88526faac9d2"></div>
          <input id="3a575" type="hidden" name="l" checked value="3a575627-dc5a-4d06-b627-05ca13da2e85" />
          <input type="hidden" name="nonce" />
      </form>
      </div>
      </div>
  );
}