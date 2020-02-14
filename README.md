# kanban

Nama database wajib: kanban-beta-fox

# Kanban API Documentation
## Base URL
```
http://localhost:3000/
```

# User Routes

**Create User**
----
  Returns json data about new User.

* **URL**
  ```
  /signup
  ```

* **Method:**

  `POST`
  
*  **URL Params**
  
    None

* **Data Params**

  **Required**
    
    Headers:
    
    `Content-Type: application/x-www-form-urlencoded`

    Body :

    ```
    name: String
    email: String
    password: String
    ```

* **Success Response:**

  * **Code:** 201 <br />
    **Content:**
    
    expample
    ```
      {
        "id": 1,
        "name": "test",
        "email": "test@mail.com"
      }
    ```
 
* **Error Response:**

  * **Code:** 400 Bad Request <br />
    **Content:**
    
    ```
    {
      "msg": [
          "Please enter your name",
          "Email Format Wrong !",
          "Please enter your password",
          "Password length minimal 5"
      ]
    }
    ```
  OR
  * **Code:** 400 Bad Request (duplicated Email) <br />
    **Content:**
    ```
    {
      "msg": "Email has taken, please use another email"
    }
    ```
  OR

  * **Code:** 500 Internal Server Error <br />
    **Content:**
    
    ```
    {
      "msg": "Internal Server Error"
    }
    ```
    <br/>
**Login User**
----
  Returns jwt token.

* **URL**
  ```
  /signin
  ```

* **Method:**

  `POST`
  
*  **URL Params**
  
    None

* **Data Params**

  **Required**
    
    Headers:
    
    `Content-Type: application/x-www-form-urlencoded`

    Body :

    ```
    email: String
    password: String
    ```

* **Success Response:**

  * **Code:** 200 <br />
    **Content:**
    
    expample
    ```
    {
        "token": jwt-token
    }
    ```
 
* **Error Response:**

  * **Code:** 400 Bad Request <br />
    **Content:**
    
    ```
    {
      "msg": "Wrong Email/Password !"
    }
    ```
  OR

  * **Code:** 500 Internal Server Error <br />
    **Content:**
    
    ```
    {
      "msg": "Internal Server Error"
    }
    ```
    <br/>

# Task Routes
**Add Task**
----
  Returns about new task.

* **URL**
  ```
  /tasks
  ```

* **Method:**

  `POST`
  
*  **URL Params**
  
    None

* **Data Params**

  **Required**
    
    Headers:
    
    `Content-Type: application/x-www-form-urlencoded`
    `token: jwt_token from sigin`

    Body :

    ```
    title: String
    description: String
    category: String
    ```

* **Success Response:**

  * **Code:** 200 <br />
    **Content:**
    
    expample
    ```
    {
      "id": 1,
      "title": "test title",
      "description": "test description",
      "category": "todo",
      "UserId": 1,
      "updatedAt": "2020-02-11",
      "createdAt": "2020-02-11"
    }
    ```
 
* **Error Response:**

  * **Code:** 400 Bad Request <br />
    **Content:**
    
    ```
    {
      "msg": [
          "Please enter title",
          "Please enter description"
      ]
    }
    ```
  OR

  * **Code:** 401 Unauthorized <br />
    **Content:**
    
    ```
    {
      "msg": "You must sign up first !"
    }
    ```
    OR 
    ```
    {
      "msg": "You Must sign in first !"
    }
    ```
  * **Code:** 500 Internal Server Error <br />
    **Content:**
    
    ```
    {
      "msg": "Internal Server Error"
    }
    ```
    <br/>
**Get Task**
----
  Returns all task base on UserId which get from verify token.

* **URL**
  ```
  /tasks
  ```

* **Method:**

  `GET`
  
*  **URL Params**
  
    None

* **Data Params**

  **Required**
    
    Headers:
    
    `Content-Type: application/x-www-form-urlencoded`
    `token: jwt_token from sigin`

    Body :

    none

* **Success Response:**

  * **Code:** 200 <br />
    **Content:**
    
    expample
    ```
    [
      {
          "id": 1,
          "title": "test title",
          "description": "test description",
          "category": "todo",
          "UserId": 1,
          "createdAt": "2020-02-11",
          "updatedAt": "2020-02-11"
      },
      {...}
    ]
    ```
 
