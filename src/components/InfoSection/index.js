import React from "react";

import { Button } from "../ButtonElement";
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  TextWrapper,
  Topline,
  Heading,
  Subtitle,
  BtnWrap,
  Column2,
  ImgWrap,
  Img,
  Phone,
} from "./InfoElements";
const InfoSection = ({
  id,
  lightBg,
  imgStart,
  lightText,
  darkText,
  buttonlabel,
  img,
  alt,
  topLine,
  headline,
  description,
  primary,
  dark,
  dark2,
  mes,
  viber,
  adress,
}) => {
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <Phone>{adress}</Phone>
                <Topline>{topLine}</Topline>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle darkText={darkText}>
                  <div style={{ display: "flex" }}>
                    {viber && (
                      <img
                        style={{ marginRight: "10px" }}
                        width="50"
                        src={viber}
                        alt="viber"
                      />
                    )}
                    {/* <Phone>{mes}</Phone> */}

                    <h3 style={{ borderBottom: "1px solid red" }}>
                      {description}
                    </h3>
                  </div>
                </Subtitle>
                <BtnWrap>
                  <Button
                    to="contact"
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-80}
                    primary={primary ? 1 : 0}
                    dark={dark ? 1 : 0}
                    dark2={dark2 ? 1 : 0}
                  >
                    {buttonlabel}
                  </Button>
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={img} alt={alt} />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoSection;
