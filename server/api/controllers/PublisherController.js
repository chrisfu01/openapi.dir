const Publisher = require('../models/Publisher.js');
const authService = require('../services/auth.service');
const bcryptService = require('../services/bcrypt.service');


const PublisherController = () => {
  const register = async (req, res) => {
    const { body } = req;
    //console.log("point rreached!");
    

    
    try {
      const user = await Publisher.create({
        email: body.email,
        name: body.name,
        web_address: body.web,
        point_of_contact: body.contact,
      });
      const token = authService().issue({ id: user.id });
      console.log(user);

     return res.status(200).json({ msg: 'Success!' });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ msg: 'Internal server error' });
    }
    
   return res.status(500).json({ msg: 'Internal server error' });
  };

  const login = async (req, res) => {
    const { email, password } = req.body;

    if (email && password) {
      try {
        const user = await User
          .findOne({
            where: {
              email,
            },
          });

        if (!user) {
          return res.status(400).json({ msg: 'Bad Request: User not found' });
        }

        if (bcryptService().comparePassword(password, user.password)) {
          const token = authService().issue({ id: user.id });

          return res.status(200).json({ token, user });
        }

        return res.status(401).json({ msg: 'Unauthorized' });
      } catch (err) {
        console.log(err);
        return res.status(500).json({ msg: 'Internal server error' });
      }
    }

    return res.status(400).json({ msg: 'Bad Request: Email or password is wrong' });
  };

  const validate = (req, res) => {
    const { token } = req.body;

    authService().verify(token, (err) => {
      if (err) {
        return res.status(401).json({ isvalid: false, err: 'Invalid Token!' });
      }

      return res.status(200).json({ isvalid: true });
    });
  };

  const getAll = async (req, res) => {
    try {
      const result = await Publisher.findAndCountAll(
        {
        attributes: ['id', 'name', 'description'], 
          offset: offset,
          limit: 10, 
          include: [{
            as: 'category',
            model: Category,
          }]
    });

      return res.status(200).json({ publishers: result.rows, total: result.count});
    } catch (err) {
      console.log(err);
      return res.status(500).json({ msg: 'Internal server error' });
    }
  };



  return {
    register,
    login,
    validate,
    getAll,
  };
};

module.exports = PublisherController;
