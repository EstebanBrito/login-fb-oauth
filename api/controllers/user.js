const User = require('../models/user')
const {createToken, isValidPassword} = require('../../utils/services')


async function getAllUsers(req, res) {
  const allUsers = await User.findAll()

  res.status(200).send({users: allUsers})
}


async function signUp(req, res) {
  //Verify if there is already a local user
  const existingUser = User.findOne({
    where: {
      "local.email": req.body.email
    }
  })
  //Return error if true
  if(existingUser){
    return res.status(403).send({message: 'Email is already in use'})
  }
  //Otherwise, create a new user
  const newUser = Object.assign({}, {
    local: {
      email: req.body.email,
      password: encryptPassword(req.body.password)
    }
  })
  const createdUser = await User.create(newUser);
  //Send token if all is OK
  res.status(200).send({token: await createToken(createdUser.uuid)})
}


async function signIn(req, res){
  //Verify if there is already a local user
  const existingUser = User.findOne({
    where: {
      "local.email": req.body.email
    }
  })
  //Return error if false
  if(!existingUser){
    return res.status(401).send({message: 'No account associated with that email'})
  }
  //If password don't match, send error
  if(!isValidPassword(req.body.password)){
    return res.status(401).send({message: 'Incorrect password'})
  }
  //Send token if all is OK
  res.status(200).send({token: createToken(existingUser.uuid)})
}


module.exports = {
  getAllUsers,
  signUp,
  signIn
}