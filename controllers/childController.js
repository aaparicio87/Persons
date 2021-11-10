const Childs = require('../models/Childs');
const Persons = require('../models/Persons');

module.exports = {
    async addChild(req, res){
        let { name, personId }= req.body;
        
        try {
            await Childs.create({ name:name, PersonId: personId });
            return res.status(200).json({msg: 'Child created'});    
        } catch (error) {
            return res.status(500).json({ error: error.message })  
        }
    },

    async showChild(req, res){
        let { uuid }= req.body;
        try {
            let child = await Colors.find({ where: { uuid: uuid } })
            res.json(child);
        } catch (error) {
            return res.status(500).json({ error: error.message })
        }
    },
    async updateChild(req, res){
        const { uuid } = req.params;
        const { name, personId } = req.body;

        try {
            await Childs.update({ name: name, PersonId: personId }, { where: { uuid: uuid } });
            res.json({ msg: 'Child Updated' });
        } catch (error) {
            return res.status(500).json({ error: error.message })
        }
    },

    async deleteChild(req, res){
        const { uuid } = req.params;
        try {
            await Childs.destroy({ where: { uuid: uuid }});
            res.json({ msg: 'Child Deleted' });
        } catch (error) {
            return res.status(500).json({ error: error.message })
        }
    }
}