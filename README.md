Aqui segue o passo a passo para criar meu primeiro projeto estudando HTML, CSS e Javascript com ajuda de #Alura #DevEmDobro, incentivo da #Rocketseat:

<h3>Segue a montagem do cabeçalho da calculadora no visual HTML:</h3>

<h1><!DOCTYPE html>
<html>
  <head>
Calculadora
  </head>
  <body>
<link rel="stylesheet" href="./src/musculos.css"></h1>

<h3>Aqui mostro como colocar o CSS dentro do HTML</h3>
  
<h5><style>  
    body {
      font-family: "Roboto Mono", monospace;
      min-height: 50px;
      background-image: url("https://cdn.pixabay.com/photo/2018/02/23/19/40/student-3176407_960_720.png");
      background-size: 100vh;
      background-position: center;
      background-repeat: no-repeat;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .container {
      text-align: center;
      padding: 20px;
      height: 100vh;
    }

    .page-title {
      color: #000000;
      margin: 0 0 5px;
      border-bottom: 1px solid #c3c4c5;
    }

    .page-subtitle {
      color: #ffffff;
      font-size: 30px;
      text-align: center;
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-color: #000000;
      border-bottom-left-radius: 8px;
      border-bottom-right-radius: 8px;
      border-radius: 8px;
      margin-top: 30px;
      transition: 0.15s ease-in-out;
      opacity: 0.7;
    }

    .page-logo {
      color: #ffffff;
      font-size: 30px;
      text-align: center;
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-color: #000000;
      padding: 0px 25px;
      width: 200px;
      border-bottom-left-radius: 8px;
      border-bottom-right-radius: 8px;
      border-radius: 8px;
      margin-top: 30px;
      transition: 0.15s ease-in-out;
    }

    .alextec-logo {
      margin-bottom: 50px; /* margem entre os elementos */
      top: 10px;
      bottom: absolute;
      left: 620px;
      right: 0px;
      margin: auto;
      width: 50px;
      height: 50px;
      cursor: pointer;
      display: flex;
      justify-content: space-between;
      margin-bottom: 50px; /* margem entre os elementos */
      position: absolute;
      border-bottom-left-radius: 5px;
      border-bottom-right-radius: 5px;
      border-radius: 5px;
      box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    }

    .alextec-logo:hover {
      transform: scale(1.05);
    }

    .linkedin-logo {
      margin-bottom: 50px; /* margem entre os elementos */
      top: 10px;
      bottom: absolute;
      left: 730px;
      right: 0px;
      margin: auto;
      width: 50px;
      height: 50px;
      display: flex;
      justify-content: space-between;
      cursor: pointer; /* pra colocar um cursor do mouse indicando link */
      position: absolute;
      box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px; /*https://getcssscan.com/css-box-shadow-examples*/
    }

    .linkedin-logo:hover {
      transform: scale(1.05);
    }

    h2 {
      top: 280px;
      bottom: 0;
      left: 0;
      right: 0;
      margin: auto;
      position: absolute;
      color: #ffffff;
      font-size: 30px;
      text-align: center;
      display: flex;
      justify-content: space-around;
      align-content: center;
      background-color: #000000;
      padding: 0px 25px;
      width: 180px;
      height: 110px;
      border-bottom-left-radius: 8px;
      border-bottom-right-radius: 8px;
      border-radius: 8px;
      margin-top: 30px;
      transition: 0.15s ease-in-out;
      opacity: 0.9;
    }
    </style></h5>
  

<h3>Chegamos no cabeçalho da página</h3>
        <div class="container">
<h1 class="page-title">Calculadora de média</h1>
<p class="page-subtitle">Calcule sua sua média final de todas as provas!</p>
<h2 id="valorConvertido"></h2>
    </div>

        <a href="https://github.com/Paulina-AxxTec" target="_blank">
            
            <img src="https://avatars.githubusercontent.com/u/69440895?s=400&u=f55990b981f9a90bbc8f496618e673ffb22cdbe0&v=4" alt="Link para GitHub" class="alextec-logo">
        
        <a href="https://www.linkedin.com/in/paulina-moreno-5692627a/" target="_blank">
           
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" alt="Link para Linkedin" class="linkedin-logo">

                <script>
                    var nome = "Alex";
                    var notaDoPrimeiroBimestre = prompt("Digite a nota do 1º Bim: ");
                    var notaDoSegundoBimestre = prompt("Digite a nota do 2º Bim: ");
                    var notaDoTerceiroBimestre = prompt("Digite a nota do 3º Bim: ");
                    var notaDoQuartoBimestre = prompt("Digite a nota do 4º Bim: ");

                    var convertido1bim = parseInt(notaDoPrimeiroBimestre);
                    console.log(convertido1bim); // 10
                    console.log(typeof convertido1bim); // Number

                    var convertido2bim = parseInt(notaDoSegundoBimestre);
                    console.log(convertido2bim); // 10
                    console.log(typeof convertido2bim); // Number

                    var convertido3bim = parseInt(notaDoTerceiroBimestre);
                    console.log(convertido3bim); // 10
                    console.log(typeof convertido3bim); // Number

                    var convertido4bim = parseInt(notaDoQuartoBimestre);
                    console.log(convertido4bim); // 10
                    console.log(typeof convertido4bim); // Number

                    var notaFinal = ((convertido1bim + convertido2bim + convertido3bim + convertido4bim) / 4)

                    var notaFinalTotal = document.getElementById("valorConvertido");

                    console.log("Bem-vindo, " + nome + "!");
                    console.log("Sua nota final é " + notaFinal);

                    if (notaFinal >= 7) {
                        notaFinalTotal.innerHTML = "O Aluno " + nome + " foi APROVADO!";
                    }

                    else {
                        notaFinalTotal.innerHTML = nome + ", infelizmente não foi dessa vez... ";
                    }  
                </script>
</body>

</html>
  
FIM!
