This is a base node js project template, which anyone can use as it has been prepared,
by keeping some of the most important code principal and project management recommendations . Feel free to change anything .

`src` -> Inside the src folder all the source code regarding the project will reside,
this will not include any kind of tests. (You might want to make seperate folder for tests).

Lets take a look inside the `src` folder.

`config` -> In this folder anything and everything regarding any configuration or setup of a library or module will be done. 
For example: Setting up `dotenv` so that we can use the enviroment variables anywhere in a cleaner fashion, this is done in the `server-config.js`.
One more example can be to setup you logging library that can help you to prepare meaningful logs, so configuration for this library should also be done here.

`routes` -> In the rourtes folder, we register a route and the corresponding middleware and controllers to it.

`middlewares` -> They are just going to intercept the incoming requests where we can write our validators , authentication etc.

`controllers` -> They are like last middlewares as post them you call you business layer to execute the business logic . In controllers we just recieve the incoming requests and data and then pass it to business layer , 
and once business layer returns an output , we structure the API response in controllers and send the output.

`repositories` -> This folder contains all the logic using which we interact the DataBase by writing queries, all the raw queries or ORM queries will go here.

`services` -> Contain the buisness logic and interacts with repositories for data from database.

`utils` -> Contains helper methods, error classes etc.

### SETUP THE PROJECT 

- Download this template from github and open it in your favourite text editor.
- In the root directory create a `.env` file and add the following env variables
```
    PORT = <port number of your choice>
```    
ex:
```
    PORT = 3000
```    
- Inside the `src/config` folder create a file named as `config.json` and write the following code:

```
    {
  "development": {
    "username": "root",
    "password": null,
    "database": "database_development",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
```

- If you are setting up your development enviroment, then write the username of your db , password of your db and in dialect mention the name of db you are using ex: mysql ,mariadb etc.

- If you are setting up test or prod enviroment , make sure you also replace the host with the hosted db url.