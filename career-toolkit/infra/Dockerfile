FROM node:18

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock)
COPY package.json ./
COPY api/package.json ./api/
COPY worker/package.json ./worker/
COPY web/package.json ./web/
COPY libs/shared/package.json ./libs/shared/
COPY libs/types/package.json ./libs/types/

# Install dependencies
RUN npm install --legacy-peer-deps

# Copy the rest of the application code
COPY . .

# Build the TypeScript code
RUN npm run build --workspace=web
RUN npm run build --workspace=api
RUN npm run build --workspace=worker

# Expose the necessary ports
EXPOSE 3000 4000

# Start the application
CMD ["npm", "run", "start", "--workspace=api"]