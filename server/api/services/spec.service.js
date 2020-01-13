const SwaggerParser = require('swagger-parser');
const authService = require('../services/auth.service');
const Spec = require('../models/Spec');


const specService = () => {
  const createSpecFromUrl = async (pubid, categoryId, url) => {
    SwaggerParser.validate(url, async (err, api) => {
      try {
        if (!api) {
          console.log("///////////////////////////");
          console.log(url);
          console.log(err);
          console.log("///////////////////////////");
        }
        const data = await Spec.create({
          name: api.info.title,
          description: (typeof (api.info.description) != "undefined") ? api.info.description.substring(0, 1000) : null,
          //spec: SwaggerParser.YAML.stringify(api),
          version: api.info.version,
          source_repository: (typeof (api.info["x-origin"]) != "undefined" && typeof (api.info["x-origin"].url) != "undefined") ? api.info["x-origin"].url : null,
          avatar_url: (typeof (api.info["x-logo"]) != "undefined" && typeof (api.info["x-logo"].url) != "undefined") ? api.info["x-logo"].url : null,
          spec_url: url,
          category_id: categoryId,
          publisher_id: pubid
        });
        //const token = authService().issue({ id: data.id });
      } catch (err) {
        console.log("======================================");
        console.log(url);
        console.log(err);
        console.log("======================================");
      }
    })



  }

  return {
    createSpecFromUrl,
  };
};

module.exports = specService;