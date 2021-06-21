
// INFO TMDB
const keyApi = "aa212f6d5e1da31a4142d73f425783b1";
const urlApi = "https://api.themoviedb.org/3/"
const language = "fr-FR"


// Search / Find
/**Fonction pour trouver le film via son ID
     * @param idTitle : ID du film a chercher
     * @example
     * import {findMovieById} from './services/Services'
     * findMovieById(1256);
     */
export function findMovieById(idTitle){
    
    
    return fetch(urlApi + 'find/' + idTitle + "?api_key=" + keyApi + "&language=" + language + "&external_sourceimdb_id")
        .then((reponse) => reponse.json())
        .catch((error) => console.error(error));
}
/**Fonction pour trouver le film via son nom
     * @param searchTerm : nom du film a chercher
     * @param page : numéro de la page
     * @example
     * import {searchMovies} from './services/Services'
     * searchMovies('Tenet', 2);
     */
export function searchMovies(searchTerm, page){
     

    return fetch(urlApi + "search/movie?api_key=" + keyApi + "&language=" + language + "&query=" + searchTerm + "&page=" + page +"&include_adult=false")
        .then((reponse) => reponse.json())
        .catch((error) => console.error(error));
}


// Filters
/**Fonction pour obtenir tout les films les plus populaire
     * @param page : numéro de la page
     * @example
     * import {getPopular} from './services/Services'
     * getPopular(1);
     */
export function getPopular(page){
    

    return fetch(urlApi + "movie/popular?api_key=" + keyApi + "&language=" + language + "&page=" + page)
        .then((reponse) => reponse.json())
        .catch((error) => console.error(error));
}
/**Fonction pour obtenir tout les films les mieux notés
     * @param page : numéro de la page
     * @example
     * import {getTopRated} from './services/Services'
     * getTopRated(1);
     */

export function getTopRated(page){
    
    return fetch(urlApi + "movie/top_rated?api_key=" + keyApi + "&language=" + language + "&page=" + page)
        .then((reponse) => reponse.json())
        .catch((error) => console.error(error));
}
/**Fonction pour obtenir tout les films qui viennent de sortir
     * @param page : numéro de la page
     * @example
     * import {getLatest} from './services/Services'
     * getLatest(1);
     */
export function getLatest(page){
    

    return fetch(urlApi + "movie/latest?api_key=" + keyApi + "&language=" + language + "&page=" + page)
        .then((reponse) => reponse.json())
        .catch((error) => console.error(error));
}
   /**Fonction pour obtenir tout les films qui vont bientot sortir
     * @param page : numéro de la page
     * @example
     * import {getUpcoming} from './services/Services'
     * getUpcoming(1);
     */
export function getUpcoming(page){
 

    return fetch(urlApi + "movie/upcoming?api_key=" + keyApi + "&language=" + language + "&page=" + page)
        .then((reponse) => reponse.json())
        .catch((error) => console.error(error));
}


//Movies
 /**Fonction pour obtenir les détails sur un film en particulier
     * @param idMovie : correspond à l'ID du film
     * @example
     * import {getMovieDetails} from './services/Services'
     * getMovieDetails(3154);
     */
export function getMovieDetails(idMovie){
   

    return fetch(urlApi + "movie/" + idMovie + "?api_key=" + keyApi + "&language=" + language)
        .then((reponse) => reponse.json())
        .catch((error) => console.error(error));
}
   /**Fonction pour obtenir les crédtis d'un film
     * @param idMovie : correspond à l'ID du film
     * @example
     * import {getMovieCredits} from './services/Services'
     * getMovieCredits(3154);
     */
export function getMovieCredits(idMovie){
 

    return fetch(urlApi + "movie/" + idMovie + "/credits?api_key=" + keyApi + "&language=" + language)
        .then((reponse) => reponse.json())
        .catch((error) => console.error(error));
}


//Actors
    /**Fonction pour obtenir les détails sur un acteur
     * @param idActor : correspond à l'ID de l'acteur
     * @example
     * import {getActorDetail} from './services/Services'
     * getActorDetail(3154);
     */
export function getActorDetail(idActor){


    return fetch(urlApi + "person/" + idActor + "?api_key=" + keyApi + "&language=" + language)
        .then((reponse) => reponse.json())
        .catch((error) => console.error(error));
}

    /**Fonction pour obtenir la filmographie d'un acteur
     * @param idActor : correspond à l'ID de l'acteur
     * @example
     * import {getActorFilmography} from './services/Services'
     * getActorFilmography(3154);
     */
export function getActorFilmography(idActor){


    return fetch(urlApi + "person/" + idActor + "/movie_credits?api_key=" + keyApi + "&language=" + language)
        .then((reponse) => reponse.json())
        .catch((error) => console.error(error));
}
export function getImage(size, path) {
    return "http://image.tmdb.org/t/p/w" + size + path;
}