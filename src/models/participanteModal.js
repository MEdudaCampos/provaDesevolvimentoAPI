import conn from "../config/conn.js"

const tableParticipantes = /*sql*/ `
CREATE TABLE IF NOT EXISTS participantes(
participante_id VARCHAR(60) PRIMARY KEY, 
nomeParticipanteVARCHAR(255) NOT NULL, 
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP, 
updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
`
conn.query(tableParticipantes, (err, result, field) => {
    if (err) {
        console.error("Erro ao criar a tabela" + err.stack)
        return
    }

    console.log("Tabela [Participantes] criada com sucesso")
})