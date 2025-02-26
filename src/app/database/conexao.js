import mysql from 'mysql'

const conexao = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: 'admin',
    database: 'bdcopa'
})

conexao.connect();

/**
 * Executa um código SQL com ou sem valores
 * @param {string} sql instrução sql a ser executada
 * @param {string=id | [selecao, id]} valores valores a serem passados para o SQL
 * @param {*} mensagemReject mensagem a ser exibida
 * @returns object da Promisse
 */

export const consulta = (sql, valores='', mensagemReject) => {
    return new Promise((resolve, reject) => {
        conexao.query(sql, valores, (error, result) => {
            if(error) return reject(mensagemReject)
            const row = JSON.parse(JSON.stringify(result))
            return resolve(row)
        })
    })
}

export default conexao