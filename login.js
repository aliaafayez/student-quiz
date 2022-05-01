window.addEventListener('load', function () {
   
    this.document.forms[0].addEventListener('submit', function (data) {
//console.log(data.username);

    function search(namekey,passkey,myArray){
        for (var i=0; i < myArray.length; i++) {
            if(myArray[i].name == namekey && myArray[i].password == passkey){
             var alert1=this.document.getElementById("alert1").style.display="none";
             window.location="https://www.google.com/";

            break;

            } 
            var alert1=this.document.getElementById("alert1").style.display="block";
            data.preventDefault();
            window.location="#";
        
        }
    }
            var array = JSON.parse(localStorage.getItem('users'));
            console.log(array);
            var userName = document.getElementById('username1').value;
            var userPw = document.getElementById('password1').value;
            var resultObject = search(userName,userPw,array);


   
   
});
});