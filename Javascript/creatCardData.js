const cardWrapperData = document.querySelector(".slider-containerData");

const data = [
  {
    slide: "slideData",
    control: "btnControlData1",
    picture: "./assets/DATA/Sans-titre-2.jpg",
    firstName: "Grégory",
    lastName: "JAYET",
    github: "https://github.com/Greg59830",
    linkedin: "https://www.linkedin.com/in/grégory-jayet/",
    portfolio: "#",
    personalPres:
      "Je suis l’heureux papa de 2 filles qui me donnent chaque jour l’envie d’apprendre et de m'améliorer. ",
    professionnalPres:
      "on sens de la relation client, et mon adaptabilité peuvent être un avantage pour mon nouveau projet: Analyste de données Devenir. Je serais ravi de partager tout cela lors d’un stage où alternance à partir de février 2023.",
  },
  {
    slide: "slideData",
    control: "btnControlData2",
    picture: "./assets/DATA/Sans-titre-1.jpg",
    firstName: "NOM",
    lastName: "Prénom",
    github: "https://github.com/Atouzani7",
    linkedin: "#",
    portfolio: "#",
    personalPres: "Lorem ipsum",
    professionnalPres: "Lorem ipsum",
  },
  {
    slide: "slideData",
    control: "btnControlData3",
    picture: "./assets/DATA/Sans-titre-3.jpg",
    firstName: "NOM",
    lastName: "Prénom",
    github: "#",
    linkedin: "#",
    portfolio: "#",
    personalPres: "Lorem ipsum",
    professionnalPres: "lorem ipsum",
  },
  {
    slide: "slideData",
    control: "btnControlData4",
    picture: "./assets/DATA/Sans-titre-4.jpg",
    firstName: "NOM",
    lastName: "Prénom",
    github: "#",
    linkedin: "#",
    portfolio: "#",
    personalPres: "Lorem ipsum",
    professionnalPres: "lorem ipsum",
  },
  {
    slide: "slideData",

    control: "btnControlData5",
    picture: "./assets/DATA/Sans-titre-5.jpg",
    firstName: "NOM",
    lastName: "Prénom",
    github: "#",
    linkedin: "#",
    portfolio: "#",
    personalPres: "Lorem ipsum",
    professionnalPres: "Lorem ipsum",
  },
  {
    slide: "slideData",
    control: "btnControlData6",
    picture: "./assets/DATA/Sans-titre-6.jpg",
    firstName: "NOM",
    lastName: "Prénom",
    github: "#",
    linkedin: "#",
    portfolio: "#",
    personalPres: "Lorem ipsum",
    professionnalPres: "lorem ipsum",
  },
  {
    slide: "slideData",
    control: "btnControlData7",
    picture: "./assets/DATA/Sans-titre-7.jpg",
    firstName: "NOM",
    lastName: "Prénom",
    github: "#",
    linkedin: "#",
    portfolio: "#",
    personalPres: "Lorem ipsum",
    professionnalPres: "Lorem ipsum",
  },
  {
    slide: "slideData",
    control: "btnControlData8",
    picture: "./assets/DATA/Sans-titre-8.jpg",
    firstName: "Martin",
    lastName: "BEAUGENDRE",
    github: "#",
    linkedin: "https://www.linkedin.com/in/martin-beaugendre-lille/",
    portfolio: "#",
    personalPres:
      "Lillois depuis toujours, j’aime les voyages, la cuisine, le football, l’économie.",
    professionnalPres:
      "Apres 14 années en tant que conseiller clientèle des particuliers, en banque et assurance, j''effectue une reconversion en tant que Data Analyst",
  },
  {
    slide: "slideData",
    control: "btnControlData9",
    picture: "./assets/DATA/Sans-titre-9.jpg",
    firstName: "NOM",
    lastName: "Prénom",
    github: "#",
    linkedin: "#",
    portfolio: "#",
    personalPres: "Lorem ipsum",
    professionnalPres: "Lorem ipsum",
  },
  {
    slide: "slideData",
    control: "btnControlJ10",
    picture: "./assets/DATA/Sans-titre-10.jpg",
    firstName: "Audrey",
    lastName: "MULLER",
    github: "https://github.com/AlexisFLT",
    linkedin: "https://www.linkedin.com/in/alexis-foulont",
    portfolio: "#",
    personalPres: "Curieuse avec un petit grain de folie",
    professionnalPres:
      "Trouver un poste en Data Analyst et pourquoi pas plus tard, évoluer vers Data Scientifique",
  },
];

