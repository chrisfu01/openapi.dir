// this is the same library as front end. Notice the syntax difference. If you wanna support
// ES6 syntax, there are some work to do ...
const axios = require('axios');
const x = require('./api/services/pub.service');
const URL = 'https://api.apis.guru/v2/list.json?_=1577973649521'; 

axios.get(URL).then(async function (response) {
    let data = response.data; 
    let keys = Object.keys(data);

    var i;
    for (i = 0; i < 100; i++) {
        let versions = (data[keys[i]].versions);
        let vkeys = Object.keys(versions);
        let firstV = versions[vkeys[0]];
        let cat = firstV.info["x-providerName"];
        await x().create(cat).then(function([ret, isCreated]) {
            console.log('');
        }).catch();;
        
    }

})
.catch(function (error) {
    console.log(error);
});