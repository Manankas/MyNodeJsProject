# Take node v8.11.2:
FROM node:8.11.2

# Create app's directory in container:
RUN mkdir -p /var/www/opel-rest-api

# Set /var/www/opel-rest-api as default working directory:
WORKDIR /var/www/opel-rest-api

# Copy files not listed in /dockerignore:
COPY . /var/www/opel-rest-api

# Cache clean:
RUN npm cache clean --f

# Run npm install (with --production to avoid installing devDependencies):
RUN npm install --production

# Create a folder where application's log will be stored:
RUN mkdir -p /var/www/opel-rest-api/logs

# Install PM2:
RUN npm install pm2 -g

# Expose port 3000
EXPOSE 3000

#RUN ["pm2-docker", "start", "/var/www/opel-rest-api/dist/index.js"]