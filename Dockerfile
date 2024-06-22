# Use the official Node.js image with a specific version
FROM node:16

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and yarn.lock files
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn install --frozen-lockfile

# Copy the rest of your frontend application
COPY . .

# Build your Next.js application
RUN yarn build

# Expose the port the app runs on
EXPOSE 3000

# Command to run your app
CMD ["yarn", "start"]
