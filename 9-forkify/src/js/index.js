/***********************************************************************************************************************
 * MODERN JAVASCRIPT; USING ES6, NPM, BABEL AND WEBPACK
 *
 * Modern JavaScript is not so much about the language itself, but it more about the eco system that we use to write
 * it in.
 * We still write the exact same JavaScript code, but we use it together with a set of tools that make it easier and
 * better to work with and the foundation of all these tools is the NODE.JS and NPM eco system where we can find all
 * kinds of third party open source tools, libraries and frameworks development tools need for modern web development.
 * Libraries and Frameworks we have things like React, Angular, jquery Lodash etc, we also have Developments tools like
 * for task automations, automatic browser reloading or to compare Javascript from ES6 down to ES5.
 * In order to use and share these packages we need some kind og toll to install and manage them and that's when
 * the Node Package Manager (NPM) comes it which is a simple command line tool. NPM also allows us to write scripts
 * for use with development tools. See course notes 'Notes.docx' for this section.
 ***********************************************************************************************************************
 */
// Global app controller

import Search from './models/Search';
import Recipe from './models/Recipe';
import List from './models/List';
import Likes from './models/Likes';
import * as searchView from './views/searchView';
import * as recipeView from './views/recipeView';
import * as listView from './views/listView';
import * as likesView from './views/likesView';
import { elements, renderLoader, clearLoader } from './views/base';


/**
 * Global state of our app
 * - object name = state
 * - Search object
 * - Current recipe object
 * - Shopping list object
 * - Liked recipes
 */
const state = {};

/** SEARCH CONTROLLER
 *
 */

const controlSearch = async () => {
    // 1) Get query from view
    const query = searchView.getInput();
    
    if (query) {
        // 2) New search object and add to state
        state.search = new Search(query);
        
        // 3) Prepare UI for results
        searchView.clearInput();
        searchView.clearResults();
        renderLoader(elements.searchRes);
        
        try {
            // 4) Search for recipes
            await state.search.getResults();
            
            // 5) Render results on UI
            clearLoader();
            searchView.renderResults(state.search.result);
        } catch (err) {
            alert('Something wrong with the search...');
            clearLoader();
        }
    }
}

elements.searchForm.addEventListener('submit', e => {
    e.preventDefault();
    controlSearch();
});


elements.searchResPages.addEventListener('click', e => {
    const btn = e.target.closest('.btn-inline');
    if (btn) {
        const goToPage = parseInt(btn.dataset.goto, 10);
        searchView.clearResults();
        searchView.renderResults(state.search.result, goToPage);
    }
});

/** RECIPE CONTROLLER
 *
 */

// Add to the Global Object
// ------------------------
// When you select a recipe it gets the recipe Id which is prefixed with an '#' character so on the address line of
// your browser it will be localhost:8080/?#46956 for example. So when you select a different recipe this '#' number
// will change and this is where 'hashchange' on the event listener comes into play.
// Replaced two event listeners with one
// window.addEventListener('hashchange', controlRecipe);
// window.addEventListener('load', controlRecipe);

const controlRecipe = async () => {
    // Get ID from url
    const id = window.location.hash.replace('#', '');
    
    if (id) {
        // Prepare UI for changes
        recipeView.clearRecipe();
        renderLoader(elements.recipe);
        
        // Highlight selected search item
        if (state.search) searchView.highlightSelected(id);
        
        // Create new recipe object
        state.recipe = new Recipe(id);
        
        try {
            // Get recipe data and parse ingredients
            await state.recipe.getRecipe();
            state.recipe.parseIngredients();
            
            // Calculate servings and time
            state.recipe.calcTime();
            state.recipe.calcServings();
            
            // Render recipe
            clearLoader();
            recipeView.renderRecipe(
                state.recipe,
                state.likes.isLiked(id)
            );
            
        } catch (err) {
            console.log(err);
            alert('Error processing recipe!');
        }
    }
};

['hashchange', 'load'].forEach(event => window.addEventListener(event, controlRecipe));

/**
 * LIST CONTROLLER
 */

const controlList = () => {
    // Create a new list IF there in none yet
    if (!state.list) state.list = new List();
    
    // Add each ingredient to the list and UI
    state.recipe.ingredients.forEach(el => {
        const item = state.list.addItem(el.count, el.unit, el.ingredient);
        listView.renderItem(item);
    });
}

// Handle delete and update list item events
elements.shopping.addEventListener('click', e => {
    const id = e.target.closest('.shopping__item').dataset.itemid;
    
    // Handle the delete button
    if (e.target.matches('.shopping__delete, .shopping__delete *')) {
        // Delete from state
        state.list.deleteItem(id);
        
        // Delete from UI
        listView.deleteItem(id);
        
        // Handle the count update
    } else if (e.target.matches('.shopping__count-value')) {
        const val = parseFloat(e.target.value, 10);
        state.list.updateCount(id, val);
    }
});

// Handling recipe button clicks
elements.recipe.addEventListener('click', e => {
    if ( e.target.matches( '.button-decrease, .btn-decrease *' ) ) {
        // Decrease button is clicked
        if ( state.recipe.servings > 1 ) {
            state.recipe.updateServings ('dec' );
            recipeView.updateServingsIngredients ( state.recipe );
        }
    } else if ( e.target.matches( '.btn-increase','.btn-increase * '))  {
        // Increase button is clicked
        state.recipe.updateServings('inc' );
        recipeView.updateServingsIngredients( state.recipe );
    } else if ( e.target.matches( '.recipe__btn-add', 'recipe__btn-add *' ) ) {
        controlList();
    }
})





/**
 * LIKE CONTROLLER
 */
const controlLike = () => {
    if (!state.likes) state.likes = new Likes();
    const currentID = state.recipe.id;
    
    // User has NOT yet liked current recipe
    if (!state.likes.isLiked(currentID)) {
        // Add like to the state
        const newLike = state.likes.addLike(
            currentID,
            state.recipe.title,
            state.recipe.author,
            state.recipe.img
        );
        // Toggle the like button
        likesView.toggleLikeBtn(true);
        
        // Add like to UI list
        likesView.renderLike(newLike);
        
        // User HAS liked current recipe
    } else {
        // Remove like from the state
        state.likes.deleteLike(currentID);
        
        // Toggle the like button
        likesView.toggleLikeBtn(false);
        
        // Remove like from UI list
        likesView.deleteLike(currentID);
    }
    likesView.toggleLikeMenu(state.likes.getNumLikes());
};

// Restore liked recipes on page load
window.addEventListener('load', () => {
    state.likes = new Likes();
    
    // Restore likes
    state.likes.readStorage();
    
    // Toggle like menu button
    likesView.toggleLikeMenu(state.likes.getNumLikes());
    
    // Render the existing likes
    state.likes.likes.forEach(like => likesView.renderLike(like));
});