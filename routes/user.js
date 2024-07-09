const express = require("express");
const router = express.Router();
const { handleGetAllUsers, getUserById, deleteUserById, createNewUser } = require('../controllers/user')


router.get('/', handleGetAllUsers);


router.get('/:id', getUserById)
    .post('/', createNewUser);


router.delete('/:id', deleteUserById)
    .patch('/:id', (req, res) => {
        const id = req.params.id;
        const fname = req.body.first_name;
        users.map(user => { if (user.id == id) user.first_name = fname });
        fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err, data) => {
            return res.json({ status: "success" });
        });
    });

module.exports = router;