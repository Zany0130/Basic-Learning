const { defaultToString } = require("./util");

import {defaultToString} from './util';
import {ValuePair} from './ValuePair';

export default class Dictionary {
    constructor(toStrFn = defaultToString) {
        this.toStrFn = toStrFn;   //将传入的key转换为字符串格式
        this.table = {};        //value
    }
    
    // hasKey(key)检测一个键是否存在于字典中
    hasKey(key) {
        return this.table[this.toStrFn(key)] != null; 
    }

    // set向字典中添加新的元素
    set(key, value) {
        if (key != null && value != null) {
            const tableKey = this.toStrFn(key);
            this.table[tableKey] = new ValuePair(key, value);  //无需声明新的valuekey，因为随着创造出的valuekey直接赋给了this.table[tableKey]
            return true;
        }
        return false;
    }

    //remove从字典里删除值
    remove(key) {
        if (this.hasKey(key)) {
            delete this.table[this.toStrFn(key)];
            return true;
        }
        return false;
    }

    //get从字典中检索一个值
    get(key) {
        if (this.hasKey(key)) {
            return this.table[this.toStrFn(key)];
        }
        return undefined;
    }

    //以数组形式返回字典中所有的valuePair对象
    keyValues() {
        return Object.values(this.table);
    }

    //keys()返回字典中用于识别值的所有原始键值
    keys() {
        return this.keyValues.map(valuePair => valuePair.key);
    }

    //values()同上，返回字典中的value属性
    values() {
        return this.keyValues.map(valuePair => valuesPair.value);
    }

    //foreach()迭代字典
    foreach() {

    }

    //size
    size() {
        return Object.keys(this.table).length;
    }

    isEmpty() {
        return this.size() === 0;
    }

    clear() {
        this.table = {};
    }

    toString() {
        
    }
}