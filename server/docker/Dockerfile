FROM node:6.10.1

ENV BADMINTON_BACKEND_PARAM_MONGOURL "mongodb://mongo:27017/"

# Set a working directory
WORKDIR /usr/src/app

# Copy application files
COPY delivery  .
COPY *.template.json .
COPY *.sh .

# Install Node.js dependencies
RUN npm install --production --no-progress

ENTRYPOINT ["/usr/src/app/createConfigurationFile.sh"]