# CatTrack

CatTrack comes configured with the bare minimum to get started on anything you need.

## Quick Start - local setup

To spin up CatTrack locally, follow these steps:

### Development

1. First clone the repo if you have not done so already
2. `cd my-project && cp .env.example .env` to copy the example environment variables. You'll need to add the `POSTGRES_URI` from your own Postgres database to your `.env`. For local development, a postgres container suffices.
```
docker run \
  --name cat-track \
  -p 5432:5432 \
  -e POSTGRES_PASSWORD=password \
  -e POSTGRES_USER=cat-track \
  -e POSTGRES_DB=cat-track -d \
  postgres
```

3. `npm install && npm run dev` to install dependencies and start the dev server
4. open `http://localhost:3000` to open the app in your browser

That's it! Changes made in `./src` will be reflected in your app. Follow the on-screen instructions to login and create your first admin user. Then check out [Production](#production) once you're ready to build and serve your app, and [Deployment](#deployment) when you're ready to go live.
