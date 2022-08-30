function luckyDraw(player) {
    return new Promise(function (resolve, reject) {
        var win = Boolean(Math.round(Math.random()));
        process.nextTick(function () {
            if (win) {
                resolve(player + " won a prize in the draw!");
            }
            else {
                reject(new Error(player + " lost the draw."));
            }
        });
    });
}
luckyDraw("Player-1")
    .then(function (data) { return console.log(data); })["catch"](function (err) { return console.error(err.message); })
    .then(function () { return luckyDraw("Player-2")
    .then(function (data) { return console.log(data); })["catch"](function (err) { return console.error(err.message); })
    .then(function () { return luckyDraw("Player-3")
    .then(function (data) { return console.log(data); })["catch"](function (err) { return console.error(err.message); }); }); });
