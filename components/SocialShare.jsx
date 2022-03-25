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

const SocialShare = ({ modalRef, close }) => {
  return (
    <div className=" bg-white h-96 w-1/3 mx-auto p-8" ref={modalRef}>
      <div className="flex items-center justify-between">
        <p>Share</p>
        <span onClick={() => close(false)} className="cursor-pointer">
          <img src="/vectors/close-icon.svg" alt="" />
        </span>
      </div>
      <div className="w-full flex flex-wrap items-center gap-4 mt-10">
        <div>
          <FacebookShareButton
            url={"http://www.oladepotimilehinfoundation.org"}
            quote={"CampersTribe - World is yours to explore"}
            hashtag="#camperstribe"
          >
            <FacebookIcon size={46} />
          </FacebookShareButton>
          <p>Facebook</p>
        </div>
        <div>
          <WhatsappShareButton
            url={"http://www.oladepotimilehinfoundation.org"}
          >
            <WhatsappIcon size={46} />
          </WhatsappShareButton>
          <p>Whatsapp</p>
        </div>
        <div>
          <TwitterShareButton url={"http://www.oladepotimilehinfoundation.org"}>
            <TwitterIcon size={46} />
          </TwitterShareButton>
          <p>Twitter</p>
        </div>
        <div>
          <PinterestShareButton
            url={"http://www.oladepotimilehinfoundation.org"}
          >
            <PinterestIcon size={46} />
          </PinterestShareButton>
          <p>Pinterest</p>
        </div>
        <div>
          {" "}
          <LinkedinShareButton
            url={"http://www.oladepotimilehinfoundation.org"}
          >
            <LinkedinIcon size={46} />
          </LinkedinShareButton>
          <p>Linkedin</p>
        </div>
        <div>
          <TelegramShareButton
            url={"http://www.oladepotimilehinfoundation.org"}
          >
            <TelegramIcon size={46} />
          </TelegramShareButton>
          <p>Telegram</p>
        </div>
        <div>
          <EmailShareButton url={"http://www.oladepotimilehinfoundation.org"}>
            <EmailIcon size={46} />
          </EmailShareButton>
          <p>Email</p>
        </div>
        <div>
          <RedditShareButton url={"http://www.oladepotimilehinfoundation.org"}>
            <RedditIcon size={46} />
          </RedditShareButton>
          <p>Reddit</p>
        </div>
      </div>
    </div>
  );
};

export default SocialShare;
