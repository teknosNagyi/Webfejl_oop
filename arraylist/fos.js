class Arraylist{
    #count
    #statusz
    /**
     * @type {Number}
     */
    get Count (){
        return this.#count
    }
    
    constructor(){
        this.#count = 0
        this.#statusz={}
    }
    Add(item){
        const index = this.#count
        this.#statusz[index] = item
    }
   
    Clear(){


    }
   
}
 const csirke ={}
csirke = "def";
console.log=(csirke)