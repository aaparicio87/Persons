const Users = require('../models/Users');

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth');

module.exports = {

    // Login
    async signIn(req, res) {

        let { email, password } = req.body;

        try {
            const user = await Users.findOne({ where: { email: email } });
            if (!user) {
                res.status(404).json({ msg: "User with this mail does not exist" });
            } else {

                if (bcrypt.compareSync(password, user.password)) {

                    // Create a token
                    let token = jwt.sign({ user: user }, authConfig.secret);

                    res.json({
                        accessToken: token
                    })

                } else {
                    // Unauthorized Access
                    res.status(401).json({ msg: "Invalid Password" })
                }

            }

        } catch (error) {
            res.status(500).json({ err: error });
        }
    },

    // Registro
    async signUp(req, res) {
        const { email, password} = req.body;

        // Encrypt Pass
        let passw = bcrypt.hashSync(password, Number.parseInt(authConfig.rounds));
        try {
            const user = await Users.create({
                email: email,
                password: passw
            });
            
            let token = jwt.sign({ user: user }, authConfig.secret);

            return res.status(200).json({ user: user, accessToken: token });

        } catch (error) {
            res.status(500).json({ err: error });
        }
    }
}