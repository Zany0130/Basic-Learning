export class Node {
    constructor(element) {
        this.element = element;
        this.next = undefined;
    }
}//export 规定了一个外部无法获取的接口，必须使用import来调用
//构造了一个包含元素和指针的形式