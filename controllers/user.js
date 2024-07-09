const User = require('../models/user');

async function handleGetAllUsers(req, res) {
    const allDbUsers = await User.find();
    return res.json(allDbUsers);
}

async function getUserById(req, res) {
    const user = await User.findById((req.params.id));
    return res.send(user);
}

async function deleteUserById(req, res) {
    await User.findByIdAndDelete(req.params.id);
    return res.status(200).json("success");
}

async function createNewUser(req, res) {
    {
        const body = req.body;
        if (!body.first_name ||
            !body.email ||
            !body.gender ||
            !body.job_title
        ) {
            return res.status(400).json('All fields are necessary');
        }
        const result = await User.create({
            first_name: body.first_name,
            last_name: body.last_name,
            email: body.email,
            gender: body.gender,
            job_title: body.job_title
        })
        return res.status(201).json('Success');
    }
}

module.exports = {
    handleGetAllUsers,
    getUserById,
    deleteUserById,
    createNewUser
};