const database = require('../models')


class PessoaControler{
    /**Metodo para get em todas as pessoas */
    static async getAllPessoas(req,res){
        try {
            const todasPessoas = await database.Pessoas.findAll()
            return  res.status(200).json(todasPessoas)

        } catch (error) {
                return res.status(500).json(error.message)
        }
    }
    /**metodo para localizar uma pessoa baseado no id */
    static async getOnePessoa(req,res){
        const {id} =req.params
        try {
            const onePessoa = await database.Pessoas.findOne({
                where:{id:Number(id)}
            })
            return res.status(200).json(onePessoa)
        } catch (error) {
            return res.status(500).json(error.message)    
        }

    }
    /**metodo para criar uma pessoa */
    static async createPessoa(req,res){
        const novaPessoa=req.body
        try {
            const novaPessoaCriada = await database.Pessoas.create(novaPessoa)
            return status(200).json(novaPessoaCriada)

        } catch (error) {
            return res.status(500).json(error.message)    
        }
    }

    static async updatePessoa(req,res){
        const {id} = req.params
        const novasInfos =req.body
        try {
            await database.Pessoas.update(novasInfos,{ where:{ id:Number(id)} })
            const pessoaAtualizada =await database.Pessoas.findOne({where:{id:Number(id)}})
            
            return res.status(200).json(pessoaAtualizada)
        } catch (error) {
            
            return res.status(500).json(error.message)   
        }
    }

    static async deletePessoa(req,res){
        const {id} = req.params
        try {
            await database.Pessoas.destroy(
                {where:{id:Number(id)}})    
            
            return res.status(200).json({message:`is ${id} deletado`})

        } catch (error) {
            return res.status(500).json(error.message)   
        }
    }


}
module.exports = PessoaControler

