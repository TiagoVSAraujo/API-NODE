import { sql } from './db.js'

/* sql `DROP TABLE IF EXISTS videos;`.then(() => {
    console.log('Tabela Deletada')
}).catch((error) => {           
    console.error('Erro ao deletar a tabela:', error);
}); */
sql`
  CREATE TABLE videos (
     id          UUID PRIMARY KEY,
     title       TEXT,
     description TEXT,
     duration    INTEGER     
  );
`.then(() => {
    console.log('Tabela Criada')
}).catch((error) => {
    console.error('Erro ao criar a tabela:', error);
});