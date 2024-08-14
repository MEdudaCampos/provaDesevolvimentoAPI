import conn from '../config/conn.js';
import { v4 as uuidv4 } from 'uuid';

export const getPaletrantes = (request, response) => {
    const sql = /*sql*/`SELECT * FROM parlestrantes`;
    conn.query(sql, (err, data) => {
        if (err) {
            console.error(err)
            response.status(500).json({ message: "Erro ao buscar palestrantes" })
            return
        }
        const palestrantes = data
        response.status(200).json(palestrantes)
    })
}

export const criarPalestrantes = (request, response) => {
    const { nome, expertise } = request.body

    if (!nome) {
        response.status(400).json({ message: "O nome é obrigatorio" })
        return
    }
    if (!expertise) {
        response.status(400).json({ message: "O expertise é obrigatorio" })
        return
    }

    const checkSql = /*sql*/ `SELECT * FROM funcionarios WHERE ?? = ? AND ?? = ? AND ?? = ?`
    const checkSqlData = ["nome", nome, "expertise", expertise]

    conn.query(checkSql, checkSqlData, (err, data) => {
        if (err) {
            response.status(500).json({ message: "Erro ao casdastar palestrante" })
            return console.log(err);
        }

        if (data.length > 0) {
            response.status(409).json({ message: "Esse palestrante já está cadastrado" });
            return console.log(err);
        }
    })

    const id = uuidv4()

    const insertSql = /*sql*/`INSERT INTO palestrantes (??, ??, ??) VALUES (?, ?, ?)`
    const insertData = ["palestrante_id", "nome", "expertise", id, nome, expertise]

    conn.query(insertSql, insertData, (err)=>{
        if(err){
            response.status(500).json({message:"Erro ao cadastrar palestrante"}); 
        }
        response.status(201).json({message:"Palestrante cadastrado"})
    })
}