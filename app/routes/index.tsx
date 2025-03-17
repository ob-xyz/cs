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
         <p>Unlock & Unite.</p>
         <p>Hey! I'm <u>Chris Signore</u>, and with the Progressive Conservative Party of Canada and we will Unlock & Unite Canada 🇨🇦</p>
         <p>The truth is, I'm running to be your PM because Trump joked about the sovereignty of my country, called my Prime Minister a Governor (on the internet of all places), and then added massive tariffs that are already starting to deeply affect the lives of Canadians like me and you.</p>
         <p>To be fair, Trump only did this after he saw the Liberal Party of Canada—allow Bouncy Castles—to become a thing people inflate on Parliament Hill.</p>
         <p>Right now Canada needs a leader whose flip switch is turned on and engaged with what Canada actually needs to do.</p>
         <p>The way I will do that is by Unlocking and Uniting Canada like nobody has ever done before:</p>
          <p>- unlock <u>Jobs</u><br></br>
          - unlock <u>GDP</u><br></br>         
          - unlock <u>Canada</u><br></br>
          - Unite <u>Canadians</u></p>
        <p>If you wanna unlock and unite Canada with me, or just learn a bit more before getting involved, my free weekly newsletter The Citizen is the <u>best</u> way to do that.</p>
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