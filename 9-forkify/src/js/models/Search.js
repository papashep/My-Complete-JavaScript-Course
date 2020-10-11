import axios from 'axios';
import { proxy } from '../config';

export default class Search {
    constructor(query) {
        this.query = query;
    }
    
    // Instead of returning the result right away we simple store it in 'this.result' so all the data about the
    // result is encapsulated inside the object, so both the search and corresponding result are stored inside the
    // search object.
    async getResults() {
        try {
            // Replace the line below and remove "import { proxy} from '../config';" line, if it stops working'
            // const res = await axios (`https://forkify-api.herokuapp.com/api/search?&q=${ query }`);   // AJAX Call
            
            const res = await axios (`${ proxy }https://recipesapi.herokuapp.com/api/search?&q=${ this.query }`);   // AJAX Call
            this.result = res.data.recipes;
            
            // console.log (this.result);
        }
        catch ( error ) {
            alert ( error );
        }
    }
}

