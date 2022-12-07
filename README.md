# phonebook-api-mongo-node-express

# 🚀 Phonebook API service in NodeJS, Express and MongoDB 🚀

https://github.com/coding-to-music/phonebook-api-mongo-node-express

https://phonebook-api-mongo-node-express.vercel.app/

From / By https://github.com/medaharrat

https://github.com/medaharrat/phonebook-api

## Environment variables:

```java
# This is not being used - config.json is being used
MONGO_URI="mongodb+srv://userid:password@cluster0.host.mongodb.net/phonebook-api-mongo-node-express?retryWrites=true&w=majority"

```

## GitHub

```java
git init
git add .
git remote remove origin
git commit -m "first commit"
git branch -M main
git remote add origin git@github.com:coding-to-music/phonebook-api-mongo-node-express.git
git push -u origin main
```

# Phonebook API

### Phonebook API service in NodeJS, Express and MongoDB

### Requirements

Write a Javascript based server (preferably using NodeJS and Express) that acts as an API and provides Phonebook services.
The phonebook should contain phone numbers and subscribers.
For any subscriber, one or more phone numbers can be assigned.
For any phone number exactly one subscriber can be assigned.
The records of the phonebook can be stored in a database, or locally on the server in the data structure of your choice.
Make sure there are some pre-set records when you hand in your homework, so your server can be tested. (either by filling the local data structure, or sql commands to fill the database with example records)
Subscriber's name could be anything.
Incoming phone number's format should be validated against a pre-set regexp for EVERY request. Use Middleware for it if you can. Return an error message when the phone number was malformed in the request without fulfilling the original request.

Your API server should accept the following html requests:

1. GET request to receive all the phonebook records in JSON format
2. GET request that expects a phone number, and returns either the subscriber's name belonging to it, or a not found message (use correct HTML response codes in both cases)
3. GET request that expects a subscriber's name and returns either all the phone numbers belinging to him/her, or a not found message (use correct HTML response codes in both cases)
4. POST request that expects a name and a phone number, and adds these to your phonebook as a pair. Send an OK response if it is added, or an error message when the exact same record is already in the phonebook, or if the input is malformed. (use correct HTML response codes in all cases)
5. POST request that expects a name and a phone number, and deletes the record defined by the input parameters. Send an OK response if it was deleted, or a not found message if the given record is not in the phonebook. (use correct HTML response codes in both cases)

Provide an example input for the requests you were able to finish during the homework in a text file.
Write clean, well-organized, self documenting code.

## Jade has been renamed Pug

```
npm uninstall jade

npm install pug

npm install pug-cli -g

npm uninstall pug

npm install jade
```

## copy config.json-example to config.json

```
cp config.json-example config.json

# adjust the values in config.json
```

## Run the docker file

```
# Appareently this is all that is needed:
docker-compose up

# This is best:
docker build -f ./Dockerfile .

# This did not work, it is missing context and so the copy file command did not work:
docker build - < Dockerfile

# Other interesting commands:
docker build .

docker image ls  (note your image#)

docker tag 123456789 yourname/projectname-image

docker run 123456789

docker-compose up
```

## Was using an old image, so clean them up so they will be built fresh

```
df -h

docker image list

docker system df

docker container list

docker image help

docker image prune

df -h

docker volume ls

docker volume help

# Prune unused volumes

docker volume prune

# Prune images that now are unneeded, not connected to volumes or containers

docker image prune -a

df -h
```

## requests for testing (from requests.http file)

```
VSC React Client Test

###
# Create a new user
POST http://localhost:8000/api/subscribers/create
curl -X POST -H "Content-Type: application/json" -d '{"name": "linuxize", "phone": "0123456789"}' http://localhost:8000/api/subscribers/create
Content-Type: application/json
{
    "name": "linuxize",
    "phone": "0123456789"
}

###
# Create the same user with a different number
POST http://localhost:8000/api/subscribers/create
curl -X POST -H "Content-Type: application/json" -d '{"name": "linuxize", "phone": "1234567890"}' http://localhost:8000/api/subscribers/create
Content-Type: application/json
{
    "name": "linuxize",
    "phone": "1234567890"
}

###
# Get all records
GET http://localhost:8000/api/subscribers/
curl http://localhost:8000/api/subscribers/ -H "Accept: application/json"

###
# Get the name of the user by one of his phone numbers
GET http://localhost:8000/api/subscribers/:phone
curl http://localhost:8000/api/subscribers/0123456789 -H "Accept: application/json"

###

###
# Get phone numbers by subscriber name
GET http://localhost:8000/api/phones/:name
curl http://localhost:8000/api/phones/linuxize -H "Accept: application/json"
###

###
# Delete a subscriber with phone numbers assigned to it
POST https://localhost:8000/subscribers/delete/
curl -X POST -H "Content-Type: application/json" -d '{"name": "linuxize", "number": "1234567890"}' http://localhost:8000/api/subscribers/delete
{
    "name": "linuxize",
    "number": "0123456789"
}
```

## Landing page looks like this

```
## Phonebook API
### Endpoints

GET: Get all subscribers and their phone numbers
/api/subscribers/

GET: Get a subscriber's name by a phone number
/api/subscribers/:phone

POST: Create a new subscriber
/api/subscribers/create

POST: Delete an existing subscriber
/api/subscribers/delete

GET: Get phone numbers of a subscriber
/api/subscribers/:name
```

## Getting this error in the web browser console

```
Refused to apply style from 'http://localhost:8000/stylesheets/style.css' because its MIME type ('text/html') is not a supported stylesheet MIME type, and strict MIME checking is enabled.
```