# Deno-rest-api
###Install
##Deno
<p>To install Deno follow the setup guide found [here](https://deno.land/#installation). If you are using an IDE such as VS Code, Atom, Visual Studio or a JetBrains product, make sure to install the appropriate Deno plugin and update ts-config.json if required. A working community-developed plugin can be found [here](https://github.com/justjavac/typescript-deno-plugin).</p>

*   Create a simple Todo REST API endpoint.
*   Use Oak middleware for routing.
*   Routes for **GET,POST,DELETE and PUT** methods.

### Endpoints

* GET - /api/v1/locations
* GET - /api/v1/locations/:id
* POST - /api/v1/locations
* PUT - /api/v1/locations/:id
* DELETE - /api/v1/locations/:id

### Project Structure

```
project
│   README.md
│   routes.ts
|   server.ts
|   types.ys    
│
└───Controllers
    │   location.ts

```
#### Getting Started 

`` - git clone https://github.com/poornimapradeep/Deno-rest-api ``

####   Run

`` deno run --allow-net --allow-write --allow-read --allow-plugin --unstable server.ts ``


###### Note:
>  *--allow-net is to allow network access --allow-read is to allow read access to file system*.

####   open (https://localhost:5000)(https://localhost:5000)




