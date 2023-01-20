FROM node:alpine

COPY . /home/todo_demo/

WORKDIR /home/todo_demo/

CMD ["node","app.js"]