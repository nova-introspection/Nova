#Use dockerhub image for Node
FROM node:10

#Create App Directory
WORKDIR /usr/src/app

#INSTALL APP DEPENDENCIES
COPY . /usr/src/app/

RUN npm install --only=production

#Expose port from server file
EXPOSE 3000

#Execute server file
ENTRYPOINT [ "node", "./server/server.js" ]