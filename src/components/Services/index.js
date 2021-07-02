import React from "react";
import Icon1 from "../../images/car1.jpg";
import Icon2 from "../../images/car2.jpg";
import Icon3 from "../../images/car3.jpg";
import Icon4 from "../../images/teh2.jpg";
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP,
} from "./ServicesElements";
const Services = () => {
  return (
    <ServicesContainer id="Services">
      <ServicesH1> услуги </ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2> </ServicesH2>
          <ServicesP>Ремонт двигателя</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2> </ServicesH2>
          <ServicesP>Ремонт ходовой</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2></ServicesH2>
          <ServicesP>Рихтовка Покраска</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon4} />
          <ServicesH2> </ServicesH2>
          <ServicesP>Ремонт мопедов</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon4} />
          <ServicesH2> </ServicesH2>
          <ServicesP>Ремонт мотоциклов</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2></ServicesH2>
          <ServicesP>шиномонтаж</ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
