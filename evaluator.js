const evalPostfix = (expr) => {
    const segs = expr.split(/\s+/).filter(i => i)
    let stack = []
    for (var i = 0; i < segs.length; i++) {
        var number = parseNumber(segs[i]);
        var operator = parseOperator(segs[i]);
        var range = parseRange(segs[i]);
        if (number) {
            stack.push(number);
        } else if (operator) {
            stack = [operator(stack)];
        } else if (range) {
            range.map(i => stack.push(i))
        } else {
            return null;
        }
    }
    return stack
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
        return (args) => args.reduce((x, y) => Math.pow(x, y))
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

const parseRange = (item) => {
    const regex = /^(\d+)\.\.(\d+)(?:\/(\d+))?$/;
    const matched = item.match(regex);

    if (matched) {
        const start = parseInt(matched[1], 10);
        const stop = parseInt(matched[2], 10);
        const step = matched[3] ? parseInt(matched[3], 10) : 1;

        const result = []
        for (var i = start; i <= stop; i += step) {
            result.push(i)
        }
        return result
    } else {
        return null;
    }
}

module.exports = {
    evalPostfix,
}
