import React from "react";
import { 
    Banner,
    BannerContent,
    SubtitleText,
    MainText,
 } from "./MainBannerDesign.js";

const MainBanner = () => {
    return (
        <Banner>
        <BannerContent>
          <SubtitleText>No fees.</SubtitleText>
          <SubtitleText>No minimum deposit.</SubtitleText>
          <SubtitleText>Your money is fully secure and protected.</SubtitleText>
          <MainText> Open a account with Argent Bank today! </MainText>
          </BannerContent>
          </Banner>
    );
};

export default MainBanner;