import database from "../../../../infra/database.js";

// objeto request trata do que o mundo de fora está entrando na aplicação. response trata do que vai ser respondido para fora
async function status(request, response) {
  const result = await database.query("SELECT 1 + 1 as sum;");
  console.log(result.rows);
  response.status(200).json({ chave: "são acima da média" });
}

// indica que a função status é a entrada do endpoint. o defaulta indica que ela é a função de entrada responsável por lidar com request e response
export default status;
