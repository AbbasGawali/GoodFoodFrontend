import { faFacebook, faInstagram, faLinkedin, faPinterest, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
 

const Footer = () => {
  return (
    <div className="bg-[#f0f0f5] py-8 px-8">
      <div className="flex gap-4 items-center py-8 justify-center">
        <h1 className="text-xl font-bold">
          For better experience,download the Good Food app now
        </h1>
        <div className="flex gap-2">
          <img
            className="w-36"
            src="/images/play_store.avif"
            alt="Play store"
          />
          <img className="w-36" src="/images/app_store.avif" alt="App store" />
        </div>
      </div>

      <div className="footerLinks flex py-4 justify-between">
        <div className="logo">
          <div className="logo flex  items-center cursor-pointer">
            <img className="w-14" src="/images/logo.jpg" alt="" />
            <h2 className="font-bold text-xl bg-white py-2 pr-2">Good Food</h2>
          </div>
        </div>
        <div className="company">
          <h2 className="font-bold text-xl">Company</h2>
          <ul className="flex pt-4 flex-col gap-2">
            <li>About Us</li>
            <li>Good Food Corporate</li>
            <li>Careers</li>
            <li>Team</li>
            <li>Good Food One</li>
            <li>Good Food Instamart</li>
            <li>Good Food Dineout</li>
            <li>Good Food Genie</li>
          </ul>
        </div>
        <div className="Contact Us">
          <div className="">
            <h2 className="font-bold text-xl">Contact Us</h2>
            <ul className="flex pt-4 flex-col gap-2">
              <li>Help & Support</li>
              <li>Partner with us</li>
              <li>Ride with us</li>
            </ul>
          </div>
          <div className="py-4">
            <h2 className="font-bold text-xl">Legal</h2>
            <ul className="flex pt-4 flex-col gap-2">
              <li>Ride with us</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
              <li>Cookie Policy</li>
              <li>Investor Relations</li>
            </ul>
          </div>
        </div>
        <div className="available">
          <h2 className="font-bold text-xl">Available in:</h2>
          <ul className="flex pt-4 flex-col gap-2">
            <li>Bangalore</li>
            <li>Gurgaon</li>
            <li>Hyderabad</li>
            <li>Delhi</li>
            <li>Mumbai</li>
            <li>Pune</li>
          </ul>
        </div>
        <div className="life">
          <div className="">
            <h2 className="font-bold text-xl">Life at Good Food</h2>
            <ul className="flex pt-4 flex-col gap-2">
              <li>Explore with Good Food</li>
              <li>Good Food News</li>
              <li>Snackables</li>
            </ul>
          </div>
          <div className="py-4 social-links ">
            <h2 className="font-bold text-xl">Social Links</h2>
            <ul className="flex pt-4   gap-4">
              <li>
                <FontAwesomeIcon icon={faLinkedin} />
              </li>
              <li>
                <FontAwesomeIcon icon={faInstagram} />
              </li>
              <li>
                <FontAwesomeIcon icon={faTwitter} />
              </li>
              <li>
                <FontAwesomeIcon icon={faFacebook} />
              </li>
              <li>
                <FontAwesomeIcon icon={faPinterest} />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
