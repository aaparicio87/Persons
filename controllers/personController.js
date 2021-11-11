const Persons = require('../models/Persons');
const Childs = require('../models/Childs');
const sequelize = require('../config/db');

module.exports = {

    async addPerson(req, res){
        let { firstName, lastName, gender, age, married }= req.body;
        try {
                Persons.create({
                    firstName: firstName,
                    lastName: lastName,
                    gender: gender,
                    age: age,
                    married: married
                });
                return res.status(200).json({msg: 'Person created'});

        } catch (error) {
            return res.status(500).json({ error: error.message }) 
        }
    },

    async showPersons(req, res){
        try {
            const persons = await Persons.findAll({
                attributes: { include: [[sequelize.fn('COUNT', sequelize.col('Childs.PersonId')), 'no_childs']] },
                include: { model: Childs, attributes: [], required: false }
            })
            return res.status(200).json({ persons: persons });
        } catch (error) {
            return res.status(500).json({ error: error.message })
        }
    },

    async showPerson(req, res){
        const { uuid } = req.params;
        try {
            let person = await Persons.findOne({ 
                where : { uuid: uuid } , include: { model:Childs, required: true }
            });
            if (!person){
                res.json({msg: 'Person does not exist'});
            }
            res.json(person);
        } catch (error) {
            return res.status(500).json({ error: error.message })
        }
    },

    async updatePerson(req, res){
        const { uuid } = req.params;
        const { firstName, lastName, gender, age, married } = req.body;
        
        try {
            await Persons.update(
                {
                    firstName: firstName,
                    lastName: lastName,
                    gender: gender,
                    age: age,
                    married: married
                },
                { where: { uuid: uuid } }
            )
            res.json({ msg: 'Person Updated' });
        } catch (error) {
            return res.status(500).json({ error: error.message })
        }
    },

    async deletePerson(req, res){
        const { uuid } = req.params;
        try {
            await Persons.destroy({ where: { uuid: uuid }});
            res.json({ msg: 'Person Deleted' });
        } catch (error) {
            return res.status(500).json({ error: error.message })
        }
    }
}