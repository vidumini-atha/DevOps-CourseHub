# Step 1: Use a Node.js image to build the app
FROM node:16 AS build

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the app files
COPY . .

# Build the React app
RUN npm run build

# Step 2: Serve the build with an Nginx server
FROM nginx:alpine

# Copy the build from the build stage to Nginx's public directory
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80 to access the app in the browser
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
