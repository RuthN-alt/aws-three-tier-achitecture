#AWS 3-Tier Scalable Web Application Architecture
📌 Overview
---
This project implements a production-style 3-tier distributed web architecture on AWS, designed for scalability, high availability, and fault tolerance.

The system separates concerns into three independent layers:

Web Tier (Presentation Layer)
Application Tier (Business Logic Layer)
Database Tier (Data Layer)

It uses core AWS services including EC2, VPC, Application Load Balancers, Auto Scaling Groups, Amazon Aurora (MySQL), NAT Gateway, and S3.

#🏗️ Architecture
---
Flow of the system:

User → Internet Gateway → External ALB → Web Tier (EC2 + NGINX)
→ Internal ALB → App Tier (EC2 Auto Scaling Group)
→ Amazon Aurora MySQL (Multi-AZ)

#⚙️ System Design Principles
---
This architecture was designed with production-level principles:

Separation of concerns across tiers
Horizontal scalability using Auto Scaling Groups
High availability across multiple Availability Zones
Network isolation using public and private subnets
Secure database access through private networking only
Stateless application design enabling elasticity

#🧱 AWS Services Used
---
Compute

Amazon EC2 (Web + App Tier)
Auto Scaling Groups
Networking
Amazon VPC
Public & Private Subnets
Internet Gateway
NAT Gateway
Route Tables
Security Groups
Load Balancing
Application Load Balancer (External)
Application Load Balancer (Internal)
Database
Amazon Aurora MySQL (Multi-AZ)
DB Subnet Groups
Storage & Deployment
Amazon S3 (application deployment artifacts)
Security & Access
IAM Role for EC2 instances
AWS Systems Manager Session Manager

🖥️ Web Tier (Frontend Layer)
---
Built using React.js
Served via NGINX on EC2
Hosted in public subnets
Handles client requests and static assets
Routes API calls to backend via internal load balancer
Key behavior:
/ → React application
/api/* → Internal Load Balancer

⚙️ Application Tier (Backend Layer)
---
Built with Node.js
Runs inside private subnets
Deployed using Auto Scaling Group
Handles business logic and API requests
Responsibilities:
Process transaction data
Communicate with Aurora database
Expose REST APIs (/transaction, /health)

🗄️ Database Tier
---
Amazon Aurora MySQL (Multi-AZ deployment)
Fully isolated in private subnets
Access restricted to application tier only
Features:
High availability (primary + replica)
Fault tolerance across AZs
Secure private network access only

🔐 Security Design
---
Web tier exposed to internet via ALB only
App tier isolated in private subnets
Database not publicly accessible
Security groups enforce strict traffic flow rules
IAM roles used instead of static credentials
Session Manager used instead of SSH access

📈 Scalability & Fault Tolerance
---
Auto Scaling Groups ensure dynamic scaling of:
Web Tier EC2 instances
App Tier EC2 instances
Multi-AZ deployment ensures:
No single point of failure
Load balancers distribute traffic evenly across instances

🚀 Deployment Strategy
---
Frontend built and stored in S3
EC2 instances pull code from S3
NGINX serves React build
Node.js app runs via PM2
RDS configured via DB subnet group
Internal networking configured via VPC routing

#📊 Key Features Implemented
---
End-to-end 3-tier architecture on AWS
Internal + external load balancing
Auto scaling backend and frontend tiers
Secure VPC design with private database access
Stateless frontend/backend separation
Production-style deployment workflow

#🧠 What This Project Demonstrates
---
Cloud architecture design (AWS)
Distributed systems understanding
Network segmentation (VPC design)
Scalability engineering (ASG + ALB)
Backend API design (Node.js)
Frontend deployment (React + NGINX)
Database integration (Aurora MySQL)

#📷 Screenshots
---



#📌 Summary
---

This project demonstrates a real-world cloud-native architecture using AWS best practices, replicating how scalable web applications are designed in production environments.
                             with love Ruth
