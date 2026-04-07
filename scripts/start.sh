#!/bin/bash
set -e

yum update -y
yum install -y httpd

systemctl start httpd
systemctl enable httpd

rm -rf /var/www/html/*
cp -r /home/ec2-user/* /var/www/html/

systemctl restart httpd
