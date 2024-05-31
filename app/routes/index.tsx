import logo from "~/../public/img/ja.png";

export default function Index() {
  return (
    <div className="container">
      <div className="inner-content">
      <a className="none" href="https://app.jeffamzn.com/subscription/form"><img src={logo} /></a>
      <a href="https://app.jeffamzn.com/subscription/form">Subscribe</a>
      <div className="terms">
          <p>This site is protected by hCAPTCHA and the Google <a target="_blank" href="https://policies.google.com/privacy?hl=en-US">Privacy Policy</a> and <a target="_blank"  href="https://policies.google.com/terms?hl=en-US">Terms of Service</a> apply.</p>
      </div>
      </div>
    </div>
  );
}