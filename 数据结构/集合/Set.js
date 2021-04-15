class Set {
    constructor() {
        this.items = {};
    }

    has(element) {
        return element in this.items;
    }


    add(element) {
        if (!this.has(element)) {       //make sure that element is not in the set
            this.items[element] = element;  //store as key-value(element-element)
            return true;
        }
        return false;
    }

    delete(element) {
        if (this.has(element)) {
            delete this.items[element];
            return true;
        }
        return false;
    }

    clear() {
        this.items = {};
    }

    size() {
        return Object.keys(this.items).length;
    }

    values() {
        return Object.values(this.items);
    }
    
    // 并集
    union(otherSet) {
        const unionSet = new Set();
        this.values().foreach(value => unionSet.add(value));
        otherSet.values().foreach(value => unionSet.add(value));
        return unionSet;
    }

    // 交集
    /* 暴力解法
    intersection(otherSet) {
        const intersectionSet = new Set();

        const values = this.values();
        for (let i = 0; i < values.leagth; i++) {
            if (otherSet.has(values[i])) {
                intersectionSet.add(values[i])
            }
        }
        return intersectionSet;
    }
    */
   intersection(otherSet) {
       const intersectionSet = new Set();
       const values = this.value();
       const otherSetvalues = otherSet.values();
       let biggerSet = values;
       let smallerSet = otherSetvalues;
       if (otherSetvalues - values > 0 ) {          //判断长度更小的集合，减少比较时的循环次数
           biggerSet = otherSetvalues;
           smallerSet = values;
       }
       smallerSet.foreach(value => {
           if (biggerSet.includes(values)) {
               intersectionSet.add(value);
           }
       });
       return intersectionSet;
   }

   //差集
   difference(otherSet) {
       const differenceSet = new Set();
       this.values().foreach(value => {
           if (!otherSet.has(value)) {
               differenceSet.add(value);
           }
       });
       return differenceSet;
   }

   //子集
   isSubsetOf(otherSet) {
       if (this.size() > otherSet.size()) {
           return false;
       }
       let isSubset = true;
       this.values().every(value => {
           if (!otherSet.has(value)) {    //every，只要有一个不属于otherSet就停止； 而foreach则会一直循环
               isSubset = false;
           }
           return false;           
       });
       return isSubset;
   }

    

}
