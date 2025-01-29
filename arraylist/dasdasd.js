class ArrayList {
    #state;
    #count;
    #htmlarray
    get Count() {
        return this.#count;
    }
 
    constructor(array = undefined) {
        this.#count = 0;
        this.#state = {};
        this.#htmlarray = array;
    }
 
    Add(param) {
        const index = this.Count;
        this.#state[index] = param;
        Object.defineProperty(this, index, {
            get: () => { return this.#state[index] },
            enumerable: true,
            configurable: true,
            set: (value) => { this.#state[index] = value; }
        });
        if(this.#htmlarray){
            this.#htmlarray.addPersonrow(param)
        }
        this.#count++;
    }
 
    Clear() {
        console.log('Clear vége');
        for (const key in this){
            delete this[key]
        }
        this.#state = {};
        this.#count = 0;
        console.log('Clear vége');
    }
}

class ArrayHTMLTable extends HTMLElement {
    #tbody;

    connectedCallback() {
        const table = document.createElement('table');
        this.appendChild(table);
        this.#tbody = document.createElement('tbody');
        table.appendChild(this.#tbody);
        const thead = document.createElement('thead');
        table.appendChild(thead);
    }

    addPersonrow(item) {
        const tr = document.createElement('tr');
        this.#tbody.appendChild(tr);
        
        const td1 = document.createElement("td");
        td1.textContent = item.nev;
        tr.appendChild(td1);

        const td2 = document.createElement("td");
        td2.textContent = item.eletkor;
        tr.appendChild(td2);
    }
}



const a = new ArrayList();
a.Add({ nev: "Laci", eletkor: 18 });
a.Add({ nev: "Sanyi", eletkor: 21 });
a.Clear();
console.log(a);

customElements.define('array-t', ArrayHTMLTable);

const htmltable = new ArrayHTMLTable();

document.body.appendChild(htmltable);

const b = new ArrayList(htmltable);
b.Add({ nev: "Laci", eletkor: 18 });
b.Add({ nev: "Sanyi", eletkor: 21 });

const button = document.createElement('button')
document.body.appendChild(button)

button.addEventListener('click', (e) =>{
    b.add({nev:'vvalaki',eletkor:155})
})

