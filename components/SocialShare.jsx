import React from "react";
import {
  FacebookShareButton,
  GooglePlusShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  TelegramShareButton,
  WhatsappShareButton,
  PinterestShareButton,
  VKShareButton,
  OKShareButton,
  RedditShareButton,
  TumblrShareButton,
  LivejournalShareButton,
  MailruShareButton,
  ViberShareButton,
  WorkplaceShareButton,
  LineShareButton,
  EmailShareButton,
  FacebookIcon,
  TwitterIcon,
  TelegramIcon,
  WhatsappIcon,
  GooglePlusIcon,
  LinkedinIcon,
  PinterestIcon,
  VKIcon,
  OKIcon,
  RedditIcon,
  TumblrIcon,
  LivejournalIcon,
  MailruIcon,
  ViberIcon,
  WorkplaceIcon,
  EmailIcon,
} from "react-share";

const SocialShare = ({ modalRef }) => {
  return (
    <div
      className=" bg-white h-96 w-1/3 mx-auto flex items-center gap-x-4 justify-center"
      ref={modalRef}
    >
      <FacebookShareButton
        url={"http://www.oladepotimilehinfoundation.org"}
        quote={"CampersTribe - World is yours to explore"}
        hashtag="#camperstribe"
      >
        <FacebookIcon size={46} />
      </FacebookShareButton>
      <WhatsappShareButton url={"http://www.oladepotimilehinfoundation.org"}>
        <WhatsappIcon size={46} />
      </WhatsappShareButton>
      <TwitterShareButton url={"http://www.oladepotimilehinfoundation.org"}>
        <TwitterIcon size={46} />
      </TwitterShareButton>
      <PinterestShareButton url={"http://www.oladepotimilehinfoundation.org"}>
        <PinterestIcon size={46} />
      </PinterestShareButton>
      <LinkedinShareButton url={"http://www.oladepotimilehinfoundation.org"}>
        <LinkedinIcon size={46} />
      </LinkedinShareButton>
      <TelegramShareButton url={"http://www.oladepotimilehinfoundation.org"}>
        <TelegramIcon size={46} />
      </TelegramShareButton>
      <EmailShareButton url={"http://www.oladepotimilehinfoundation.org"}>
        <EmailIcon size={46} />
      </EmailShareButton>
      <RedditShareButton url={"http://www.oladepotimilehinfoundation.org"}>
        <RedditIcon size={46} />
      </RedditShareButton>
    </div>
  );
};

export default SocialShare;
