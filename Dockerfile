# Define from what image we want to build from
FROM node:16

# Create a directory to hold the application code inside the image
# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./


# Next thing we need to do is to install your app dependencies using the npm binary
RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .

# Your app binds to port 8080 so you'll use the EXPOSE instruction to have it mapped by the docker daemon
EXPOSE 8080

# Last but not least, define the command to run your app using CMD which defines your runtime. 
# Here we will use node index.js to start your server:

CMD [ "node", "server.js" ]