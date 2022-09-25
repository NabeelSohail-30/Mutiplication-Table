function generateTable() {
    let number = Number(document.querySelector("#multiplier").value);
    let range = Number(document.querySelector("#range").value);
    let result = "";

    for(let i=0; i <= range; i++){
        result = result + "<p>" +number + " * " + i + " = " + number * i + "</p>";
        console.log('\n ${number} * ${range} = ${number*i}');
    }
    
    document.querySelector("#table").style.display = "block";
    document.querySelector("#table").innerHTML = result;
}
