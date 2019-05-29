# Purpose

The purpose of the controllers is the manage the business logic of the requests. The routers send send the request data to the controller, and the controller interacts with the database to generate the appropriate return or error.

### Input
```
function ( ..., callback )
```

### Output 
```
callback( error, result );
{
  error: true/non-null OR false/null 
  result: data OR null
}
```

# Out of Scope
The router should be in charge of what to do when receiving an error vs when receiving the result