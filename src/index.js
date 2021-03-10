// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (!matrix) return [];
    return [].concat(
        ...matrix.map((item, index) =>
            index % 2 === 0 ? item : item.reverse()
        )
    );
};
