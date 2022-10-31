/*
class informacoesGeraisService{
    constructor(informacoesGerais){
        this.informacoesGerais = informacoesGerais
    }


    async getByID(id){
        try{
            return await this.informacoesGerais.findByID( id, {
                attributes: ['id', 'nome', 'dataDeNascimento', 'cpf', 'email', 'telefone'],
                include: {association: 'user'}
            })

        } catch (err){
            throw new Error(err)
        }
    }


    async create(id, nome, dataDeNascimento, cpf, email, telefone){
        try{



        } catch (err){
            throw new Error(err.message)
        }
    }

}
*/