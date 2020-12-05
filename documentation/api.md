# API Documentation



## Import Images

Imports all images from the given directory

- **URL:** `photolibrary/api/images/import`
- **Method:** `POST`
- **Parameters:**
- `dir`: the url-encoded path to the directory
- **Body:** `{}`
- **Example:** `photolibrary/api/images/import?dir=D%3A%5CLukasRuegner%5CBilder%5C2020%20Tessin`

#### Success Responses

- **Condition:** Images where successfully imported

- **Code:** `202 Accepted`

- **Content:** `{}`

#### Error Responses

- **Condition:** The directory could not be found
- **Code:** `404 Not Found`
- **Content:** `{}`

##### OR

- **Condition:** The files is not a directory
- **Code:** `400 Bad Request`
- **Content:** {}

