output "bucket_name" {
  description = "The name of the S3 bucket"
  value       = aws_s3_bucket.image_bucket.bucket
}

output "lambda_function_name" {
  description = "The name of the Lambda function"
  value       = aws_lambda_function.upload_image.function_name
}

output "api_gateway_url" {
  description = "The URL of the API Gateway"
  value       = aws_apigatewayv2_api.api_gateway.api_endpoint
}
