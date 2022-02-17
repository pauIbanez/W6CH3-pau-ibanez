# Things I already know

This is an API REST of things I know.

## How to use

Use `npm i` to install the required dependencies.

### Starting up
  To run the server use `npm start`.
  
  To run the server in developer mode use `npm run startDev`.

### Used enviroment variables:

- `DEBUG` with the root namespace `app` (recomended value `app:*`).
- `CONN_STRING` to specify the connection string for the Production database.
- `DEV_CONN_STRING` to specify the connection string for the Development database.

### Arguments

To use the arguments do `npm start -- [arguments]`.
Example of initializing with arguments: `npm start -- -d -p 7685`.

Available arguments:

- `-p` or `--port` to specify the port (default 4000).
- `-d` or `--dev-database` to start the app with the development database (defaults to production database!).
- `-r` or `--read-only` to only allow `GET` requests.

If one or more arguments is missing the program will ask you for them on start.



## Endpoints

Here is a list of the available endpoints:

### /things

Accepted methods:

- `GET` => Returns a list of the things I know.

  ```JSON
  [
    {
    "id": 0,
    "text": "This is a thing I know"
    },
    {
    "id": 0,
    "text": "This is a thing I know"
    },
    {
    "id": 0,
    "text": "This is a thing I know"
    }
  ]
  ```

- `POST` => Creates a new thing I know (thanks) and returns it with the assigned Id.

  ```JSON
  {
  "id": 0,
  "text": "This is a new thing I know"
  }
  ```

- `PUT` => Modifies a thing I know and returns an empty object
  ```JSON
  {}
  ```

Please use the standard object schema when posting or putting new things I know.

### /things/:id

Accepted methods:

- `GET` => Returns the specified thing I know.

  ```JSON
  {
  "id": 0,
  "text": "This is a thing I know"
  }
  ```

- `DELETE` => Deletes the specified thing I know and returns an empty object.
  ```JSON
  {}
  ```

## Errors

If problem arrises with a request it will return one of these objects:

### Client error


If there's a request to an unregistered endpoint, it returns the following object:

```JSON
{
  "error": true,
  "message": "Resource not found"
}
```

If the error occurs because the method was not `GET` when opened in read-only mode, it will return the following object:

```JSON
{
  "error": true,
  "message": "Forbidden, this server is only accepting GET requests at the moment",
}
```

If the error lies within the request itself, it will return the following object:

```JSON
{
  "error": true,
  "message": "Looks like your request is not correct, please read the documentation!",
  "info": "Some extra info"
}
```

### Server error

If an error occurs on the server side, it returns the following object:

```JSON
{
  "error": true,
  "message": "Opps, something went wrong processing your request"
}
```
