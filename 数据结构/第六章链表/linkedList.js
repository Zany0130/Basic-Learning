import {defaultEquals} from 'G:/前端/前端学习2/案例/数据结构/util';
import {Node} from './models/linked-list-models';

export default class linkedList {
    constructor(equalFn = defaultEquals) {
        this.count = 0;//链表中存储元素的数量
        this.head = undefined;//null是否也可以呢,保存对第一个元素的引用




        
        this.equalFn = equalFn;//这一句的意义在哪里呢？  传入一个我们内部可以调用的函数
    }

    //向链表尾部添加元素
    push(element) {
        const node = new Node(element);
        let current;
        if (this.head == null) {
            this.head =node; //如果为空链表，直接添加第一个元素，让head元素指向node元素，下一个node自动变为undefined
        } else {             //如果链表不为空
            current = this.head; //准备从链表头部开始遍历
            while (current.next != null) { //不停遍历到链表的尾部，即尾部元素指针会指向null的位置
                current = current.next; //此时已经遍历到了链表的尾部实例
            }
            current.next = node;  //将新添加的元素放入链表尾部的后一个位置
        }
        this.count++; //添加新的元素之后，链表的长度加一
    }
    //*** this.head == null 等价于 (this.head === undefined || head === null)
    //*** current.next != null 等价于 (current.next !== undfined && current.next !== null)
    

    //从链表中的特定位置移除一个元素
    removeAt(index) {
        //检查越界值； 即验证index是否是有效的值，index是否在此链表的范围之内
        if (index >= 0 && index < this.count) {
            current = this.head;  //将链表头赋给current

            if (index === 0) {
                this.head == current.next;     //如果要删除第一个元素，直接将链表的头部指向头部的下一个节点，这样第一个节点就被遗弃在计算机内存中
            } else {
                let previous;                
                for (i = 0; i < index; i++) {  //找到要移除的节点，此时previous为前一个节点，current为要移除的节点
                    previous = current;
                    current = current.next;
                }

                previous.next = current.next;  //previous.next原本指向的是current节点，此时直接指向current.next；意味着current节点已经被移除了
            }
            this.count--;   //链表长度减一
        }
        return undefined;   //index越界，返回undefined无法执行移除操作
    }

    //寻找指定位置的元素
    getElementAt(index) {
        if (index >= 0 && index < this.count) { //判断是否越界
            let current = this.head;               //初始化
            for (i = 0; i < index; i++) {       //遍历到指定位置
                current = current.next;
            }
            return current;
        }
        return undefined;
    }

    //根据元素的值来移除元素
    remove(index) {
        if (index >= 0 && index < this.count) {
            let current = this.head;
            if (index === 0) {
                this.head = current.next;
            } else {
                const previous = this.getElementAt(index -1);
                current = previous.next;
                previous.next = current.next;
            }
            this.count--;
        }
        return undefined;
    }

    //在任意位置插入元素
    insert(element, index) {
        if (index >= 0 && index < this.count) {     //判断是否越界
            const node = new Node(element);         //声明一个新的实例来存储元素
            if (index === 0) {                      //插到头部
                const current = this.head;          
                node.next = current;                //将node.next指到头部
                this.head = node;                   //头部换成新加入的node
            } else {
                const previous = this.getElementAt(index - 1);  //获取到要插入位置的前一个元素
                const current = previous.next;                  //当前元素
                previous.next = node;                           
                node.next = current;                            //插入链表
            }
            this.count++;
            return true;                                        //插入成功
        }
        return false;                                           //插入失败
    }

    //返回一个元素的位置
    indexOf(element) {
        let current = this.head;
        for (i = 0; i < this.count && current != null; i++) {       //防止查过界
            if (this.equalFn(element,current.element)) {            //相等返回真
                return i;                                           //返回索引位置
            }
            current = current.next;
        }
        return -1;
    }

    //通过index方法来实现移除操作
    remove(element) {
        const index = this.indexOf(element);
        return this.removeAt(index);
    }

    //链表大小
    size() {
        return this.count;
    }

    //判断链表是否为空
    isEmpty() {
        return this.size() === 0;
    }

    //获取头部元素
    getHead() {
        return this.head;
    }

    //输出为字符串
    toString() {
        if (this.head === null) {
            return '';
        }
        let objString = `${this.head}`;
        let current = this.head.next;
        for (let i = 0; i < this.size() && current != null; i++) {
            objString = `${objString},${current.element}`;
            current = current.next;
        }
        return objString;
    }





}