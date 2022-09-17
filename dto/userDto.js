class UserDto{
    constructor(Name,Email,Password,Gender,Contact,Address)
    {
     this.Name=Name;   
     this.Email=Email;
     this.Password= Password;
     this.Gender=Gender;
     this.Contact=Contact;
     this.Address=Address;
    //  this.RegistrationDate=RegistrationDate;
    //  this.Token=Token;
    
    }
}
module.exports=UserDto;