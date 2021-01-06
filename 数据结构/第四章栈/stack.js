class Stack {
    constructor() {
        this.count = 0;
        this.items = {};
    }

    push(element) {
        this.items[this.count] = element;
        this.count++;
    }

    size() {
        return this.count;
    }

    isEmpty() {
        return this.count === 0;
    }
    // 删除栈顶元素
    pop() {
        if (this.isEmpty()) {
            return undefin;
        }
        this.count--;
        const result = this.items[this.count];
        delete this.items[this.count];
        return result;
    }
    // 查看栈顶元素
    peek() {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.items[this.count - 1];
    }
    // 清空栈
    clear() {
        this.count = 0;
        this.items = {};
    }
    // 输出字符串
    toString() {
        if (this.isEmpty()) {
            return '';
        }
        let objString = `${this.items[0]}`;
        for (let i = 1; i < this.count; i++) {
            objString = `${objString},${this.items[i]}`;
        }
        return objString;
    }
    


}