import image1 from "../../images/car1.jpg";
import image2 from "../../images/car2.jpg";
import image3 from "../../images/car3.jpg";
import googleMap from "../../images/googleMap.png";
import viber from "../../images/viber.svg";
export const homeObjOne = {
  id: "garanty",
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: "100% Гарантия",
  headline:
    "Предоставляем гарантию на запчастu и выполненный ремонт авто на СТО.",
  description: "----",
  buttonlabel: " Запишитесь",
  imgStart: false,
  img: image1,
  alt: "car",
  dark: true,
  primary: true,
  darkText: false,
};
export const homeObjTwo = {
  id: "cont",
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: "Не обязываем к ремонту",
  headline:
    "После консультации, вы не обязаны выполнять ремонт авто на нашей станции.",
  description: "----",
  buttonlabel: "обратный звонок ",
  imgStart: true,
  img: image2,
  alt: "piggi",
  dark: false,
  primary: false,
  darkText: true,
};
export const homeObjthree = {
  id: "contact",
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: "контакты",
  headline: " 098-644-00-40",
  mes: "viber",
  description: " 098-644-00-40 ",
  buttonlabel: " обратный звонок",
  imgStart: false,
  img: googleMap,
  alt: "car",
  dark: true,
  primary: true,
  darkText: false,
  viber: viber,
  adress: "м.Київ Бортничи пров.Промисловий 2Б",
};
