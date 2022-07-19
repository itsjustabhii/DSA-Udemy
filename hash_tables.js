/*What are Hash Tables - are used to store key-value pairs
- they are like arrays but the keys are not ordered
*/

// function hash(key, arrayLen) {
//     let total = 0
//     let WEIRD_PRIME = 31
//     for(let i = 0; i < Math.min(key.length, 100); i++) {
//         let char = key[i]
//         let value = char.charCodeAt(0) - 96  
    
//         total = (total * WEIRD_PRIME + value) % arrayLen
//     }
//     return total
// }

// console.log(hash("pink", 10))


/*Handling Collisions */
//Separate Chaining - we store values using a more sophisticated data structure(eg - Array or Linked List)
//Linear Probing - we only store one piece of data at each slot

/*----------Hash Tables-------- */

class HashTable {
    constructor(size = 53) {
        this.keyMap = new Array(size)  //Create a new Array
    }

    _hash(key) {
        let total = 0
        let WEIRD_PRIME = 31
        for(let i = 0; i < Math.min(key.length, 100); i++) {
            let char = key[i]
            let value = char.charCodeAt(0) - 96
            total = (total * WEIRD_PRIME + value) % this.keyMap.length
        } 
        return total
    }
    set(key, value) {
        let index = this._hash(key)
        if(!this.keyMap[index]) {
            this.keyMap[index] = []
        }
        this.keyMap[index].push([key, value])
    }
    get(key) {
        let index = this._hash(key)
        if(this.keyMap[index])  {
            for(let i = 0; i < this.keyMap[index].length; i++) {
                if(this.keyMap[index][i][0] === key) {
                    return this.keyMap[index][i][1]
                }
            }
        }
        return undefined
    }
    keys() {
        let keysArr = []
        for(let i = 0; i < this.keyMap.length; i++) {
            if(this.keyMap[i]) {
                for(let j = 0; j < this.keyMap[i].length; j++) {
                    if(!keysArr.includes(this.keyMap[i][j][0])) {
                    keysArr.push(this.keyMap[i][j][0])

                    }
                }
            }
        }
        return keysArr
    }
    values() {
        let valuesArr = []
        for(let i = 0; i < this.keyMap.length; i++) {
            if(this.keyMap[i]) {
                for(let j = 0; j < this.keyMap[i].length; j++) {
                    if(!valuesArr.includes(this.keyMap[i][j][1])) {
                    valuesArr.push(this.keyMap[i][j][1])

                    }
                }
            }
        }
        return valuesArr
    }
}

let ht = new HashTable()
console.log(ht.set("Hello World", "Goodbye!!"))

/*Set - Accepts a key and A value
- Hashes the key
- Stores the key - value pair in the hash table array via separate chaining

Get 
- Accepts a key
- Hashes the key
- Retrieves the key-value pair in the hash table
- If the key isn't found, returns undefined
*/


/*Time Complexity (Avg Case)
- Insert - O(1)
- Deletion - O(1)
- Access - O(1)
*/






