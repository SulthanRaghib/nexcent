import React from "react";
import P36 from "../components/Paragraph";
import ImgMarketing1 from "../assets/img/marketing-1.png";
import ImgMarketing2 from "../assets/img/marketing-2.png";
import ImgMarketing3 from "../assets/img/marketing-3.png";
import MarketingCard from "../components/MarketingCard";

const Marketing = () => {
  return (
    <div className="container">
      <div className="mb-60">
        <div className="marketing">
          <div className="marketing-top">
            <P36
              textTitle={"Caring is the new marketing"}
              textColor={"#4D4D4D"}
              textSize={"36px"}
              textWeight={"600"}
            />
            <P36
              textTitle={`The Nexcent blog is the best place to read about the latest membership insights, 
                trends and more. See who's joining the community, read about how our community are 
                increasing their membership income and lot's more.​`}
              textColor={"#717171"}
              textSize={"16px"}
              textWeight={"400"}
              centerText={true}
            />
          </div>
        </div>
        <div className="marketing-bottom">
          <MarketingCard
            cardImg={ImgMarketing1}
            pTitle={"Creating Streamlined Safeguarding Processes with OneRen"}
            pColor={"#717171"}
            pWeight={"600"}
            pSize={"20px"}
            pCenterText={true}
            bText={"Readmore"}
            bColor={"#4CAF4F"}
            bBg={"#F5F7FA"}
            bTextSize={"20px"}
            bTextWeight={"600"}
            bShowIcon={true}
            bIcon={<i class="bi bi-arrow-right"></i>}
          />
          <MarketingCard
            cardImg={ImgMarketing2}
            pTitle={
              "What are your safeguarding responsibilities and how can you manage them?"
            }
            pColor={"#717171"}
            pWeight={"600"}
            pSize={"20px"}
            pCenterText={true}
            bText={"Readmore"}
            bColor={"#4CAF4F"}
            bBg={"#F5F7FA"}
            bTextSize={"20px"}
            bTextWeight={"600"}
            bShowIcon={true}
            bIcon={<i class="bi bi-arrow-right"></i>}
          />
          <MarketingCard
            cardImg={ImgMarketing3}
            pTitle={
              <>
                Revamping the Membership Model with Triathlon <br /> Australia
              </>
            }
            pColor={"#717171"}
            pWeight={"600"}
            pSize={"20px"}
            pCenterText={true}
            bText={"Readmore"}
            bColor={"#4CAF4F"}
            bBg={"#F5F7FA"}
            bTextSize={"20px"}
            bTextWeight={"600"}
            bShowIcon={true}
            bIcon={<i class="bi bi-arrow-right"></i>}
          />
        </div>
      </div>
    </div>
  );
};

export default Marketing;
