import React from "react";
import Icon1 from "../../images/car1.jpg";
import Icon2 from "../../images/car2.jpg";
import Icon3 from "../../images/car3.jpg";
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
    <ServicesContainer id="services">
      <ServicesH1>Какие услуги есть на СТО?</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2> Всего 498 грн</ServicesH2>
          <ServicesP>ЗАМЕНА ТОРМОЗНЫХ ДИСКОВ</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2> Всего 498 грн</ServicesH2>
          <ServicesP> ЗАМЕНА ТОРМОЗНЫХ ДИСКОВ</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>Всего 998 грн</ServicesH2>
          <ServicesP>ЗАМЕНА ТОРМОЗНЫХ ДИСКОВ</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2> Всего 498 грн</ServicesH2>
          <ServicesP>ЗАМЕНА ТОРМОЗНЫХ ДИСКОВ</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2> Всего 498 грн</ServicesH2>
          <ServicesP> ЗАМЕНА ТОРМОЗНЫХ ДИСКОВ</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>Всего 998 грн</ServicesH2>
          <ServicesP>ЗАМЕНА ТОРМОЗНЫХ ДИСКОВ</ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
