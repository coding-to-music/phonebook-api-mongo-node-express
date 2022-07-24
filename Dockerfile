# Using node v15.x
FROM node:16

# Set server home
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Copy app
COPY . .

# Install dependencies
# RUN ls -l
RUN npm install

# Expose ports
EXPOSE 8000

# Start command
CMD ["npm", "run", "start"]