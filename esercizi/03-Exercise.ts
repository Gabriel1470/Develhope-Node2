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


async function getResults(){
  try{
    const draw1 =await luckyDraw("Player1")
    const draw2 =await luckyDraw("Player2")
    const draw3 =await luckyDraw("Player3")
  } catch(err) {
    console.log(err.message)
  }
}

getResults()