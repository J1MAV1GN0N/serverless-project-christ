import { DynamoDBStreamEvent, DynamoDBStreamHandler } from 'aws-lambda'
import 'source-map-support/register'
import * as elasticsearch from 'elasticsearch';
import * as httpAwsEs from 'http-aws-es';

const esHost = process.env.ES_ENDPOINT

const es = new elasticsearch.Client({
    hosts: [esHost],
    connectionClass: httpAwsEs
})

export const handler: DynamoDBStreamHandler = async (event: DynamoDBStreamEvent) => {
    console.log('Processing events batch from DynamoDB', JSON.stringify(event))

    for (const record of event.Records) {
        console.log('Processing record', JSON.stringify(record))
        if (record.eventName !== 'INSERT') {
            continue
        }
    
        const newItem = record.dynamodb.NewImage //Using NewImage as Stream Variable, but search is used for Todo Text Search

        const todoId = newItem.todoId.S
    
        const body = {
            userId: newItem.userId.S,
            todoId: newItem.todoId.S,
            createdAt: newItem.createdAt.S,
            name: newItem.name.S,
            dueDate: newItem.dueDate.S,
            attachmentUrl: newItem.attachmentUrl.S
        }
    
        await es.index({
            index: 'todos-index',
            type: 'todos',
            id: todoId,
            body
        }) 
    }
}