* **Error Response:**

  * **Code:** 401 Unauthorized <br />
    **Content:**
    
    ```
    {
      "msg": "You must sign up first !"
    }
    ```
    OR 
    ```
    {
      "msg": "You Must sign in first !"
    }
    ```
  * **Code:** 500 Internal Server Error <br />
    **Content:**
    
    ```
    {
      "msg": "Internal Server Error"
    }
    ```
    <br/>
**Delete Task**
----
  Returns delete message.

* **URL**
  ```
  /tasks/:id
  ```

* **Method:**

  `DELETE`
  
*  **URL Params**
  
    `id=[integer]`

* **Data Params**

  **Required**
    
    Headers:
    
    `Content-Type: application/x-www-form-urlencoded`
    `token: jwt_token from sigin`

    Body :

    none

* **Success Response:**

  * **Code:** 200 <br />
    **Content:**
    
    expample
    ```
    {
      "msg": "Delete Success !"
    }
    ```
 
* **Error Response:**
  * **Code:** 404 Not Found <br />
    **Content:**
    
    ```
    {
      "msg": "Task Not Found"
    }
    ```
  * **Code:** 401 Unauthorized <br />
    **Content:**
    
    ```
    {
      "msg": "You must sign up first !"
    }
    ```
    OR 
    ```
    {
      "msg": "You Must sign in first !"
    }
    ```
    OR
    ```
    {
      "msg": "Not Authorized"
    }
    ```
  * **Code:** 500 Internal Server Error <br />
    **Content:**
    
    ```
    {
      "msg": "Internal Server Error"
    }
    ```
    <br/>
**Update Task Category**
----
  Returns updated task.

* **URL**
  ```
  /tasks/:id
  ```

* **Method:**

  `PATCH`
  
*  **URL Params**
  
    `id=[integer]`

* **Data Params**

  **Required**
    
    Headers:
    
    `Content-Type: application/x-www-form-urlencoded`
    `token: jwt_token from sigin`

    Body :

    ```
    category: String
    ```
* **Success Response:**

  * **Code:** 200 <br />
    **Content:**
    
    expample
    ```
    {
      "id": 1,
      "title": "test title",
      "description": "test description",
      "category": "doing", << edited
      "UserId": 5,
      "createdAt": "2020-02-11",
      "updatedAt": "2020-02-11"
    }
    ```
 
* **Error Response:**

  * **Code:** 404 Not Found <br />
    **Content:**
    
    ```
    {
      "msg": "Task Not Found"
    }
    ```
  * **Code:** 401 Unauthorized <br />
    **Content:**
    
    ```
    {
      "msg": "You must sign up first !"
    }
    ```
    OR 
    ```
    {
      "msg": "You Must sign in first !"
    }
    ```
    OR
    ```
    {
      "msg": "Not Authorized"
    }
    ```
  * **Code:** 500 Internal Server Error <br />
    **Content:**
    
    ```
    {
      "msg": "Internal Server Error"
    }
    ```
    <br/>
**Update Task Detail**
----
  Returns updated task.

* **URL**
  ```
  /tasks/:id
  ```

* **Method:**

  `PUT`
  
*  **URL Params**
  
    `id=[integer]`

* **Data Params**

  **Required**
    
    Headers:
    
    `Content-Type: application/x-www-form-urlencoded`
    `token: jwt_token from sigin`

    Body :

    ```
    title: String
    description: String
    category: String
    ```
* **Success Response:**

  * **Code:** 200 <br />
    **Content:**
    
    expample
    ```
    {
      "id": 1,
      "title": "updated", << edited
      "description": "updated", << edited
      "category": "done", << edited
      "UserId": 1,
      "createdAt": "2020-02-11",
      "updatedAt": "2020-02-11"
    }
    ```
 
* **Error Response:**

  * **Code:** 404 Not Found <br />
    **Content:**
    
    ```
    {
      "msg": "Task Not Found"
    }
    ```
  * **Code:** 401 Unauthorized <br />
    **Content:**
    
    ```
    {
      "msg": "You must sign up first !"
    }
    ```
    OR 
    ```
    {
      "msg": "You Must sign in first !"
    }
    ```
    OR
    ```
    {
      "msg": "Not Authorized"
    }
    ```
  * **Code:** 500 Internal Server Error <br />
    **Content:**
    
    ```
    {
      "msg": "Internal Server Error"
    }
    ```
    <br/>