function luckyDraw(player) {
  return new Promise((resolve, reject) => {
    const win = Boolean(Math.round(Math.random()));

    process.nextTick(() => {
      if (win) {
        resolve(`${player} won a prize in the draw!`);
      } else {
        reject(new Error(`${player} lost the draw.`));
      }
    });
  });
}

luckyDraw("Player-1")
  .then(data=>console.log(data))
    .catch(err=>console.error(err.message))
      .then(()=>luckyDraw("Player-2")
        .then(data=>console.log(data))
          .catch(err=>console.error(err.message))
            .then(()=>luckyDraw("Player-3")
              .then(data=>console.log(data))
                .catch(err=>console.error(err.message))))