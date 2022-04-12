export function validateEmail(mail) 
    {
        if(mail.length <= 0){
            return '';
        }
        else if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/).test(mail)){
           return `Please enter the email address in the format aware@example.com!!`;
        }
        else{
            return '';
        }
    }
export function validPass(pass){
    if(!(/[0-9]?[@$#%^&*`>{}\[\]]/g).test(pass)){
        return `Please enter the email address in the format aware@example.com!!`;
    }
    return '';
}
export function validPhone(phone){}
export function validUsername(username){}