function NewTask () {
    var li = document.createElement("li");
    var inputValue = document.getElementById("main__input").value;
    var texto = document.createTextNode(inputValue);
    li.appendChild(texto);

    if (inputValue === ' ') {
        alert("Please write something");
    } else {
        document.getElementById("main__lista").appendChild(li);
    }

    document.getElementById("main__input").value = " ";
}