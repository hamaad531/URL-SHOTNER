const User = require('../models/user');

async function handleUserSignUp(req, res) {
    const { name, email, password } = req.body;
    await User.create({
        name,
        email,
        password,
    });
    return res.redirect("/");
    //return res.render("home");
}

module.exports = {
    handleUserSignUp,
}