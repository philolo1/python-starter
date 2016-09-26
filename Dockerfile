FROM python:3.5

# Install Node
RUN curl -sL https://deb.nodesource.com/setup_4.x | bash - 
RUN apt-get install -y nodejs

ENV PYTHONUNBUFFERED 1
RUN mkdir /app
RUN mkdir /app/code
WORKDIR /app
RUN export PYTHONPATH=$PYTHONPATH:/app

# Install Python requirements
COPY requirements.txt /app/
RUN pip install -r requirements.txt

# Install JavaScript requirements
COPY package.json /app/
RUN npm install -d

# Link gulp
RUN ln -s /app/node_modules/.bin/gulp /usr/bin/gulp

COPY . /app/code/
RUN ls /app/code/
WORKDIR /app/code
