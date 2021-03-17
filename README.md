# Capstone Project Serverless TODO App with Elasticsearch

## Functionality of the application

This application will allow creating/removing/updating/fetching TODO items. Each TODO item can optionally have an attachment image.
Each user only has access to TODO items that he/she has created.
The backend contains an elasticsearch, so you can perform full text search with Kiban.

# How to run the application

## Backend

To deploy an application run the following commands:

```
cd backend
npm install
sls deploy -v
```

To add an index pattern to Kiban for text search:
- click the generated Kibana link
- navigate to management -> add todos-index*
- navigate to discover -> check available fields (left bar) -> perform full text search (bar top)

## Frontend

To run a client application first edit the `client/src/config.ts` file to set correct parameters. And then run the following commands:

```
cd client
npm install
npm run start
```

This should start a development server with the React application that will interact with the serverless TODO application.

# Postman collection

An alternative way to test your API, you can use the Postman collection that contains sample requests. You can find a Postman collection in this project. To import this collection, do the following.

Click on the import button and import this file:

https://github.com/J1MAV1GN0N/serverless-project-christ/blob/master/Final%20Project.postman_collection.json


