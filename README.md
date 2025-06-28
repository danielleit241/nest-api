<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Overview

The **nest-api** repository is a modern backend API project built with [NestJS](https://nestjs.com/) (Node.js + TypeScript). This project aims to provide a scalable and maintainable API platform for web or mobile applications.

### Key Features:
- Utilizes [Prisma ORM](https://www.prisma.io/) for efficient database management and operations.
- Modular architecture for easy feature expansion and maintenance.
- Integrated scripts for automating setup, database initialization, and server startup.
- Uses Docker for managing the development database environment, ensuring consistency and easy setup.

This project is suitable for individuals or teams looking for a high-performance, modern, and extensible backend API foundation.

---

## Getting Started

Follow these steps to set up and start the project:

### 0. Clone the repository
```bash
git clone https://github.com/danielleit241/nest-api.git
cd nest-api
```

### 1. Install dependencies
```bash
npm install
```

### 2. Generate Prisma Client
```bash
npx prisma generate
```

### 3. Restart the development database (requires Docker to be installed and running)
```bash
npm run db:dev:restart
```

### 4. Start the development server
```bash
npm run start:dev
```

---

**Notes:**
- Ensure Docker is installed and running before starting the database.
- Check your `.env` configuration for correct database connection information.
- If `.env` does not exist, copy `.env.example` to `.env` and update values as needed for your environment.

---

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).
