function Home() {
  return <h1>Página inicial</h1>;
}

(function Script() {
  var script = document.createElement("script");
  script.type = "text/javascript";
  script.async = true;
  script.src =
    "https://d2umgtt5tsqx05.cloudfront.net/js/loader-scripts/3396df26-c6c0-4a28-aa1e-963a3e45f483-loader.js";
  document.head.appendChild(script);
})();

// O comando export renderiza o compoente par fora do arquivo, na página. O default define ele como padrão para todas as páginas
export default Home;
