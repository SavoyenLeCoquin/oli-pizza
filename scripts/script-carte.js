import {
    ajoutPizzaCarte

  } from "./functions.js";

/* Ajout des différentes pizza à la carte */
ajoutPizzaCarte('images/pizzas/montagna.png', 'Montagna', 'Mozzarella, pesto, oignons rouges, tomates confites, grana padano, jambon cru');
ajoutPizzaCarte('images/pizzas/capra-miele.png', 'Capra miele', 'Mozzarella, lardons, chèvre, miel');
ajoutPizzaCarte('images/pizzas/raclette.png', 'Raclette', 'Mozzarella, pomme de terre, coppa, fromage à raclette');
ajoutPizzaCarte('images/pizzas/4-fromaggi.png', '4 fromaggi', 'Mozzarella, chèvre, reblochon, bleu');
ajoutPizzaCarte('images/pizzas/andalouse.png', 'Andalouse', 'Sauce tomate, mozzarella, jambon, merguez, chorizo, champignons, oignons rouges, sauce andalouse');

/* Animation titre */
gsap.from('.partie1Txt', {duration: 2, y: '-25%', ease: 'power1', opacity: 0});