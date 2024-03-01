function exibirImagem() {
    const select = document.getElementById("membros");
    const selectedValue = select.value;
    const imagemContainer = document.getElementById("imagem-container");
  
    if (selectedValue === "nome0") {
      imagemContainer.innerHTML = '<img src="./src/img/32card.png" alt="32">';
    } else if (selectedValue === "nome1") {
        imagemContainer.innerHTML = '<img src="./src/img/katoricard.png" alt="Mascadajino">';
    } else if (selectedValue === "nome2") {
        imagemContainer.innerHTML = '<img src="./src/img/cairicard.png" alt="Altair">';
    } else if (selectedValue === "nome3") {
      imagemContainer.innerHTML = '<img src="./src/img/plaguecard.png" alt="Plague">';
    } else if (selectedValue === "nome4") {
      imagemContainer.innerHTML = '<img src="./src/img/dragaocard.png" alt="Dragao">';
    } else if (selectedValue === "nome5") {
      imagemContainer.innerHTML = '<img src="./src/img/futurocard.png" alt="Futuro">';
    } else if (selectedValue === "nome6") {
      imagemContainer.innerHTML = '<img src="./src/img/mascadacard.png" alt="Mascada">';
    } else if (selectedValue === "nome7") {
      imagemContainer.innerHTML = '<img src="./src/img/mikoncard.png" alt="Mikon">';
    } else if (selectedValue === "nome8") {
      imagemContainer.innerHTML = '<img src="./src/img/noracard.png" alt="Nora">';
    } else if (selectedValue === "nome9") {
      imagemContainer.innerHTML = '<img src="./src/img/pablocard.png" alt="Pablo">';
    } else if (selectedValue === "nome10") {
      imagemContainer.innerHTML = '<img src="./src/img/semicard.png" alt="Semi">';
    } else if (selectedValue === "nome11") {
      imagemContainer.innerHTML = '<img src="./src/img/sunshinecard.png" alt="Sunshiner">';
    } else if (selectedValue === "nome12") {
      imagemContainer.innerHTML = '<img src="./src/img/sakutacard.png" alt="Sakuta">';
    } else if (selectedValue === "nome13") {
      imagemContainer.innerHTML = '<img src="./src/img/torrithcard.png" alt="Torrith">';
    } else if (selectedValue === "nome14") {
      imagemContainer.innerHTML = '<img src="./src/img/unoxyacard.png" alt="Unoxya">';
    } else {
      imagemContainer.innerHTML = "Nenhuma Imagem Selecionada.";
    }
  }
  