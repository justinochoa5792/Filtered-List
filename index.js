let filterInput = document.getElementById("filterInput");
let ul = document.getElementById("name");
let li = ul.querySelectorAll("li.collection-item");

filterInput.addEventListener("keyup", filterNames);

function filterNames() {
  let filterValue = document.getElementById("filterInput").value.toUpperCase();

  for (let i = 0; i < li.length; i++) {
    let a = li[i].getElementsByTagName("a")[0];

    if (a.innerHTML.toUpperCase().indexOf(filterValue) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}
