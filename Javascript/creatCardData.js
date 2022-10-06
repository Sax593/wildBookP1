const cardWrapperData = document.querySelector(".slider-containerData");

const data = [
    {
        slide: "slider-data",
        control: "btnControlData1",
        picture: "./assets/DATA/Sans-titre-1.jpg",
        firstName: "Grégory",
        lastName: "JAYET",
        github: "https://github.com/Greg59830",
        linkedin: "https://www.linkedin.com/in/grégory-jayet/",
        portfolio: "#",
        personalPres: "Je suis l’heureux papa de 2 filles qui me donnent chaque jour l’envie d’apprendre et de m'améliorer. ",
        professionnalPres: "on sens de la relation client, et mon adaptabilité peuvent être un avantage pour mon nouveau projet: Analyste de données Devenir. Je serais ravi de partager tout cela lors d’un stage où alternance à partir de février 2023.",
    },
    {
        slide: "slider-data",

        control: "btnControlData2",
        picture: "./assets/DATA/Sans-titre-2.jpg",
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
        slide: "slider-data",

        control: "btnControlData3",
        picture: "./assets/DATA/Sans-titre-3.jpg",
        firstName: "JUTEAU",
        lastName: "Charly",
        github: "#",
        linkedin: "#",
        portfolio: "#",
        personalPres: "Lorem ipsum",
        professionnalPres: "lorem ipsum",
    },
    {
        slide: "slider-data",

        control: "btnControlData4",
        picture: "./assets/DATA/Sans-titre-4.jpg",
        firstName: "BARTIER",
        lastName: "Florian",
        github: "#",
        linkedin: "#",
        portfolio: "#",
        personalPres: "Lorem ipsum",
        professionnalPres: "lorem ipsum",
    },
    {
        slide: "slider-data",

        control: "btnControlData5",
        picture: "./assets/DATA/Sans-titre-5.jpg",
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
        slide: "slider-data",

        control: "btnControlData6",
        picture: "./assets/DATA/Sans-titre-6.jpg",
        firstName: "WAQUET",
        lastName: "Valentin",
        github: "#",
        linkedin: "#",
        portfolio: "#",
        personalPres: "Lorem ipsum",
        professionnalPres: "lorem ipsum",
    },
    {
        slide: "slider-data",

        control: "btnControlData7",
        picture: "./assets/DATA/Sans-titre-7.jpg",
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
        slide: "slider-data",

        control: "btnControlData8",
        picture: "./assets/DATA/Sans-titre-8.jpg",
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
        slide: "slider-data",

        control: "btnControlData9",
        picture: "./assets/DATA/Sans-titre-9.jpg",
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
        slide: "slider-data",

        control: "btnControlJ10",
        picture: "./assets/DATA/Sans-titre-10.jpg",
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
    imgProfil.classList.add("imgProfil");
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
