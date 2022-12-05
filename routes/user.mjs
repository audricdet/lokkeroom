import express from 'express'

const router = express.Router()

// Home

router.get( '/' , function(req, res) {
    res.json(['HOME'])
})

/*
// Register 

router.post( '/register' , registerUser )

// Login 

router.post( '/login' , loginUser )

// get lobby

router.get ( '/lobby/[lobby-id]' , getLobby )

// Get one message

router.get ( '/lobby/[lobby-id]/[message-id]' , getOneMessage )

// Post a message in the lobby

router.post( '/lobby/[lobby-id]' , postOneMessage )

// Get all users from lobby 

router.get( '/users' , getAllUsers )

// Get one user 

router.get ( '/users/[user-id]' , getOneUser )

// Add user to the lobby 

router.post( '/lobby/[lobby-id]/add-user' , addOneUser )

// Remove one user

router.post( '/lobby/[lobby-id]/remove-user' , removeOneUser )

// Edit one message 

router.patch( '/api/lobby/[message-id]' , editOneMessage )

// Delete one message

router.delete( '/api/messages/[message-id]' , removeOneMessage )
*/

export default router
