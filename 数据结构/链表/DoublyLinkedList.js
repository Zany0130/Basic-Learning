import {Node} from './models/linked-list-models';
import {defaultEquals} from 'G:/前端/前端学习2/案例/数据结构/util';
import {linkedList} from './linkedList';


class DoublyNode extends Node {
    constructor(element, next, prev) {
        super (element, next);
        this.prev = prev;
    }
}

class DoublyList extends linkedList {
    constructor(equalsFn = defaultEquals) {
        super(equalsFn);
        this.tail = undefined;//相比于单向链表增加了保存最后一个元素的引用
    }

    insert (element, index) {
        if (index >= 0 && index <= this.count) {
            const node = new DoublyList;
            let current = this.head;
            if (index === 0) {
                if (this.head == null) { //该链表为空
                    this.head = node;    
                    this.tail = node;    //将头部尾部都指向这个新节点
                } else {
                    node.next = this.head;      //向后，指向头部节点
                    current.prev = node;        //向前，头节点指向新增节点
                    this.head = node;       //head指向新增节点
                }
            } else if (index === this,count) {      //在最后一项添加元素
                current = this.tail;        //指向链表尾部
                current.next = node;        //向后，尾部next指向新增节点
                node.prev = current;       //向前，新增节点prev指向当前节点
                this.tail = node;       //链表尾部指向新增节点
            } else {
                const previous = this.getElementAt(index - 1);      //获取要插入位置前面的元素
                current = previous.next;        //当前节点指向待插入位置
                node.next = current;        //向后，新增节点next指针指向当前节点
                previous.next = node;       //因为previous.next指向current，为保证节点不丢失，所以要修改previous.next
                current.prev = node;
                node.prev = previous;       //向前，新增节点prev指向前面的节点
            }
            this.count++;
            return true;
        }
        return false;
    }

    removeAt(index) {
        if (index >= 0 && index < this.count) {
            let current = this.head;
            if (index === 0) {              //remove from the head
                this.head = current.next;   
                if (this.count === 1) {     //length = 1; only one element
                    this.tail = undefined;  //nothing left
                } else {
                    this.head.prev = undefined;     //head.prev (the first element) point nothing
                }
            } else if (index === this.count - 1) {
                current = this.tail;
                this.tail = current.prev;
                this.prev.next = undefined;
            } else {
                current = this.getElementAt(index);
                const previous = current.prev;
                previous.next = current.next;
                current.next.prev = previous;
            }
            this.count--;
            return current.element;
        } 
        return undefined;
    }
}

