const Comment = require('../models/Comment.js');
const authService = require('../services/auth.service');
const bcryptService = require('../services/bcrypt.service');


const CommentController = () => {
  const comm = async (req, res) => {
    const { body } = req;
    //console.log("point rreached!");
    
    try {
      console.log("cappa");

      const comment = await Comment.create({
        /*openapi_spec_id: 100,
        *comments: body.comments,
        *created_ip:	,
        *created_by: ,
        */
        openapi_spec_id: body.apiId,
        comments: body.comments,
        created_ip: req.ip,
        //email: body.email,
        //name: body.name,
        //web_address: body.web,
        //oint_of_contact: body.contact,
      });
      const token = authService().issue({ id: comment.id });
      //console.log(user);
     return res.status(200).json({ msg: 'Success!' });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ msg: 'Internal server error' });
    }
    
   return res.status(500).json({ msg: 'Internal server error' });
  };

  const getComments = async (req, res) => {
    try {
      const comments = await Comment.findAndCountAll({
        where: {
          openapi_spec_id: req.params.id
        }
      });

      console.log(comments.count);
      return res.status(200).json({
        total: comments.count,
        comments: comments.rows});
    } catch (err) {
      console.log(err);
      return res.status(500).json({ msg: 'Internal server error' });
    }
  };

  


  return {
    comm,
    getComments
  };
};

module.exports = CommentController;
