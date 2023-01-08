//////////////////////////////////////////////////////////////////////////////////// Fonctions ///////////////////////////////////////////////////////////////
export function ajouterChildParagraphe(parent, classParagraphe, texteParagraphe){
    let p = document.createElement('p');
    parent.appendChild(p)
    p.classList.add(classParagraphe);
    p.textContent = texteParagraphe;
}

export function ajouterFooter(){
  let footer = document.createElement('footer');
  let footergauche = document.createElement('div');
  let footermilieu = document.createElement('div');
  let footerdroite = document.createElement('div');
  let body = document.body;
  /* On ajoute le footer */
  body.append(footer);
  footer.classList.add('footer');
  /* On ajoute le sous-footer gauche */
  footer.appendChild(footergauche);
  footergauche.classList.add('footer-gauche');
  /* On ajoute les paragraphes du sous-footer gauche */
  ajouterChildParagraphe(footergauche, 'coordonnees', 'Oli Pizza');
  ajouterChildParagraphe(footergauche, 'coordonnees', '13 rue Jean Abraham Poupart');
  ajouterChildParagraphe(footergauche, 'coordonnees', '08300 Neuflize');
  ajouterChildParagraphe(footergauche, 'coordonnees', 'Tél : 03 24 72 74 10');
  /* On ajoute le sous-footer milieu */
  footer.appendChild(footermilieu);
  footermilieu.classList.add('footer-milieu');
  /* On ajoute les enfants du sous-footer milieu */
  let footermilieuTxt = ajouterChildDiv(footermilieu, 'footermilieu-txt');
  let footermilieuImages = ajouterChildDiv(footermilieu, 'footermilieu-images');
  /* On ajoute le texte du sous-footer milieu */
  ajouterChildParagraphe(footermilieuTxt, 'nom-site', 'www.oli-pizza.fr');
  /* On fait apparaître les images-link */
  ajouterChildImgLink(footermilieuImages, 'socialFooterImage', "images/facebook-icon.png", 'https://www.facebook.com/Olipizzaneuflize');
  ajouterChildImgLink(footermilieuImages, 'socialFooterImage', "images/instagram-icon.png", 'https://www.instagram.com/olipizzaneuflize/?hl=fr');
  /* On ajoute le sous-footer droite */
  footer.appendChild(footerdroite);
  footerdroite.classList.add('footer-gauche');
  /* On ajoute les paragraphes du sous-footer droite */
  ajouterChildParagraphe(footerdroite, 'horaires', 'Ouvert du lundi??? au vendredi???');
}

export function ajouterChildImgLink(parent, imgClass, imgSrc, link){
  let image = document.createElement('img');
  parent.appendChild(image);
  image.classList.add(imgClass);
  image.src = imgSrc;
  let imageLink = document.createElement('a'); /* On créé un lien pour "entourer" l'image" */
  imageLink.href = link;
  imageLink.target = "_blank";
  wrap(image, imageLink);
}

export function ajouterChildImg(parent, imgClass, imgSrc){
  let image = document.createElement('img');
  parent.appendChild(image);
  image.classList.add(imgClass);
  image.src = imgSrc;
}

export function ajouterHeader(){
    let header = document.createElement('header');
    let body = document.body;
    let olipizzaLogo = document.createElement('img');
    /* On donne sa classe au header et on le fait apparaître */
    header.classList.add('header');
    header.id = 'header';
    body.appendChild(header);
    /* On ajoute les div */
    let leftSection = ajouterChildDiv(header, 'left-section');
    ajouterChildDiv(header, 'middle-section');
    let sections = ajouterChildDiv(header, 'sections');
    /* On fait apparaître l'image */
    leftSection.appendChild(olipizzaLogo);
    olipizzaLogo.classList.add('olipizza-logo');
    olipizzaLogo.src = "images/oli-pizza-dark.png";
    /* On met le lien sur le logo */
    let link = document.createElement('a'); /* On créé un lien pour "entourer" l'image" */
    link.href = 'index.html';
    wrap(olipizzaLogo, link);
    /* On créé les boutons */
    ajouterChildLink(sections, 'notre-carte', 'carte.html', 'notre carte');
    ajouterChildLink(sections, 'notre-carte', 'apropos.html', 'à propos de nous');
}

export function ajouterChildDiv(parent, classDiv){
    let div = document.createElement('div');
    parent.appendChild(div);
    div.classList.add(classDiv);
    return(div);
}

export function ajouterChildLink(parent, classLink, href, textContent){
    let link = document.createElement('a');
    parent.appendChild(link);
    link.classList.add(classLink);
    link.href = href;
    link.textContent = textContent;
}

export function wrap(el, wrapper) {
    el.parentNode.insertBefore(wrapper, el);
    wrapper.appendChild(el);
}

/* Fonction d'ajout de pizza : attention la photo doit être légèrement rectangulaire (grand côté = horizontal) */
export function ajoutPizzaCarte(imgSrc, pizzaTitre, pizzaRecette){
  /* Création du sous-div pizzaCase de partie2Grid */
  let partie2Grid = document.getElementById('partie2Grid');
  let pizzaCase = ajouterChildDiv(partie2Grid, 'pizzaCase');
  /* Création des sous-div de pizzaCase */
  let pizzaCaseImgContainer = ajouterChildDiv(pizzaCase, "pizzaCaseImgContainer");
  let pizzaCaseTxt = ajouterChildDiv(pizzaCase, "pizzaCaseTxt");
  /* Ajout de l'image dans pizzaCaseImgContainer */
  ajouterChildImg(pizzaCaseImgContainer, "pizzaGridImage", imgSrc);
  /* Création des sous-div de pizzaCaseTxt */
  let caseTxtTitre = ajouterChildDiv(pizzaCaseTxt, "caseTxtTitre");
  let caseTxtDesc = ajouterChildDiv(pizzaCaseTxt, "caseTxtDesc");
  caseTxtTitre.innerHTML = pizzaTitre;
  caseTxtDesc.innerHTML = pizzaRecette;
}