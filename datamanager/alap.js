/**
 * @typedef {{nev:string,eletkor:number}} Person
 * @callback Updatecallback
 * @param {Person[]} person
 * @returns {void}
 */




class Datamanager {
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
 * @param {Person[]} array 
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
    this.#updatecallback(this.#array)
}
/**
     * 
     * @param {Person} item
     */
add(item){
    this.#array.push(item)
    this.#updatecallback(this.#array)
}

filter_name(asd){
    const result = []
    for(const elem of this.#array){
       if( elem.nev===asd){
        result.push(elem)
       }
    }
    this.#updatecallback(result)
}

filter_Age(asd){
    const result = []
    for(const elem of this.#array){
       if( elem.eletkor===asd){
        result.push(elem)
       }
    }

    this.#updatecallback(result)
}
}



class Datatable { 
/**
 * @param {@Datamanager} datamanager
 */
    constructor(datamanager){
        const table = document.createElement("table")
        document.body.appendChild(table)

        const thead = document.createElement("thead")
        table.appendChild(thead)

        const tbody = document.createElement("tbody")
        thead.appendChild(tbody)

        datamanager.setupdatecallback((persons)=>{
            for(let elem of persons){
                const sor = document.createElement('tr')
                

                const cella = document.createElement('td')
                cella.innerHTML=elem.nev
                sor.appendChild(cella)
                const cella1 = document.createElement('td')
                cella1.innerHTML=elem.eletkor
                sor.appendChild(cella1)
                tbody.appendChild(sor)
            }
        })
    }

    
}

const manager = new Datamanager([{nev:"Feri", eletkor: 17} ,{ nev:"Teri",eletkor:18},{nev:"Gábor",eletkor:18 }])
const table = new Datatable(manager)

const input = document.createElement('input')
input.addEventListener('input',(e))