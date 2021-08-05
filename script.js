const author = document.querySelector("#author")
const calculation = document.querySelector("#calculation")
const btn_toggle = document.querySelector("#toggle");
const length = document.getElementById('length')
const color = document.querySelector('#color')
const btn_search = document.getElementById('search')
const btn_reset = document.getElementById('reset')
const text = document.getElementById('text')



// define more constants and variables here

const defcolor = color.value
const str = text.innerHTML

author.innerHTML = "630610764 Siriwat Songwattana"

btn_toggle.onclick = () => {
  if(btn_toggle.innerHTML === "Show Calculation"){
    calculation.innerHTML = 630610764 + parseInt(length.value)
    btn_toggle.innerHTML = "Show Author"
    author.innerHTML = ""
  }else{
    btn_toggle.innerHTML = "Show Calculation"
    author.innerHTML = "630610764 Siriwat Songwattana"
    calculation.innerHTML = ""
  }
}

// more codes for Search and Reset buttons here


btn_search.onclick = () => {
  
  let textspan = ""
  const words = str.split(" ");

  for(let i = 0; i < words.length; i++){
    if(words[i].length >= length.value){
      words[i] = "<span style='color:"+ color.value+ "'>" + words[i] + "</span>";
    }
  }

  for(let i = 0; i < words.length; i++){
    textspan += words[i] + " ";
  }

    text.innerHTML = textspan;
}




btn_reset.onclick = () => {
  text.innerHTML = str;
  length.value = 5
  color.value = defcolor;
}

