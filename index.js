// Add your code here

// fetch("http://localhost:3000/dogs", {
    //     method: "POST",
    //     headers: {
        //         "Content-Type": "application/json",
        //         "Accept": "application/json"
        //     },
        //     body: JSON.stringify({
            //         dogName: "Byron",
            //         dogBreed: "Poodle"
            //     })
            // });
            
            // const configurationObject = {
            //     method: "POST",
            //     headers: {
            //         "Content-Type": "application/json",
            //         "Accept": "application/json"
            //     },
            //     body: JSON.stringify(formData)
            //                     //     dogName: "Byron",
            //                     //     dogBreed: "Poodle"
            //                     // })
            // };
// const formData = {
//     dogName: "Byron",
//     dogBreed: "Poodle"
// };

// const destinationURL = "http://localhost:3000/dogs";

// fetch(destinationURL, configurationObject)
//     .then(function(response) {
//         return response.json();
//     })
//     .then(function(object) {
//         console.log(object);
//     })
//     .catch(function(error) {
//         alert("Bad things! Ragnarők!");
//         console.log(error.message);
//         // console.log("yaay");
//     });

    function submitData(name, email) {
        return fetch('http://localhost:3000/users', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                name,
                email 
            })
        })
        .then(function(response) {
            return response.json()
        })
        .then(function(object) {
            document.body.innerHTML = object["id"]
            // a new object is created with a new id
        })
        .catch( function ( error ) {
            document.body.innerHTML = error.message
        })
    }