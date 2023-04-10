//get digimon database
fetch("https://digimon-api.vercel.app/api/digimon")
  .then((response) => response.json())
  .then((digimonAll) => {
    //getting digimon names
    let digiList = [];
    for (let j = 0; j < digimonAll.length; j++) {
      digiList.push(digimonAll[j].name);
    }
    //creating dropdown list with digimon names
    let select = document.getElementById("digilist");
    for (i = 0; i < digiList.length; i++) {
      let opt = digiList[i];
      let el = document.createElement("option");
      el.textContent = opt;
      el.value = opt;
      select.appendChild(el);
    }
    //use btn to bring digimon info
    let digiBtn = document.getElementById("digibtn");
    let digiImg = document.getElementById("digimg");
    let digiName = document.getElementById("diginame");
    let digiLvl = document.getElementById("digilevel");
    let digiRandom = document.getElementById("digibtnrandom");
    let digiDisplayCard = document.getElementById("digi-info-card");
    let digiBrand = document.getElementById('brand')

    digiBtn.addEventListener("click", () => {
      digiImg.setAttribute(
        "src",
        digimonAll[digiList.indexOf(select.value)].img
      );
      digiName.innerHTML = "<strong>Nombre:&nbsp </strong>" + digimonAll[digiList.indexOf(select.value)].name;
      digiLvl.innerHTML = "<strong>Nivel:&nbsp </strong>" + digimonAll[digiList.indexOf(select.value)].level;
      digiBrand.style.display = "none";
      digiDisplayCard.style.display = "block";
    });

    //  random digimon
    digiRandom.addEventListener("click", () => {
      let randomNum = Math.floor(Math.random() * 210); // there are 209 digimons
      digiImg.setAttribute("src", digimonAll[randomNum].img);
      digiName.innerHTML = "<strong>Nombre:&nbsp</strong>" +digimonAll[randomNum].name;
      digiLvl.innerHTML = "<strong>Nivel:&nbsp</strong>" +digimonAll[randomNum].level;
      digiDisplayCard.style.display = "block";
      digiBrand.style.display = "none";
    });
  });
