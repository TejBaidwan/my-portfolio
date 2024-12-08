"use client"
import { faGithub, faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

/*
  This is the content found in the Footer which is used in each page
  It has a copyright notice, a few links to 3rd-party assets used in the website, and a few icons acting as links to certain social media pages of mine
 */
const Footer = () => {
  return (
    <footer className="bg-[#222222] text-white">
      <div className="max-w-7xl mx-auto flex justify-between items-center">

        {/* Copyright and License/Attribution section */}
        <div>
          <p className="text-base">
            © 2024 Tej Baidwan. All rights reserved.
          </p>
          <p className="text-sm mt-1">
            Icons from {" "}
            <a
              href="https://fontawesome.com"
              target="_blank"
              className="text-red-500 hover:underline"
            >
              Font Awesome {" "}
            </a>
            by Dave Gandy {" "}
            <a
              href="https://creativecommons.org/licenses/by/4.0/"
              target="_blank"
              className="text-red-500 hover:underline"
            >
              CC 4.0
            </a>
          </p>
          <p className="text-sm mt-1">
          {" "}
          <a
            href="https://www.npmjs.com/package/react-type-animation"
            target="_blank"
            className="text-red-500 hover:underline"
          >
            react-type-animation
          </a>
          {" "} by
          <a
            href="https://github.com/maxeth/react-type-animation"
            target="_blank"
            className="text-red-500 hover:underline"
          >
            {" "} maxeth 
          </a>
          {" "} licensed {" "}
          <a
            href="https://opensource.org/license/mit"
            target="_blank"
            className="text-red-500 hover:underline"
          >
            MIT
          </a>
          </p>
        </div>

        {/* Social Media Icons */}
        <div className="flex gap-4">
          <a
            href="https://www.instagram.com/tejs.baid/"
            target="_blank"
            className="text-[#FF0000] hover:text-[#840808]"
          >
            <FontAwesomeIcon icon={faInstagram} size="lg" />
          </a>
          <a
            href="https://www.facebook.com/tejvir.baidwan.3/"
            target="_blank"
            className="text-[#FF0000] hover:text-[#840808]"
          >
            <FontAwesomeIcon icon={faFacebook} size="lg" />
          </a>
          <a
            href="https://github.com/TejBaidwan"
            target="_blank"
            className="text-[#FF0000] hover:text-[#840808]"
          >
            <FontAwesomeIcon icon={faGithub} size="lg" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
