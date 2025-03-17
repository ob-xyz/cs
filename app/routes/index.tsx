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
         <p>Full Speed, Eh!</p>
         <p>hey! I'm <u>Chris Signore</u>, and I'm moving Full Speed Ahead with the Progressive Conservative Party of Canada 🇨🇦</p>
         <p>The truth is, I'm running to be your PM because Trump joked about the sovereignty of my country, called my Prime Minister a Governor (on the internet of all places), and then added big tariffs to (mostly small) businesses like mine and yours.</p>
         <p>To be fair, Trump only did this after he saw the Liberal Party of Canada allow Bouncy Castles to become a something people inflate on Parliament Hill.</p>
         <p>But now? we gotta unbreak and unite Canada. And, it begins with my "Full Speed, Eh!" plan that does 3 things that sound easy but will take a lotta of work:</p>
          <p>1/ Accelerate Jobs.<br></br>
          2/ Accelerate GDP.<br></br>         
          3/ Accelerate Canada.</p>
        <p>If you're moving full speed ahead like me, consider also subscribing to my free weekly newsletter called The Citizen.</p>
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