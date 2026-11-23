# Haymi Beauty Salon

Starter repository for the Haymi Beauty Salon website.

## Stack

- Frontend: React, TypeScript, and Vite (`frontend/`)
- Backend: ASP.NET Core Web API on .NET 11 (`backend/HaymiBeautySalon.Api/`)
- Cloud: AWS integration and deployment are not configured yet.

## Prerequisites

- Node.js 20.19+ and npm
- .NET 11 SDK

## Run locally

Start the API:

```powershell
dotnet run --project backend\HaymiBeautySalon.Api
```

Start the frontend in a second terminal:

```powershell
cd frontend
npm install
npm run dev
```

The API's sample health endpoint is available at `/api/health` when the API is running.

## AWS

No AWS resources, credentials, or deployment configuration have been created. Choose the AWS services and deployment target before adding infrastructure or cloud SDK dependencies.
