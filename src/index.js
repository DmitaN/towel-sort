
// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (matrix === undefined) {
        return []
    }
    const lenArr = matrix.length;
    const smArr = lenArr / 2;
    let newArr = [];
    let result = []

    let count = 1;
    matrix.forEach(el => {
        if (count === 2) {
            result.push(el.reverse())
            count = 1;
        } else {
            result.push(el)
            count++;
        }
    });

    let ev = [];
    result.forEach(el => {
        el.forEach(e => {
            ev.push(e);
        })
    })

    return ev;
}
