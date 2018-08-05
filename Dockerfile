FROM node:10.8.0

ENV ROOT /app

# Make node modules cacheable
RUN mkdir -p $ROOT
COPY package.json package-lock.json $ROOT/

# Install dependencies
WORKDIR $ROOT
RUN npm install

# Copy code
COPY . $ROOT/

# Start the app
#CMD $ROOT/bin/runSimulator