import React from "react";

import style from "./social-media.module.scss";

const socialMedia = [
  {
    icon: "./social-media-icons/Icon ionic-logo-googleplus.png",
    href: "test",
    bg: "#fcf15c",
    top: "28%",
    right: "20%",
  },
  {
    icon: "./social-media-icons/Icon awesome-linkedin-in.png",
    href: "test",
    bg: "#98baff",
    top: "27%",
    right: "35%",
  },
  {
    icon: "./social-media-icons/Icon feather-twitter.png",
    href: "test",
    bg: "#b0e8fe",
    top: "28%",
    right: "30%",
  },
  {
    icon: "./social-media-icons/Icon feather-youtube.png",
    href: "test",
    bg: "#ff9898",
    top: "30%",
    right: "30%",
  },
  {
    icon: "./social-media-icons/brand.png",
    href: "test",
    bg: "#ffb498",
    top: "27%",
    right: "31%",
  },
  {
    icon: "./social-media-icons/Icon awesome-facebook-f.png",
    href: "test",
    bg: "#98b8d1",
    top: "26%",
    right: "40%",
  },
  {
    icon: "./social-media-icons/Icon simple-instagram.png",
    href: "test",
    bg: "#ff98f8",
    top: "27%",
    right: "35%",
  },
  {
    icon: "./social-media-icons/Icon awesome-telegram-plane.png",
    href: "test",
    bg: "#98d2ff",
    top: "29%",
    right: "36%",
  },
];
const SocialMedia = () => {
  return (
    <div>
      <div className="d-flex mt-5">
        {socialMedia &&
          socialMedia.map((item) => (
            <>
              <div className={style["social"]}>
                <div
                  className={style["social-bg"]}
                  style={{ backgroundColor: `${item.bg}` }}
                />
                <a href={item.href}>
                  <img
                    src={item.icon}
                    className="position-absolute"
                    style={{ top: `${item.top}`, right: `${item.right}` }}
                  />
                </a>
              </div>
            </>
          ))}
      </div>
    </div>
  );
};
export default SocialMedia;
