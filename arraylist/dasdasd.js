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

customElements.define('array-t', ArrayHTMLTable);

const a = new ArrayList();
a.Add({ nev: "Laci", eletkor: 18 });
a.Add({ nev: "Sanyi", eletkor: 21 });
a.Clear();
console.log(a);

const htmltable = new ArrayHTMLTable();
document.body.appendChild(htmltable);
htmltable.addPersonrow({ nev: "Laci", eletkor: 18 });

const b = new ArrayList()

