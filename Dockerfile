# syntax=docker/dockerfile:1
FROM node
WORKDIR /api
ENV NODE_APP=app.js
ENV NODE_RUN_HOST=0.0.0.0
RUN apk add --no-cache gcc musl-dev linux-headers
COPY requirements.txt requirements.txt
RUN pip install -r requirements.txt
EXPOSE 8000
COPY . .
CMD ["node", "run"]