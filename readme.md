### Things I already know

This is an API REST of things I know.

## How to use

Use `npm i` to install the required dependencies.

To run the server use `npm start`.
To run the server in developer mode use `npm run startDev`.

Used enviroment variables:

- DEBUG with the root namespace `api`
- PORT to specify the port

# Params

- `-p` or `--port` to specify the port (default 4000).
- `-d` or `--dev-database` to start the app with the development database (defaults to production database!).
- `-r` or `--read-only` to only allow GET requests.

If one or more params is missing the program will ask you for them.

## Endpoints

Here is a list of the available endpoints:
If there is a request to a not registered endpoint it returns the following object:

```
{
  "error": true,
  "message": "Resource not found"
}
```

# /things

Accepted methods:

- `GET` => Returns a list of the things I know.

  ```
  [
    {
    "id": number
    "text": "This is a thing I know"
    },
    {
    "id": number
    "text": "This is a thing I know"
    },
    {
    "id": number
    "text": "This is a thing I know"
    }
  ]
  ```

- `POST` => Creates a new thing I know (thanks) and returns it with the assigned Id.

  ```
  {
  "id": number
  "text": "This is a new thing I know"
  }
  ```

- `PUT` => Modifies a thing I know and returns the modified thing
  ```
  {
  "id": number
  "text": "This is a modified thing I know"
  }
  ```

Please use the standard object schema when posting or putting new things I know.

# /things/:id

Accepted methods:

- `GET` => Returns the specified thing I know.

  ```
  {
  "id": number
  "text": "This is a thing I know"
  }
  ```

- `DELETE` => Deletes the specified thing I know and returns an empty object.
  ```
  {}
  ```

## Errors

If there is a problem with your request it will return one of these two objects:

# Client error

If the error lies within the request itself it will return the following object:

```
{
  "error": true,
  "message": "Looks like your request is not correct, please read the documentation!"
}
```

# Server error

If an error occurs on the server side it returns the following object:

```
{
  "error": true,
  "message": "Opps, something went wrong processing your request"
}
```
