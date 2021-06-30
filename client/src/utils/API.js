import axios from "axios";

export default {
    // cloudinarySearch: function(query) {
    //     return axios.get(
    //         query 
    //     );
    //   },

    // this is going to be a function that is going to grab the locations that are in the database
    terrainAPI: function () {
        return axios({
            method: 'GET',
            url: '/api/locations',
            headers: {
                "Content-Type": "application/json",
            },
        })
    },

    imagePull: async function (location) {
        try {
            console.log('call')
            const locationImages = '/api/cloudinary/' + location
            const call = await axios.get(locationImages)
            return call
        } catch (error) {
            console.log(error)

        }


    },

    uploadImage: async function (base64EncodedImage, { location }) {
        try {
            console.log('Upload call')
            await axios.post({
                method: 'POST',
                url: '/api/cloudinary/' + location,
                data: JSON.stringify({ data: base64EncodedImage })
            })
            const postcall = await axios({
                method: 'POST',
                url: '/api/cloudinary/' + location,
                body: JSON.stringify({ data: base64EncodedImage })
            })
            return 
        } catch (error) {
            console.log(error)
        }

    }

}


// going to need to create different api calls for the different folders both post and get calls