function createCounter() {
    let _count = 0;

    return {
        increment: function () {
            _count++;
            console.log(this._count); //undefined
        },
        getCount: function () {
            return _count;
        }
    }
}
