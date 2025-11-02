#!/bin/bash

# This script is used to run database migrations for the career toolkit project.

set -e

# Navigate to the API directory
cd api

# Run the Prisma migration command
npx prisma migrate deploy

echo "Database migrations completed successfully."