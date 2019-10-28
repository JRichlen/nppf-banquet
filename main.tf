
provider "aws" {
  region = "us-east-1"
}

module "site-main" {
  source = "https://github.com/JRichlen/cloudfront-s3-route53.git"

  environment = "prod"
  name = "nppf-banquet"
  url = "nppf-banquet.com"
  ssl_arn = "arn:aws:acm:us-east-1:065793880796:certificate/2be3fa2c-2299-4f15-8f8d-e45d8997b26e"
  route53_zone_id = "Z13NF4FS825BLL"
  region = "us-east-1"
}
