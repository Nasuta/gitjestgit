var default_color;
function mouseIn() {
  default_color = document.changecolorbutton.but.style.background;
  document.changecolorbutton.but.style.background = "red";
}
function mouseOut() {
  document.changecolorbutton.but.style.background = default_color;
}
function gotoURL() {
    location.href = "https://google.com";

}


function go(addr) {
    window.open(addr,"MyWin", "menubar=yes,width=1024,height=768");
  }


  function showOrHide(cb, cat) {
    cb = document.getElementById(cb);
    cat = document.getElementById(cat);
    if (cb.checked) cat.style.display = "block";
    else cat.style.display = "none";
  }


  function animateText(id, text, i) {
    document.getElementById("dynamic-text").innerHTML = text.substring(0, i);
    i++;
    if (i > text.length) i = 0;
    setTimeout("animateText('" + id + "','" + text + "'," + i + ")", 100);
  }