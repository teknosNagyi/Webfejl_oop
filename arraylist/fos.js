class Arraylist{
    #count
    #statusz
    /**
     * @type {Number}
     */
    get Count (){
        return this.count
    }
    
    constructor(){
        this.#count = 0
        this.#statusz={}
    }
    Add(item){
        const index = this.count
        this.statusz[index] = item
       Object.defineProperty(this,index,{
        get:function(){
        return this.statusz[index]
        },
        
            set:function(value)
            
        {
            this.#statusz[index] =value;
        }
    }
)      
        this.#count++   
        
    } 
    Clear(){
        this.#count=0;


    }
   
}
 const csirke ={}
csirke.a = "def";
console.log(csirke.a)

const alma = {}
Object.defineProperty(alma,'nev',{
    value:"Ferenc", writable : true
});
alma.nev="asd"
console.log(alma)