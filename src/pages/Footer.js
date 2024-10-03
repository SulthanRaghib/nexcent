import React from "react";
import LogoFooter from "../assets/img/logo-footer.png";
import P36 from "../components/Paragraph";
import ImgSosmedIG from "../assets/img/sosmed-ig.png";
import ImgSosmedBrowser from "../assets/img/sosmed-browser.png";
import ImgSosmedTwitter from "../assets/img/sosmed-twitter.png";
import ImgSosmedYT from "../assets/img/sosmed-youtube.png";

const Footer = () => {
  return (
    <div className="bg-black">
      <div className="container">
        <div className="footer">
          <div className="footer-1">
            <img className="logo-footer" src={LogoFooter} alt="logo-footer" />
            <P36
              textTitle={<>Copyright &copy; 2020 Nexcent ltd.</>}
              textWeight={"400"}
              textSize={"14px"}
              textColor={"#F5F7FA"}
            />
            <P36
              textTitle={"All rights reserved"}
              textWeight={"400"}
              textSize={"14px"}
              textColor={"#F5F7FA"}
            />
            <div className="sosmed">
              <img src={ImgSosmedIG} alt="sosmed-ig" />
              <img src={ImgSosmedBrowser} alt="sosmed-browser" />
              <img src={ImgSosmedTwitter} alt="sosmed-twitter" />
              <img src={ImgSosmedYT} alt="sosmed-yt" />
            </div>
          </div>
          <div className="footer-2">
            <P36
              textTitle={"Company"}
              textWeight={"600"}
              textSize={"20px"}
              textColor={"#FFFFFF"}
              style={{ marginBottom: "10px" }}
            />
            <P36
              textTitle={"About us"}
              textWeight={"400"}
              textSize={"14px"}
              textColor={"#F5F7FA"}
            />
            <P36
              textTitle={"Blog"}
              textWeight={"400"}
              textSize={"14px"}
              textColor={"#F5F7FA"}
            />
            <P36
              textTitle={"Contact us"}
              textWeight={"400"}
              textSize={"14px"}
              textColor={"#F5F7FA"}
            />
            <P36
              textTitle={"Pricing"}
              textWeight={"400"}
              textSize={"14px"}
              textColor={"#F5F7FA"}
            />
            <P36
              textTitle={"Testimonials"}
              textWeight={"400"}
              textSize={"14px"}
              textColor={"#F5F7FA"}
            />
          </div>
          <div className="footer-2">
            <P36
              textTitle={"Support"}
              textWeight={"600"}
              textSize={"20px"}
              textColor={"#FFFFFF"}
              style={{ marginBottom: "10px" }}
            />
            <P36
              textTitle={"Help center"}
              textWeight={"400"}
              textSize={"14px"}
              textColor={"#F5F7FA"}
            />
            <P36
              textTitle={"Terms of service"}
              textWeight={"400"}
              textSize={"14px"}
              textColor={"#F5F7FA"}
            />
            <P36
              textTitle={"Legal"}
              textWeight={"400"}
              textSize={"14px"}
              textColor={"#F5F7FA"}
            />
            <P36
              textTitle={"Privacy policy"}
              textWeight={"400"}
              textSize={"14px"}
              textColor={"#F5F7FA"}
            />
            <P36
              textTitle={"Status"}
              textWeight={"400"}
              textSize={"14px"}
              textColor={"#F5F7FA"}
            />
          </div>
          <div className="footer-4">
            <P36
              textTitle={"Stay up to date"}
              textWeight={"600"}
              textSize={"20px"}
              textColor={"#FFFFFF"}
              style={{ marginBottom: "20px" }}
            />

            <div className="input">
              <div className="flex-input">
                <P36
                  textTitle={"Your email address"}
                  textColor={"#D9DBE1"}
                  textSize={"14px"}
                  textWeight={"400"}
                />
                <i class="bi bi-send sending"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
