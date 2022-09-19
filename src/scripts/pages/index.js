import "core-js/stable";
import "regenerator-runtime/runtime";

import '../../scss/main.scss';
import { getPhotographersJSON } from '../utils/fetch';
import { displayPhotographerAll } from '../data/displayPhotographer';


async function initMain() {
    // Try to get data from photographes if error then redirect to 404 page
    try {
        const photographers = await getPhotographersJSON();
        displayPhotographerAll(photographers, ".photographer_section");
        console.log("Page initialiser avec succès depuis initMain()");
    } catch (e) {
        console.error(e);
        // If it's a fail then we redirect to 404 Error Page since initMain() it's the minimal functionality

        if (process.env.NODE_ENV === 'production') {
            location.href = '404.html';
        }

    }
}

initMain();
