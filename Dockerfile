# Build Stage
FROM node:latest

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy the contents of the local 'CourseHub' directory to the root
# COPY COURSEHUB/* /
COPY package*.json ./
COPY . .

# Install dependencies
RUN npm install

# Expose port 80 for the Nginx server
EXPOSE 3000

# Start Nginx
CMD ["npm", "start"]
