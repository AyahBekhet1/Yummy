export class Validation{

    constructor(){
        this.nameValid=false
        this.emailValid=false
        this.phoneValid=false
        this.ageValid=false
        this.passValid=false
        this.rePassValid=false

    }

    nameValidation(userName){
       let regex=/^[a-zA-Z\s']+$/ 
       if(regex.test(userName)){
         this.nameValid = true;
         $('#nameAlert').addClass('d-none');
       }else{
        $('#nameAlert').removeClass('d-none');
       }
       console.log(this.nameValid);
       console.log(userName);
       return this.nameValid
    }

    emailValidation (userEmail){
        let regex =/^[a-zA-Z0-9._-]+\@[a-zA-Z]{2,}\.[a-zA-Z]{2,}$/
        if(regex.test(userEmail)){
            this.emailValid = true;
            $('#emailAlert').addClass('d-none');
          }else{
           $('#emailAlert').removeClass('d-none');
          }
          console.log(this.emailValid);
          return this.emailValid
    }

    phoneValidation (userPhone){
        let regex =/^(002)?01[0125][0-9]{8}$/
        if(regex.test(userPhone)){
            this.phoneValid = true;
            $('#phoneAlert').addClass('d-none');
          }else{
           $('#phoneAlert').removeClass('d-none');
          }
          console.log(this.phoneValid);
          return this.phoneValid
    }


    ageValidation (userAge){
        let regex =/^([1-9][0-9]|100)$/
        if(regex.test(userAge)){
            this.ageValid = true;
            $('#ageAlert').addClass('d-none');
          }else{
           $('#ageAlert').removeClass('d-none');
          }
          console.log(this.ageValid);
          return this.ageValid
    }

    passValidation (userPass){
        let regex =/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
        if(regex.test(userPass)){
            this.passValid = true;
            $('#passwordAlert').addClass('d-none');
          }else{
           $('#passwordAlert').removeClass('d-none');
          }
          console.log(this.passValid);
          return this.passValid
    }

    rePassValidation (userRePass ,userPass){
        if(userRePass === userPass ){
            this.rePassValid = true
            $('#repasswordAlert').addClass('d-none');
        }else{
            $('#repasswordAlert').removeClass('d-none');
        }
        return this.rePassValid

    }

    btnEnable (btn){
        if(this.rePassValid && this.nameValid && this.emailValid && this.phoneValid && this.passValid && this.ageValid == true){
            console.log('nejd');
            btn.removeAttribute('disabled');
        }
        console.log('lhbv',this.ageValid)
    }
}