const Tags = require('../models/Tag');


const TagsService = () => {
  const create = async (spc, tags) => {
    try {
        var i;
        for (i = 0; i < tags.length; i++) {
            await Tags.findOrCreate({
                where: {
                  tag: tags[i],
                  openapi_spec_id: spc,
                },});    
        }
    }
    catch (err) {
      console.log(err);
    }
  }

    
  
 
  return {
    create,
  };
};

module.exports = TagsService;
