const database = require('../models')


class NivelController{
    static async getAllNiveis(req,res){
        try {
            const todosNiveis = await database.Niveis.findAll()
            return  res.status(200).json(todosNiveis)

        } catch (error) {
                return res.status(500).json(error.message)
        }
    }
    
    static async getOneNivel(req,res){
        const {id} =req.params
        try {
            const oneNivel = await database.Niveis.findOne({
                where:{id:Number(id)}
            })
            return res.status(200).json(oneNivel)
        } catch (error) {
            return res.status(500).json(error.message)    
        }

    }


    static async updateNivel(req,res){
        const {id} = req.params
        const novasInfos =req.body
        try {
            await database.Niveis.update(novasInfos,{ where:{ id:Number(id)} })
            const nivelAtualizado =await database.Niveis.findOne({where:{id:Number(id)}})
            
            return res.status(200).json(pessoaAtualizada)
        } catch (error) {
            
            return res.status(500).json(error.message)   
        }
    }

    static async deleteNivel(req,res){
        const {id} = req.params
        try {
            await database.Niveis.destroy(
                {where:{id:Number(id)}})    
            
            return res.status(200).json({message:`is ${id} deletado`})

        } catch (error) {
            return res.status(500).json(error.message)   
        }
    }
}
module.exports= NivelController