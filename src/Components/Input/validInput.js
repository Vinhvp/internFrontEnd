export function validateEmail(mail) 
    {
        let tmp='';
        if(mail.length <= 0){
            tmp = '';
        }
        else if (!(/^([a-z])+([0-9]+)?@[a-z]+\.[a-z]+/g).test(mail) || (!(/^\s/g).test(mail))){
            tmp = 'case1';
        }
        return tmp;
    }
export function validPass(pass){
    let tmp='';
    if(!(/[0-9]?[@$#%^&*`>{}\[\]]/g).test(pass)){
        tmp = 'case1';
    }
    return tmp;
}
export function validPhone(phone){}
export function validUsername(username){}