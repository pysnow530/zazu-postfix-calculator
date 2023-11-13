const evalPostfix = (expr) => {
    const segs = expr.split(/\s+/)
    let queue = []
    for (var i = 0; i < segs.length; i++) {
        var number = parseNumber(segs[i]);
        var operator = parseOperator(segs[i]);
        if (number) {
            queue.push(number);
        } else if (operator) {
            queue = [operator(queue)];
        } else {
            return null;
        }
    }
    return queue[0]
}

const parseOperator = (item) => {
    if (item === '+') {
        return (args) => args.reduce((x, y) => x + y)
    } else if (item === '-') {
        return (args) => args.reduce((x, y) => x - y)
    } else if (item === '*') {
        return (args) => args.reduce((x, y) => x * y)
    } else if (item === '/') {
        return (args) => args.reduce((x, y) => x / y)
    } else if (item === '^') {
        return (args) => args.reduce((x, y) => Math.pow(x, y), 0)
    } else {
        return null;
    }
}

const parseNumber = (item) => {
    if (item == 'pi') {
        return 3.141593
    } else if (item == 'e') {
        return 2.718282
    } else if (item.match(/^\d+$/)) {
        return parseInt(item)
    } else if (item.match(/^(\d+)?\.\d+$/)) {
        return parseFloat(item)
    } else {
        return null;
    }
}
