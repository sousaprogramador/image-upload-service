variable "aws_region" {
  description = "The AWS region to deploy resources to"
  type        = string
  default     = "sa-east-1"
}

variable "bucket_name" {
  description = "The name of the S3 bucket for image uploads"
  type        = string
  default     = "image-upload-service-${random_id.bucket_id.hex}-bucket"
}

variable "lambda_function_name" {
  description = "The name of the Lambda function for image uploads"
  type        = string
  default     = "image-upload-function"
}

variable "stage" {
  description = "Deployment stage (e.g., dev, prod)"
  type        = string
  default     = "dev"
}
