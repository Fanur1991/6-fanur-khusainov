docker-compose run app npx prisma generate
docker-compose run app npx prisma migrate dev --name init
docker-compose build --no-cache
docker compose up

### Login page

![Login page](./login.png)

### Home page

![Home page](./home.png)

```
/server
|-- /src
|
| |-- /application
| | |-- /dto
| | | |-- player.dto.ts
| | | |-- game.dto.ts
| | | |-- createGame.dto.ts
| | | |-- createPlayer.dto.ts
| | | |-- ranking.dto.ts
| | | |-- updatePlayer.dto.ts
|
| | |-- /services
| | | |-- playerService.ts
| | | |-- gameService.ts
| | | |-- rankingService.ts
|
| |-- /core
| | |-- /domain
| | | |-- /entities
| | | | |-- IGame.ts
| | | | |-- IPlayer.ts
| | | | |-- IRanking.ts
|
| |-- /repositories
| | |-- IGameRepository.ts
| | |-- IPlayerRepository.ts
| | |-- IRankingRepository.ts
|
| |-- /infrastructure
| | |-- /config
| | | |-- mongoConfig.ts
| | | |-- prismaConfig.ts
|
| | |-- /controllers
| | | |-- playerController.ts
| | | |-- gameController.ts
| | | |-- rankingController.ts
|
| | |-- /models
| | | |-- PlayerModel.ts
| | | |-- GameModel.ts
|
| | |-- /repositories
| | | |-- /mongo
| | | | |-- PlayerRepository.ts
| | | | |-- GameRepository.ts
| | | | |-- RankingRepository.ts
| | | |-- /postgres
| | | | |-- PlayerRepository.ts
| | | | |-- GameRepository.ts
| | | | |-- RankingRepository.ts
|
| | |-- /routes
| | | |-- playerRoutes.ts
| | | |-- gameRoutes.ts
| | | |-- rankingRoutes.ts
|
| | |-- /middleware
| | | |-- authMiddleware.ts
|
| | |-- app.ts
|
| |-- index.ts
|
| |-- /tests
| | |-- /application
| | | |-- /services
| | | | |-- playerService.test.ts
| | |-- /infrastructure
| | | |-- /controllers
| | | | |-- playerController.test.ts
|
| |-- /utils
| | |-- getRepository.ts
| | |-- getRandomInt.ts
|
|-- /prisma
| |-- schema.prisma
|
|-- .env
|-- package.json
|-- tsconfig.json
|-- jest.config.json
|-- Dockerfile
|-- docker-compose.yml
|-- .gitignore
```
