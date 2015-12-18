import LichessClient from 'node-lichess';

const client = new LichessClient();

client.getUser('jgladch', null, (err, user) => {
  if (err) console.log(err);
  console.log('user: ', user);

  client.getGameById('o5tc0OQwiOTR', {
    with_fens: 1,
    with_moves: 1
  }, (err, game) => {
    if (err) console.log(err);
    console.log('game: ', game);
    client.getGamesForUser('jgladch', {
      with_moves: 1
    }, (err, games) => {
      if (err) console.log(err);
      console.log('games: ', games);
    })
  });
});
