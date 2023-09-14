const addBtn = document.getElementById("add");
const table = document.getElementById("table");
let items = [];


addBtn.addEventListener("click", (e) => {
    const text = document.getElementById("text").value;
    if (text == "") {
        alert("Please Write anything in Text Box!!");
    }
    else {
        if(localStorage.length != 0){
            items = JSON.parse(localStorage.TODO)
        }
        items.push(text);
        localStorage.setItem("TODO", JSON.stringify(items));
        // document.getElementById("text").value = "";
    }
    location.reload();

});

display();

const cut = document.getElementById("cut");

function display() {
    const item = JSON.parse(localStorage.TODO)
    for (var i = 0; i < item.length; i++) {
        let data = document.createElement("div")
        data.classList.add('data');

        data.innerHTML = `<input id="check" class="check" type="checkbox" name="checkbox" value="yes">
<span id="todo" class="hide_wrap">`+ (item[i]) + `</span>
<img id="cut" onclick="deleteItem(`+i+`)" class="cut" src="Assets/cut.png" alt="">`
        table.appendChild(data);
    }
}

function deleteItem(e){
    const item = JSON.parse(localStorage.TODO)
    var newItems = [];
    for(var i = 0 ; i < item.length ; i++ ){
        if(i !== e){
            newItems.push(item[i])
        }
    }
    localStorage.setItem("TODO",JSON.stringify(newItems));
    location.reload();
}