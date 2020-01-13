const Publisher = require('../models/Publisher');


const PubsService = () => {
  const create = async (nm) => {
    try {
    return await Publisher.findOrCreate({
        where: {
          name: nm,
        },
        defaults: {
          created_by: 1,
          updated_by: 1,
        }
      });
    }
    catch (err) {
      console.log(err);
    }
  }

    
  
 
  return {
    create,
  };
};

module.exports = PubsService;
