import AWS from 'aws-sdk';


export const handler = async (event) => {

    const bucket = event.queryStringParameters.bucket;
    const file = event.queryStringParameters.file;

    //read file from s3 bucket
    const s3 = new AWS.S3();
    const params = {
        Bucket: bucket,
        Key: file
    }

    const data = await s3.getObject(params).promise();

    //return file content
    const response = {
        statusCode: 200,
        body: data.Body.toString('utf-8')
    };
    console.log(response)
    return response;

};