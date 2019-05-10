#Use dockerhub image for Node
FROM node:10

#Create App Directory
WORKDIR /usr/src/app

#INSTALL APP DEPENDENCIES
COPY . /usr/src/app/
RUN npm install -g webpack
RUN npm install
RUN npm run build
#Expose port from server file
EXPOSE 3000
EXPOSE 80

#Execute server file
CMD REDIS_URI=redis://redis:6379 node server/server.js  