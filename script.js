//const userData = []
var alertErrorName = document.getElementById("textAlertName");
var alertErrorMail = document.getElementById("textAlertMail");
var alertErrorPhone = document.getElementById("textAlertPhone");
var alertErrorCpf = document.getElementById("textAlertCpf");
var alertErrorPass = document.getElementById("textAlertPass");
var alertcheck = document.getElementById("subBtnAlert");
//var index = 0;


function checkInfoSubmit(){
    
    var userName = document.getElementById('nameReg').value;
    var userMail = document.getElementById('mailReg').value;
    var userPhone = document.getElementById('phoneNumber').value;
    var userCpf = document.getElementById('cpfNumber').value;
    var userPass = document.getElementById('passReg').value;

    
    /*if (userName == "" || userName == null ) {
        console.log(userName + ' is not a name');
        alertErrorName.innerHTML = "*Campo Obrigatório*";
        return null;
    } 
    else if (userMail == "" || userMail == null ) {
        console.log(userMail + ' is not a email');
        alertErrorMail.innerHTML = "*Campo Obrigatório*";
        return null;
    }
    else if (userPhone == "Number" || userPhone == null ) {
        console.log(userPhone + ' is not a phone number');
        alertErrorPhone.innerHTML = "*Campo Obrigatório*";
        return null;
    }
    else if (userCpf == "Number" || userCpf == null ) {
        console.log(userCpf + ' is not a cpf number');
        alertErrorCpf.innerHTML = "*Campo Obrigatório*";
        return null;
    }
    else if (userPass == "" || userPass == null ) {
        console.log(userPass + ' is not a password');
        alertErrorPass.innerHTML = "*Campo Obrigatório*";
        return null;*/
    
    if (userPass == "" || userMail == "" || userName == "" || userPhone == '' || userPass == null || userCpf == '' || userMail == null || userName == null){
        alertcheck.innerHTML = "Campos obrigatórios não registrados.";
        alertErrorPass.innerHTML = "*Campo Obrigatório*";
        alertErrorCpf.innerHTML = "*Campo Obrigatório*";
        alertErrorPhone.innerHTML = "*Campo Obrigatório*";
        alertErrorMail.innerHTML = "*Campo Obrigatório*";
        alertErrorName.innerHTML = "*Campo Obrigatório*";
        alertcheck.style.color = "#EF0909";
    }
        else  {
        console.log(' Sucesso');
        alertcheck.innerHTML = "Sucesso";
        alertErrorPass.innerHTML = "";
        alertErrorCpf.innerHTML = "";
        alertErrorPhone.innerHTML = "";
        alertErrorMail.innerHTML = "";
        alertErrorName.innerHTML = "";
        alertcheck.style.color = "#44B856";
        //alert("Campo preenchido incorretamente")
        return 0;
    }    
}