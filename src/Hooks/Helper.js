export const getEmailValidationRules = (text)=>{
    console.log(text);
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (reg.test(text) === false) {
       return false 
    }
    else {
       return true;
    }
  }

  export const getPasswordValidationRules = (text)=>{
    let check = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/;
    if (text.match(check)) {
         return true
    } else {
     return false
    }
  }
