let storage = window.localStorage;
storage.setItem("police", 18);

let storage2 = window.localStorage;
storage2.setItem("type", "Material");

let storage3 = window.localStorage;
storage3.setItem("theme", "Black");

let value = storage.getItem("police");
console.log(value);

let value2 = storage.getItem("type");
console.log(value2);

let value3 = storage.getItem("theme");
console.log(value3);

function afficheText() {
    document.getElementById("result").innerHTML = "Le thème de l'utilisateur est " + value3;
    console.log("Thème " + value3 + ", type " + value2 + " et " + "police de caractères " + value + " px");
}

afficheText()

storage.setItem("police", 32);

storage2.setItem("type", "Coton");

storage3.setItem("theme", "Red");

afficheText();