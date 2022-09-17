class PaymentDto{
    constructor(pid,price,userid,quantity,pmode,date)
    {
        this.pid=pid;
        this.price=price;
        this.userid=userid;
        this.quantity=quantity;
        this.pmode=pmode;
        this.date=date;
        
        
    }
}
module.exports=PaymentDto;
