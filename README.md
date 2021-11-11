# Students

## Prerequisites

```
Node.js version >= 14.17.1

```

## Technologies
Project created with:
* Express.js
* MySQL
* Sequelize ORM

## Setup

* To run this project, clone the project from github address.
* First make a copy of .env.sample and rename to .env
* Edit .env with:   

  ```
   DB_USERNAME= User name to manage the database
   DB_PASSWORD= Password
   DB_DATABASE= Name of the database
   DB_DIALECT=  mysql
   DB_HOST= Address of the MySQL Server
  ```
## Install dependencies
```
 npm install

```

## To start the project .

```
npm start
```

## Api Routes
### Persons CRUD
**Show List of Persons**
----
  Returns json data about a list of persons with count of childs.

* **URL**

 /api/persons

* **Method:**

  `GET`
  
*  **URL Params**
  None

* **Data Params**

  None

**Display Person**
----
  Returns json data with a single person data and its childs.

* **URL**

 /api/persons/:uuid

* **Method:**

  `GET`
  
*  **URL Params**
  None

* **Data Params**

  None

**Add Persons**
----
  Creates a Person

* **URL**

 /api/persons

* **Method:**

  `POST`
  
*  **URL Params**
  None

* **Data Params**

  {
    "firstName": "Jhon",
    "lastName": "Doe",
    "gender": "Male",
    "age": 35,
    "married": 1
 }

 **Update Person**
----
  Updates a Person

* **URL**

 /api/persons/:uuid

* **Method:**

  `PUT`
  
*  **URL Params**
  uuid

* **Data Params**

 {
    "firstName": "Alex",
    "lastName": "Doe",
    "gender": "Male",
    "age": 36,
    "married": 1
 }

 **Delete Person**
----
  Deletes a Person

* **URL**

 /api/persons/:uuid

* **Method:**

  `DELETE`
  
*  **URL Params**
  uuid

* **Data Params**

  None

### Childs CRUD
**Show List of Childs**
----
  Returns json data about a list of childs.

* **URL**

 /api/childs

* **Method:**

  `GET`
  
*  **URL Params**
  None

* **Data Params**

  None

**Add Child**
----
  Creates a Child

* **URL**

 /api/childs

* **Method:**

  `POST`
  
*  **URL Params**
  None

* **Form Data**

  {
    "name": "Middleweight",
    "PersonId": 2
 }

 **Update Child**
----
  Updates a Child

* **URL**

 /api/childs/:uuid

* **Method:**

  `PUT`
  
*  **URL Params**
  uuid

* **Form Data**

  {
    "name": "Middleweight1",
    "PersonId": 1,
 }

 **Delete Child**
----
  Deletes a Child

* **URL**

 /api/childs/:uuid

* **Method:**

  `DELETE`
  
*  **URL Params**
  uuid

* **Data Params**

  None


:scroll: **END** 