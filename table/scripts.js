const array = [
    {
        firstname1: 'Géza',
        firstname2: 'Ferenc',
        lastname: 'Kocsis',
    },
    {
        firstname1: 'Mária',
        firstname2: 'Júlia',
        lastname: 'Horváth',
    },
    {
        firstname1: 'Ferenc',
        lastname: 'Balogh',
    },
    {
        firstname1: 'Gábor',
        firstname2: 'Attila',
        lastname: 'Horváth'
    },
]

class Person{
    constructor(obj){
        this.firstname1=obj.firstname1
        this.firstname2=obj.firstname2
        this.lastname=obj.lastname
    }
    render(parent_lemnt){
        
        const valtzo =document.createElement("tr")
        parent_lemnt.appendChild(valtzo)
        
        const lastname =document.createElement("td")
        lastname.innerText=this.lastname
        valtzo.appendChild(lastname)

        const firstname1 =document.createElement("td")
        firstname1.innerText=this.firstname1
        valtzo.appendChild(firstname1)

       
        if(!this.firstname2){
            firstname1.colSpan=2
        }else{
             const firstname2 =document.createElement("td")
            firstname2.innerText=this.firstname2
            valtzo.appendChild(firstname2)
        }
       


        


        



    }
  

} 

function innit(){

     const tbody = document.getElementById("tbodyId")
        for (const i of array ){
            const valtozo = new Person(i)
            valtozo.render(tbody)
        }
    };

innit();