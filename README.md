# Calendar App

>This application is the backend of a project built in React. You can see the source code of the frontend application [here](https://github.com/cmglezpdev/Calendar-App-Client)

## Environment Variables

Change the name of file `.example.env` to `.env` and assign values to the variables

- `PORT`: server port
- `DB_CNN`: mongodb string connection
- `SECRET_JWT_SEED`: Phrase that is the JWT secret key

### Run App

To can see the visual part, follow the instructions [here](https://github.com/cmglezpdev/Calendar-App-Client)

To run the backend:

```bash
npm install # install dependencies

npm start # production

npm run dev # development
```

### Endpoints

__LOGIN__:

- Create a new user

```
POST /api/auth/new
```

_Body_:
```json
{
    "name": "nombre",
    "password": "password",
    "email": "example@email.com"
}
```

- Login an user

```
POST /api/auth 
```

_Body_:
```json
{
    "password": "123456789",
    "email": "test@test.com"
}
```

- Revalid token

```
POST /api/auth/renew 
```

_Request Headers_:

__x-token__: token


__EVENTS__:

- Get Events

```
GET /api/events
```

_Request Headers_:

__x-token__: token


- Create an event
```
POST /api/events
```

_Request Headers_:

__x-token__: token



_Body_:
```json
{
  "title": "This is an entry",
  "start": 10000,
  "end": 200000,
  "notes": "This is a note",
}
```

- Update Event

```bash
PUT /api/events/<ID-EVENT>
```

__x-token__: token

_Body_:
```json
{
  "title": "This is an entry",
  "start": 10000,
  "end": 200000,
  "notes": "This is a note",
}
```

- Delete Event

```bash
DEL /api/events/<ID-EVENT>
```

__x-token__: token
