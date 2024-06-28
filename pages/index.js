import React, { useEffect } from "react";

function Home() {
  useEffect(() => {
    // Cria um novo elemento script
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;
    script.src =
      "https://d2umgtt5tsqx05.cloudfront.net/js/loader-scripts/3396df26-c6c0-4a28-aa1e-963a3e45f483-loader.js";

    // Adiciona o script ao head do documento
    document.head.appendChild(script);

    // Remove o script quando o componente é desmontado (opcional)
    return () => {
      document.head.removeChild(script);
    };
  }, []); // O array vazio garante que o efeito execute apenas uma vez, quando o componente é montado

  return <h1>Página inicial</h1>;
}

// O comando export renderiza o componente para fora do arquivo, na página. O default define ele como padrão para todas as páginas
export default Home;
