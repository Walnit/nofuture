FROM node:18

# Create and change to the app directory.
WORKDIR /usr/src/app

# Install app dependencies.
COPY package*.json ./
RUN npm install

# Bundle app source code.
COPY . .

# Expose the port the app runs on.
EXPOSE 3000

# Start the app.
CMD ["node", "server.js"]
