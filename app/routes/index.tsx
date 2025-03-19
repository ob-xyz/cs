import { useEffect } from "react";
import logo from "~/../public/img/cs1.png";

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
      <p>Stop the Psyop.</p>
      <p>Canada has the greatest citizens in the world, but under Liberal leadership, you'd never know it. Well folks, today we're stopping the psyop.</p>
      <p>I'm <u>Chris Signore</u> with the Progressive Conservative Party of Canada, and my new newsletter <u>The Citizen</u> reports on the political business of Parliament Hill, and brings together proud Canadians who also wanna stop the psyop and make Canada the greatest country in the world.</p>
      <p>Begin to stop the government psyop by reading free newsletter, we're already 12,000 strong.</p>
      <form method="post" action="https://app.jeffamzn.com/subscription/form">
          <p><input className="email" type="email" name="email" required placeholder="Email" /></p>
          <p><input className="submit" type="submit" value="Get access" /></p>
          <div className="h-captcha" data-sitekey="db0e76a6-3d84-4378-abe6-88526faac9d2"></div>
          <input id="3a575" type="hidden" name="l" checked value="3a575627-dc5a-4d06-b627-05ca13da2e85" />
          <input type="hidden" name="nonce" />
      </form>
      </div>
      </div>
  );
}