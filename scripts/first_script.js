// function myFunction() {
  
//       document.getElementById("item_checkbox").style.backgroundImage = "url('./img/checkbox_click.png')";
    
//   }

function openDiv() {
    var x = document.getElementById("screen4_content");
    x.style.cursor = 'pointer';
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
}

function openDiv2() {
    var x = document.getElementById("screen5_content");
    x.style.cursor = 'pointer';
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
}

function openDiv3() {
    var x = document.getElementById("screen6_content");
    x.style.cursor = 'pointer';
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
}

var check = 0;
function real_checkbox1(clicked_id){
    

    var box = clicked_id;
    alert(clicked_id);
    clicked_id.style.background = "url('../img/checkbox_click.png') center";

}