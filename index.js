var array = [];
function submit() {
var name1 = document.getElementById("name_1").value;
var name2 = document.getElementById("name_2").value;
var name3 = document.getElementById("name_3").value;
var name4 = document.getElementById("name_4").value;

array.push(name1, name2, name3, name4);

document.getElementById("display").innerHTML = array;
}
function sort() {
    array.sort()
    document.getElementById("display").innerHTML = array;
}