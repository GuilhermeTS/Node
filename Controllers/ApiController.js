require('dotenv').config({
    path: process.env.NODE_ENV === "test" ? "env.testing" : ".env"
  });

module.exports = {
    async verificador_auth(token){
        const chave = process.env.SECRET_API;
        return chave;
    }
}