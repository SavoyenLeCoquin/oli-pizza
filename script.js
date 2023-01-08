
//////////////////////////////////////////////////////////////////////////////////// Fonctions ///////////////////////////////////////////////////////////////
function ajouterChildParagraphe(parent, classParagraphe, texteParagraphe){
    let p = document.createElement('p');
    parent.appendChild(p)
    p.classList.add(classParagraphe);
    p.textContent = texteParagraphe;
}

function ajouterFooter(){
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

function ajouterChildImgLink(parent, imgClass, imgSrc, link){
  let image = document.createElement('img');
  parent.appendChild(image);
  image.classList.add(imgClass);
  image.src = imgSrc;
  let imageLink = document.createElement('a'); /* On créé un lien pour "entourer" l'image" */
  imageLink.href = link;
  imageLink.target = "_blank";
  wrap(image, imageLink);
}

function ajouterHeader(){
    let header = document.createElement('header');
    let body = document.body;
    let olipizzaLogo = document.createElement('img');
    /* On donne sa classe au header et on le fait apparaître */
    header.classList.add('header');
    header.id = 'header';
    body.appendChild(header);
    /* On ajoute les div */
    leftSection = ajouterChildDiv(header, 'left-section');
    ajouterChildDiv(header, 'middle-section');
    sections = ajouterChildDiv(header, 'sections');
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

function ajouterChildDiv(parent, classDiv){
    let div = document.createElement('div');
    parent.appendChild(div);
    div.classList.add(classDiv);
    return(div);
}

function ajouterChildLink(parent, classLink, href, textContent){
    let link = document.createElement('a');
    parent.appendChild(link);
    link.classList.add(classLink);
    link.href = href;
    link.textContent = textContent;
}

function wrap(el, wrapper) {
    el.parentNode.insertBefore(wrapper, el);
    wrapper.appendChild(el);
}

//////////////////////////////////////////////////////////////////////////////////// Actions ///////////////////////////////////////////////////////////////

/* Script*/
ajouterHeader();
ajouterFooter();

/* Animations texte : apropos.html */
gsap.from('.txt-apropos', {duration: 1, y: '-100%', ease: 'power1', opacity: 0});
gsap.from('.txtapropos', {duration: 1, y: '-15%', ease: 'power1', opacity: 0, delay: 1});
gsap.from('.infos-pratiques', {duration: 1, y: '-100%', ease: 'power1', opacity: 0, delay: 1.5});

/* Animations texte : index.html */
gsap.from('.txt', {duration: 1, y: '-100%', ease: 'power1', opacity: 0});
gsap.from('.txt2', {duration: 1, y: '-50%', ease: 'power1', opacity: 0, delay: 1});

/* Animation header */
let header = document.getElementById('header');
let prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  let currentScrollPos = window.pageYOffset;
  if(window.scrollY!=0){
    header.style.backgroundColor = "rgba(32, 32, 32, 0.8)";
  }
  else { 
    header.style.backgroundColor = "rgba(32, 32, 32, 0)";
  }
  prevScrollpos = currentScrollPos;
}


















