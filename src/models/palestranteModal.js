import conn from "../config/conn.js"

const tablePalestrantes = /*sql*/ `
CREATE TABLE IF NOT EXISTS parlestrantes(
palestrante_id VARCHAR(60) PRIMARY KEY, 
nomePalestrante VARCHAR(255) NOT NULL, 
expertise VARCHAR(255) NOT NULL,
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP, 
updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
`
conn.query(tablePalestrantes, (err, result, field) => {
    if (err) {
        console.error("Erro ao criar a tabela" + err.stack)
        return
    }

    console.log("Tabela [Palestrantes] criada com sucesso")
})