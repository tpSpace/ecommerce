# Use the official Node.js image as the base image
FROM node:20-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and yarn.lock files to the container
COPY package.json yarn.lock ./

# Install the dependencies using yarn
RUN yarn install

# Copy the rest of the application code to the container
COPY . .

# Build the Next.js project
RUN yarn build

# Expose the port that the application will run on
EXPOSE 3000

# Start the Next.js application
CMD ["yarn", "start"]
