const cardWrapperJS = document.querySelector(".slider-containerJS");

const javascript = [
  {
    slide: "slideJs",

    control: "btnControlJS1",
    picture: "./assets/JS/Nédim.jpg",
    firstName: "Nédim",
    lastName: "AMAJOUB",
    github: "#",
    linkedin: "#",
    portfolio: "#",
    personalPres: "Lorem ipsum",
    professionnalPres: "lorem ipsum",
  },
  {
    slide: "slideJs",

    control: "btnControlJS2",
    picture: "./assets/JS/Asma.jpg",
    firstName: "TOUZANI",
    lastName: "Asma",
    github: "https://github.com/Atouzani7",
    linkedin: "#",
    portfolio: "#",
    personalPres: "Lorem ipsum",
    professionnalPres:
      "En reconversion professionnel, pour devenir développeuse web",
  },
  {
    slide: "slideJs",

    control: "btnControlJS3",
    picture: "./assets/JS/Charly.jpg",
    firstName: "JUTEAU",
    lastName: "Charly",
    github: "#",
    linkedin: "#",
    portfolio: "#",
    personalPres: "Lorem ipsum",
    professionnalPres: "lorem ipsum",
  },
  {
    slide: "slideJs",

    control: "btnControlJS4",
    picture: "./assets/JS/Florian-B.jpg",
    firstName: "BARTIER",
    lastName: "Florian",
    github: "#",
    linkedin: "#",
    portfolio: "#",
    personalPres: "Lorem ipsum",
    professionnalPres: "lorem ipsum",
  },
  {
    slide: "slideJs",

    control: "btnControlJS5",
    picture: "./assets/JS/Florian-Bo.jpg",
    firstName: "BOUCHEZ",
    lastName: "Florian",
    github: "https://github.com/Fbouchezpro",
    linkedin: "ttps://www.linkedin.com/in/florian-bouchez-18521b23b/",
    portfolio: "#",
    personalPres: "Student Web Developer @ Wild Code school",
    professionnalPres:
      "Currently in search of a stage in IT enterprise , and in future create a web agency.",
  },
  {
    slide: "slideJs",

    control: "btnControlJS6",
    picture: "./assets/JS/Valentin.jpg",
    firstName: "WAQUET",
    lastName: "Valentin",
    github: "#",
    linkedin: "#",
    portfolio: "#",
    personalPres: "Lorem ipsum",
    professionnalPres: "lorem ipsum",
  },
  {
    slide: "slideJs",

    control: "btnControlJS7",
    picture: "./assets/JS/Gérald.jpg",
    firstName: "CARTIAUX",
    lastName: "Gérald",
    github: "https://github.com/cartige",
    linkedin: "https://www.linkedin.com/in/gerald-cartiaux-a97254251",
    portfolio: "#",
    personalPres:
      "Passioné des jeux vidéos, guitariste amateur. Soft skills : anglais niveau correct, àl'écoute, attentif. Language informatique : C, JS, CSS, HTML, Java, Vue.",

    professionnalPres: "Trouver un job dans le dévelopement web.",
  },
  {
    slide: "slideJs",

    control: "btnControlJS8",
    picture: "./assets/JS/Hervé.jpg",
    firstName: "SWIERGIEL",
    lastName: "Hervé",
    github: "https://github.com/hswiergiel",
    linkedin: "https://www.linkedin.com/in/herv%C3%A9-swiergiel-63882352/",
    portfolio: "#",
    personalPres: "Chanteur choriste, randonneur et nouvellement développeur",
    professionnalPres:
      "Fonctionnaire territorial pendant 7 ans, je me reconvertis dans le domaine dudéveloppement web et suis à la recherche d'une première expérience professionnelle",
  },
  {
    slide: "slideJs",

    control: "btnControlJS9",
    picture: "./assets/JS/KÉVIN.jpg",
    firstName: "GUEGUEN",
    lastName: "Kévin",
    github: "https://github.com/guenk",
    linkedin: "https://www.linkedin.com/in/GueguenK",
    portfolio: "#",
    personalPres:
      "Rigoureux, autonome et organisé, je suis actuellement en formation de développeur web à la Wild Code School.",
    professionnalPres:
      "Je souhaite rejoindre une entreprise dans le cadre d'un stage ou d'une alternance dés janvier 2022.",
  },
  {
    slide: "slideJs",

    control: "btnControlJ10",
    picture: "./assets/JS/Alexis.jpg",
    firstName: "FOULONT",
    lastName: "Alexis",
    github: "https://github.com/AlexisFLT",
    linkedin: "https://www.linkedin.com/in/alexis-foulont",
    portfolio: "#",
    personalPres:
      "Esprit d'équipe, capacité d'adaptation et autonomie sont des softs skills que  j'aimerais mettre à profit pour mon futur métier. Une citation d'une personne anonyme me résume parfaitement : “A good team needs three things: the right people",
    professionnalPres:
      "Après 6 ans dans la Petite Enfance, j'ai décidé de me reconvertir dans l'informatique où je me suis découvert une passion. J'ai désormai le souhait d'en faire mon métier. Je suis actuellement en formation Developpeur Web à la Wild Code School de Lille etje cherche un contrat de professionnalisation pour mars 2023.",
  },
  {
    slide: "slideJs",

    control: "btnControlJS11",
    picture: "./assets/JS/Priscillia.jpg",
    firstName: "AMMEUX",
    lastName: "Priscillia",
    github: "https://github.com/PriscilliaAmmeux",
    linkedin: "https://www.linkedin.com/in/priscillia-ammeux/",
    portfolio: "#",
    personalPres: "Lorem ipsum",
    professionnalPres: "lorem ipsum",
  },
  {
    slide: "slideJs",

    control: "btnControlJS12",
    picture: "./assets/JS/Romain-P.jpg",
    firstName: "POURCHAUX",
    lastName: "Romain",
    github: "https://github.com/Fostrankill",
    linkedin: "#",
    portfolio: "#",
    personalPres:
      "Pratique le trek en autonomie sur plusieurs jours (GR20, TMB, ile de Skye ...). Aime se dépasser.",

    professionnalPres:
      "En recherche d'entreprise pour une alternance d'un an à la WildCodeSchool",
  },
  {
    slide: "slideJs",

    control: "btnControlJS13",
    picture: "./assets/JS/Romain.jpg",
    firstName: "HADDAD",
    lastName: "Romain",
    github: "#",
    linkedin: "#",
    portfolio: "#",
    personalPres: "Lorem ipsum",
    professionnalPres: "lorem ipsum",
  },
  {
    slide: "slideJs",

    control: "btnControlJS14",
    picture: "./assets/unknown.png",
    firstName: "H",
    lastName: "Perrine",
    github: "https://github.com/PerrineDeFrance",
    linkedin: "https://www.linkedin.com/in/perrinehuon",
    portfolio: "#",
    personalPres: "Simplicité - humour - open mind",
    professionnalPres: "Développeuse web",
  },
  {
    slide: "slideJs",

    control: "btnControlJS15",
    picture: "./assets/unknown.png",
    firstName: "POURIL",
    lastName: "Alexis",
    github: "https://github.com/alexis-Pouril",
    linkedin: "https://www.linkedin.com/in/alexis-pouril-25b6a390/",
    portfolio: "#",
    personalPres:
      "Because the people who are crazy enough to think that they can change the world, are the ones who do! ",
    professionnalPres:
      "Technicien hardware depuis maintenant 10 ans je suis à la recherche d'un nouveau challenge et je réalise une transition professionnelle afin de devenir développeur.",
  },
];

function createCardJS(
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
  cardWrapperJS.appendChild(slider);

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
  imgProfil.classList.add("imgProfil");
  imgProfil1.setAttribute("src", picture);
  imgProfil1.setAttribute("alt", "Image de Profil");
  cardBack.appendChild(imgProfil1);
}

for (let i = 0; i < javascript.length; i++) {
  createCardJS(
    javascript[i].slide,
    javascript[i].control,
    javascript[i].picture,
    javascript[i].firstName,
    javascript[i].lastName,
    javascript[i].github,
    javascript[i].linkedin,
    javascript[i].portfolio,
    javascript[i].personalPres,
    javascript[i].professionnalPres
  );
}
