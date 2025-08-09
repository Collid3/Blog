import React from "react";

const ShareButtons = ({ assets }) => {
  return (
    <div className="my-16 max-w-3xl mx-auto">
      <p className="font-semibold my-4">Share this article on social media</p>

      <div className="flex gap-1">
        <img src={assets.facebook_icon} width={50} alt="facebook-icon" />
        <img src={assets.twitter_icon} width={50} alt="twitter-icon" />
        <img src={assets.googleplus_icon} width={50} alt="google-icon" />
      </div>
    </div>
  );
};

export default ShareButtons;
