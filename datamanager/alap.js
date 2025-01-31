/**
 * @typedef {{nev:string,eletkor:number}} Person
 * @callback Updatecallback
 * @param {} person
 * @returns {void}
 */




class datamanager {
/**
 * @type {Person[]}
 */
#array
/**
 * @type {Updatecallback}
 *
 *  */   

#updatecallback
/**
 * 
 * @param {Personarray[]} array 
 */
constructor(array = []){
    this.#array = []
    this.#array = array
    this.#updatecallback = ()=>{}
    /**
     * @param {}
     */
}
setupdatecallback(callback){
    this.#updatecallback=callback
    
}

add(item){
    this.#array.push(item)
    this.#updatecallback(this.#array)
}

filter_name(asd){
    const result = {} 
    for(const elem of this.#array){
       if( elem.nev===asd.nev){
        result.push(elem)
       }
    }
    this.#updatecallback(result)
}

filter_Age(asd){
    const result = {} 
    for(const elem of this.#array){
       if( elem.eletkor===asd.eletkor){
        result.push(elem)
       }
    }

    this.#updatecallback(result)
}
}

class datatable { 

}