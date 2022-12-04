var degree = document.getElementById("degree");
var type = document.getElementById("type");
var result = document.getElementById("result");

function convert() {
  let t = type.value;
  let d = degree.value;

  if (t == "Fahrenheit") {
    let r = (d - 32) * (5 / 9);
    if (!Number.isInteger(r)) {
      r = r.toFixed(4);
    }
    result.innerHTML = r + " 'C";;

  }
  if (t == "Celsius") {
    let r = d * (9 / 5) + 32;
    if (!Number.isInteger(r)) {
      r = r.toFixed(4);
    }
    result.innerHTML = r + " 'F";
  }
}