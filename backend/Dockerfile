# Use Node base image
FROM node:18

# Create app directory
WORKDIR /usr/src/app

# Copy package files and install deps
COPY package*.json ./
RUN npm install

# Copy app source
COPY . .

# Expose port (change if needed)
EXPOSE 8080

# Start app
CMD ["npm", "start"]
