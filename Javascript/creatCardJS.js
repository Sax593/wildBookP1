const cardWrapperJS = document.querySelector(".slider-containerJS");

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

for (let i = 0; i < php.length; i++) {
    createCardJS(
        php[i].slide,
        php[i].control,
        php[i].picture,
        php[i].firstName,
        php[i].lastName,
        php[i].github,
        php[i].linkedin,
        php[i].portfolio,
        php[i].personalPres,
        php[i].professionnalPres
    );
}