## Node-Lichess

#### API Convenience wrapper for the Lichess.org API

`npm install --save node-lichess`

```
  import LichessClient from 'node-lichess';
  const client = new LichessClient();

  client.getUser('jgladch', {}, (err, user) => {
    console.log(user);
  });

  client.getUsersGames('jgladch', {}, (err, games) => {
    console.log(games);
  });

  client.getGameById('o5tc0OQwiOTR', {}, (err, game) => {
    console.log(game);
  });
```