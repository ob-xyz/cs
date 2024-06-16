import logo from "~/../public/img/cs.png";
import logo2 from "~/../public/img/me.png";

export default function Index() {
  return (
    <div className="container">
      <nav>      
        <img src={logo2} />
      </nav>
      <div className="inner-content">
      <div className="outer-hey">
        <p className="hey">Hey, I'm Chris...</p>
      </div>
        <a className="none" href="https://app.jeffamzn.com/subscription/form"><img src={logo} /></a>
        <a href="https://app.jeffamzn.com/subscription/form">Subscribe</a>
      <div className="terms">
          <p>This site is protected by hCAPTCHA and the X <a target="_blank" href="https://x.com/en/privacy">Privacy Policy</a> and <a target="_blank"  href="https://x.com/en/tos">Terms of Service</a> apply.</p>
      </div>
      </div>
    </div>
  );
}