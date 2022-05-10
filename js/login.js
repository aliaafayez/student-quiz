
window.addEventListener('load', function () {

  this.document.forms[0].addEventListener('submit', function (event) {

    var array = JSON.parse(localStorage.getItem('users'));
    var userName = document.getElementById('username1').value;
    var userPw = document.getElementById('password1').value;
    var alert1 = document.getElementById("alert1");
    if (!array) {
      alert1.style.display = "block";
      event.preventDefault();
      return;

    }

    for (var i = 0; i < array.length; i++) {
      if (userName == array[i].name  && userPw == array[i].password ) {
        console.log(array[i]);
        alert1.style.display = "none";
        window.location="../quiestion.html";
        var date=new Date(2023,03,18);
        document.cookie="uN="+userName;+";expirs="+date;
      return;

      }
      alert1.style.display = "block";
      event.preventDefault();
    
    



    }
    

  });

 
 
}); 