# API Documentation



## Template

Short description

- **URL:** `url`
- **Method:** `method`
- **Parameters:**
  - `param`: description
- **Body:** `{}`
- **Example:** `GET photolibrary/api/sample?param=something`

#### Success Responses

- **Condition:** when to return this
- **Code:** `200 Ok`
- **Content:** `{}`

#### Error Response

- **Condition:** when to return this 
- **Code:** `404 Not Found`
- **Content:** `{}`





## Create Project

Creates a new project at the given location and opens it. If a project is already open, it will be saved and closed.

- **URL:** `/project`
- **Method: ** `POST`
- **Parameters:**
  - `path`: the path to the directory to save the project to
  - `name`: the name of the project
- **Body:** `{}`
- **Example:** `POST photolibrary/api/project`

#### Success Responses

- **Condition:** when the project was successfully created
- **Code:** `201 Created`
- **Content:** `the same body as GET /project`

#### Error Response

- **Condition:** when the path to the directory is invalid or the directory does not exist 
- **Code:** `404 Not Found`
- **Content:** `{}`

##### OR

- **Condition:** when a project with the same name already exists in the given directory
- **Code:** `409 Conflict`
- **Content:** `{}`

##### OR

- **Condition:** when something unexpected goes wrong when creating the project. 
- **Code:** `500 Internal Server Error`
- **Content:** `{message="..."}`





## Load Project

Loads the project with the given path. If a project is already open, it will be saved and closed.

- **URL:** `/project`
- **Method: ** `PUT`
- **Parameters:**
  - `path`: the path to the project file
- **Body:** `{}`
- **Example:** `PUT photolibrary/api/project`

#### Success Responses

- **Condition:** when the project was successfully opened
- **Code:** `201 Created`
- **Content:** `the same body as GET /project`

#### Error Response

- **Condition:** when the path to the project is invalid or the project does not exist 
- **Code:** `404 Not Found`
- **Content:** `{}`

##### OR

- **Condition:** when something unexpected goes wrong when creating the project. 
- **Code:** `500 Internal Server Error`
- **Content:** `{message="..."}`



## Get Project Info

Returns general information about the currently open project

- **URL:** `/project`

- **Method:** `GET`

- **Parameters:**

- **Body:** 

  ```json
  {
  	name: "string"
  }
  ```

- **Example:** `GET photolibrary/api/project`

#### Success Responses

- **Condition:** when the request was successful
- **Code:** `200 Ok`
- **Content:** `{}`

#### Error Response

- **Condition:** when no project is currently open
- **Code:** `409 Conflict`
- **Content:** `{}`