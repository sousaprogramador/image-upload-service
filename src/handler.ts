import { S3 } from 'aws-sdk';
import { APIGatewayProxyHandler } from 'aws-lambda';
import { v4 as uuidv4 } from 'uuid';

const s3 = new S3();

export const uploadImage: APIGatewayProxyHandler = async (event) => {
  const fileName = event.pathParameters?.fileName;
  const body = event.body;

  if (!fileName || !body) {
    return {
      statusCode: 400,
      body: JSON.stringify({
        message: 'Invalid request. fileName and body are required.',
      }),
    };
  }

  const buffer = Buffer.from(body, 'base64');
  const key = `${uuidv4()}-${fileName}`;

  try {
    await s3
      .putObject({
        Bucket: process.env.BUCKET_NAME!,
        Key: key,
        Body: buffer,
        ContentEncoding: 'base64',
        ContentType: 'image/jpeg',
      })
      .promise();

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Image uploaded successfully', key }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: 'Error uploading image',
        error: (error as Error).message,
      }),
    };
  }
};
