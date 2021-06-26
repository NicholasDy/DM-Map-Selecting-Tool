import axios from "axios";

export default{
    cloudinarySearch: function(query) {
        return axios.get(
          "" +
            query 
        );
      },


    terrainAPI: function() {
        

    }
}
