// objeto request trata do que o mundo de fora está entrando na aplicação. response trata do que vai ser respondido para fora
function status(request, response) {
  response.status(200).json({ chave: "são acima da média" });
}

// indica que a função status é a entrada do endpoint. o defaulta indica que ela é a função de entrada responsável por lidar com request e response
export default status;
