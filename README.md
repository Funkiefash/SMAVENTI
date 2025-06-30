# Smart Inventory Management System


A serverless smart inventory management system for small businesses built with AWS Lambda and React.


Run `npm install` in both `frontend/` and `backend/`. Add your AWS API URLs to the `.env` files.

## Tech Stack
- Frontend: React + Tailwind
- Backend: AWS Lambda (Node.js)
- Storage: DynamoDB, S3
- ML: Amazon Bedrock (optional)

## Setup

### Frontend

cd frontend
npm install
npm start
````

### Backend

Deploy using AWS CLI or Serverless Framework:


zip -r function.zip .
aws lambda create-function --function-name updateInventory \
  --runtime nodejs18.x --handler updateInventory.handler \
  --role YOUR_IAM_ROLE --zip-file fileb://function.zip
```

Update credentials with:


aws configure
```

## To Edit

Update `.env` with API endpoints and resource ARNs


---

## Final Steps

1. After copying all files, run `npm install` inside the `frontend` folder.
2. You can zip the entire `smart-inventory` folder by right-clicking or using `zip -r smart-inventory.zip smart-inventory`.
