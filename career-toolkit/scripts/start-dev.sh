#!/bin/bash

# Navigate to the web directory and start the development server
cd web
npm run dev &

# Navigate to the api directory and start the API server
cd ../api
npm run dev &

# Navigate to the worker directory and start the worker service
cd ../worker
npm run dev &

# Wait for all background processes to finish
wait