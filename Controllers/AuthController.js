const ApiController = require('./ApiController');
const connection    = require('../Database/connection');

module.exports = {
    async index(req, res){
        
        const token = req.headears.authorization;

        const verificador = ApiController.verificador_auth(token);

        if(verificador){
            const { login, senha } = verificador;
            const [result] = await connection('login')
            .where({
                login: login,
                senha: senha
            })
            .first()
            .select(['login', 'senha']);
            return res.status(200).json({"status": 200, "token": ""});
        }else{
            return res.status(400).json({"status": 400, "message": "Token inválido"});
        }
    }
}