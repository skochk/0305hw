// function myFunction() {
  
//       document.getElementById("item_checkbox").style.backgroundImage = "url('./img/checkbox_click.png')";
    
//   }

function openDiv0() {
  var x = document.getElementById("screen3_content");
  x.style.cursor = 'pointer';
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

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


function openDiv4() {
  var x = document.getElementById("screen7_content");
  x.style.cursor = 'pointer';
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function card_open1() {
  var x = document.getElementById("card_content1");
  x.style.cursor = 'pointer';
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}


function card_open2() {
  var x = document.getElementById("card_content2");
  x.style.cursor = 'pointer';
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}


function openDiv5() {
  var x = document.getElementById("screen8_content");
  x.style.cursor = 'pointer';
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function card_open3() {
  var x = document.getElementById("card_content3");
  var img = document.getElementById("img_rotate");
  x.style.cursor = 'pointer';
  if (x.style.display === "none") {
    x.style.display = "block";
    img.style.transform = 'rotate(90deg)';
  } else {
    x.style.display = "none";
    img.style.transform = 'rotate(0deg)';
  }
}



function card_open4() {
  var x = document.getElementById("card_content4");
  var img = document.getElementById("img_rotate2");
  x.style.cursor = 'pointer';
  if (x.style.display === "none") {
    x.style.display = "block";
    img.style.transform = 'rotate(90deg)';
  } else {
    x.style.display = "none";
    img.style.transform = 'rotate(0deg)';
  }
}


