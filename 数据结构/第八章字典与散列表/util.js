export function defaultToString(item) {
    if (item === null) {
        return 'NULL';
    } else if (item === undefined) {
        return 'UNDEFINED';
    } else if (typeof item === 'string' || item instanceof String) {
        return `${item}`;
    }
    return item.toString();
}

//如果键(item)是一个字符串类型的话，我们就可以直接返回它。否则需要调用item.toString方法

//在字典中，理想的情况下是使用字符串来作为key（键名），vaule（值）可以是任何类型。由于JS不是强类型的语言，所以传入key的可能是任何类型
//所以我们需要一个将所有的key转化为字符串的函数 