// this is the same library as front end. Notice the syntax difference. If you wanna support
// ES6 syntax, there are some work to do ...
const axios = require('axios');
const x = require('./api/services/spec.service');
const y = require('./api/services/cat.service');
const pubs =  require('./api/services/pub.service')

const URL = 'https://api.apis.guru/v2/list.json?_=1577973649521'; 

axios.get(URL).then(async function (response) {
    let data = response.data; 
    //console.log(Object.keys(data));
    // data is a json object. 
    //data.something.versions[0]
    //swagger url

    let keys = Object.keys(data);
    let catrows ;


    var i;
    //console.log(keys.length);
    
    
    for (i = 0; i < keys.length; i++) {
        let versions = (data[keys[i]].versions);
        let vkeys = Object.keys(versions);
        //let firstV = versions[vkeys[0]];

        let vs = Object.keys(versions).sort();
        let firstV = versions[vs[vs.length-1]]; 

        let catarray = firstV.info["x-apisguru-categories"];
        let cat;
        if (typeof(catarray) == 'undefined') {
            cat = "general";
            console.log(data[keys[i]]);
        } else {
            cat = catarray[0];
        }

        let publisher = firstV.info["x-providerName"];

        /*
        console.log("======================");
        console.log(publisher); 
        console.log(`${cat}`);
        console.log(vs); 
        console.log("\n\n");
        */
        
        await pubs().create(publisher).then(function([reti, isCreated]) {
            y().checkId(cat).then(function([ret, isCreated]) {
                x().createSpecFromUrl(reti.id, ret.id, firstV.swaggerUrl);
            }).catch(

            )
        }).catch(

        );
    }
    
    
    /*
    await pubs().create("general").then(function([reti, isCreated]) {
            y().checkId("financial").then(function([ret, isCreated]) {
                x().createSpecFromUrl(reti.id, ret.id, "https://api.apis.guru/v2/specs/azure.com/network-networkProfile/2019-07-01/swagger.json");
            }).catch(

            )
        }).catch(

        );
    */

})
.catch(function (error) {
    console.log(error);
});