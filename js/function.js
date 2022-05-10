       
        let result1=document.cookie.split(";")[0].split("=")[1];
        let select=document.getElementsByTagName('select')[0];
        let studentName =document.getElementById("student-name");
        // console.log(select[1]);
        let op=document.createElement('option');
        
        op.innerText=result1;
        op.value=result1;
        op.id=result1;
        select.appendChild(op);
        