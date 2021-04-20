const database = require('../models')


class TurmaController{
    static async getAllTurmas(req,res){
        try {
            const todasAsTurmas = await database.Turmas.findAll()
            return res.status(200).json(todasAsTurmas)
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async getOneTurma(req,res){
        const {id} =req.params
        try {
            const oneNivel = await database.Turmas.findOne({
                where:{id:Number(id)}
            })
            return res.status(200).json(oneNivel)
        } catch (error) {
            return res.status(500).json(error.message)    
        }

    }


    static async updateTurma(req,res){
        const {id} = req.params
        const novasInfos =req.body
        try {
            await database.Turmas.update(novasInfos,{ where:{ id:Number(id)} })
            const nivelAtualizado =await database.Turmas.findOne({where:{id:Number(id)}})
            
            return res.status(200).json(pessoaAtualizada)
        } catch (error) {
            
            return res.status(500).json(error.message)   
        }
    }

    static async deleteTurma(req,res){
        const {id} = req.params
        try {
            await database.Turmas.destroy(
                {where:{id:Number(id)}})    
            
            return res.status(200).json({message:`is ${id} deletado`})

        } catch (error) {
            return res.status(500).json(error.message)   
        }
    }
}
module.exports =TurmaController