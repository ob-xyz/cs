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
         <p>Bigger, Better, Eh.</p>
         <p>Hey! I'm <u>Chris Signore</u>, and between me and you, Canada's not big enough. So I'm building a Bigger, Better Canada with the Progressive Conservative Party of Canada 🇨🇦</p>
         <p>Look, I don't know if you know this, but recently Trump threatened the sovereignty of my country, called my Prime Minister a Governor (on the internet of all places), then questioned an unbreakable treaty from 1908.... before proceeding to add <u>big</u> tariffs that have already begun impacting the lives of 400,000 regular everyday working Canadians.</p>
         <p>If you love Canada, you should join me to build Bigger, Better, Eh. My 3 step plan to a bigger, better Canada:</p>
          <p>- bigger, better <u>Jobs</u><br></br>
          - bigger, better <u>GDP</u><br></br>         
          - bigger, better <u>Canada</u><br></br></p>
        <p>Wanna build a bigger, better Canada with me? Join my weekly newsletter The Citizen (and it's pretty good, and free).</p>
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