# Express Bio API

A personal bio API built with Node.js and Express.

## Getting started

Install the dependencies:

```sh
npm install
```

Start with Nodemon during development:

```sh
npm run dev
```

Or start with Node.js:

```sh
npm start
```

The server runs at <http://localhost:5000>.

## Routes

| Method | Path | Response |
| --- | --- | --- |
| GET | `/` | Welcome page with links to the API routes |
| GET | `/api/bio` | Bio details as JSON |
| GET | `/api/skills` | Skills as a JSON array |
| GET | `/api/greet/:name` | A greeting for the name in the URL |
| GET | `/api/skills/:index` | One skill by zero-based index; returns 404 for an invalid index |
| GET | Any other path | 404 page |

Example: `/api/greet/lerato` returns `{"message":"Hello, lerato! Welcome to my API"}`.