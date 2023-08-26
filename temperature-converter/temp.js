
let tempload = () => {
    temph = document.getElementById("tempico")
    temph.innerHTML = "&#127777";

    setTimeout(() => {
        temph.innerHTML = "°C";
    }, 1000);

    setTimeout(() => {
        temph.innerHTML = "°F";
    }, 2000);

}

tempload();

setInterval(() => {
    tempload();
}, 3000);

let Temperature = () => {
    const tempvalue = document.getElementById("input").value;
    const optiontype = document.getElementById("temptype");
    const valuetype = temptype.options[optiontype.selectedIndex].value;

    const fahrenheit = (cel) => {
        let tempcal = Math.round((cel * 9 / 5) + 32);
        return tempcal;
    }
    const celsius = (feh) => {
        let temdata = Math.round((feh - 32) * 5 / 9);
        return temdata;
    }
    
    let resultvalue;
    if (valuetype == 'cel') {
        resultvalue = fahrenheit(tempvalue);
        document.getElementById("result").innerHTML = `= ${resultvalue}°F`;
    }
    else {
        resultvalue = celsius(tempvalue);
        document.getElementById("result").innerHTML = `= ${resultvalue}°C`;
    }

}

let Reset=()=>{
    document.getElementById("result").innerHTML = "";
}
