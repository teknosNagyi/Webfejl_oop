
class Factory{
    // TODO 1, 2, 3, 4, 9, 10
    constructor(){
        this.manolist=[]//gyar nem van mano mert uj
        }
        addmano(companion) {
        this.manolist.push(companion)
        createRow(companion)
        
    }
    idgeneralas(){
        return this.manolist
    }
 
}
   
   class Companion{
    // TODO 5
    //id
    //kernev
    //veznev
    //reszleg
    constructor(id,kernev,veznev,reszleg){
        this.id = id
        this.kernev=kernev
        this.veznev=veznev
        this.reszleg=reszleg
        this.productlist=[]//nem szukseges ,nincs mikor meghiv companion
    }
  
    getname(){
        return this.veznev + " " + this.kernev

    }
    productadd(termek){
        this.productlist.push(termek)
    }
   }