function createCardData(
  slide,
  control,
  picture,
  firstName,
  lastName,
  github,
  linkedin,
  portfolio,
  personalPres,
  professionnalPres
) {
  const slider = document.createElement("div");
  slider.classList.add(slide);
  cardWrapperData.appendChild(slider);

  const input = document.createElement("input");
  input.setAttribute("type", "checkbox");
  input.setAttribute("id", control);
  slider.appendChild(input);

  const label = document.createElement("label");
  label.classList.add("btn");
  label.setAttribute("for", control);
  slider.appendChild(label);

  const cardFrontDesk = document.createElement("div");
  cardFrontDesk.classList.add("cardFrontDesk");
  label.appendChild(cardFrontDesk);

  const cards = document.createElement("div");
  cards.classList.add("cards");
  cardFrontDesk.appendChild(cards);

  const cardF = document.createElement("div");
  cardF.classList.add("cardF");
  cards.appendChild(cardF);

  const imgProfil = document.createElement("img");
  imgProfil.classList.add("imgProfil");
  imgProfil.setAttribute("src", picture);
  imgProfil.setAttribute("alt", "Image de Profil");
  cardF.appendChild(imgProfil);

  const description = document.createElement("div");
  description.classList.add("description");
  cardF.appendChild(description);

  const titleDescription = document.createElement("div");
  titleDescription.classList.add("titleDescription");
  description.appendChild(titleDescription);

  const first_name = document.createElement("h2");
  first_name.classList.add("firstName");
  first_name.innerHTML = firstName;
  titleDescription.appendChild(first_name);

  const last_name = document.createElement("h2");
  last_name.classList.add("lastName");
  last_name.innerHTML = lastName;
  titleDescription.appendChild(last_name);

  const linkDescription = document.createElement("div");
  linkDescription.classList.add("linkDescription");
  description.appendChild(linkDescription);

  const buttonOne = document.createElement("a");
  buttonOne.classList.add("icon");
  buttonOne.setAttribute("href", github);
  buttonOne.setAttribute("target", "_blank");
  linkDescription.appendChild(buttonOne);

  const logoGithub = document.createElement("ion-icon");
  logoGithub.setAttribute("name", "logo-github");
  buttonOne.appendChild(logoGithub);

  const btnNameGithub = document.createElement("p");
  btnNameGithub.innerHTML = "Github";
  buttonOne.appendChild(btnNameGithub);

  const buttonTwo = document.createElement("a");
  buttonTwo.classList.add("icon");
  buttonTwo.setAttribute("href", linkedin);
  buttonTwo.setAttribute("target", "_blank");
  linkDescription.appendChild(buttonTwo);

  const logolinkedin = document.createElement("ion-icon");
  logolinkedin.setAttribute("name", "logo-linkedin");
  buttonTwo.appendChild(logolinkedin);

  const btnNamelinkedin = document.createElement("p");
  btnNamelinkedin.innerHTML = "Linkedin";
  buttonTwo.appendChild(btnNamelinkedin);

  const buttonThree = document.createElement("a");
  buttonThree.classList.add("icon");
  buttonThree.setAttribute("href", portfolio);
  buttonThree.setAttribute("target", "_blank");
  linkDescription.appendChild(buttonThree);

  const logoPortfolio = document.createElement("ion-icon");
  logoPortfolio.setAttribute("name", "logo-chrome");
  buttonThree.appendChild(logoPortfolio);

  const btnNamePortfolio = document.createElement("p");
  btnNamePortfolio.innerHTML = "Portfolio";
  buttonThree.appendChild(btnNamePortfolio);

  const cardBack = document.createElement("div");
  cardBack.classList.add("cardB");
  cards.appendChild(cardBack);

  const biography = document.createElement("div");
  biography.classList.add("bio");
  cardBack.appendChild(biography);

  const persoDesc = document.createElement("p");
  persoDesc.innerHTML = personalPres;
  biography.appendChild(persoDesc);

  const proDesc = document.createElement("p");
  proDesc.innerHTML = professionnalPres;
  biography.appendChild(proDesc);

  const imgProfil1 = document.createElement("img");
  imgProfil1.classList.add("imgProfil");
  imgProfil1.setAttribute("src", picture);
  imgProfil1.setAttribute("alt", "Image de Profil");
  cardBack.appendChild(imgProfil1);
}

for (let i = 0; i < data.length; i++) {
  createCardData(
    data[i].slide,
    data[i].control,
    data[i].picture,
    data[i].firstName,
    data[i].lastName,
    data[i].github,
    data[i].linkedin,
    data[i].portfolio,
    data[i].personalPres,
    data[i].professionnalPres
  );
}
