const express = require("express");
const cors = require("cors");

const { v4: uuid, validate: isUuid } = require('uuid');

const app = express();

app.use(express.json());
app.use(cors());


function validateRepositoryId(request, response, next){
  const { id } = request.params;

  if (!isUuid(id)){
    return response.status(400).json({ error: 'Invalid repository ID'});
  }

  return next();

}


app.use('/repositories/:id', validateRepositoryId );

const repositories = [];

app.get("/repositories", (request, response) => {
   return response.json(repositories);
});

app.post("/repositories", (request, response) => {
   const {title, url, techs} = request.body;

   const repository = {id: uuid(), title, url, techs, likes: 10}

   repositories.push(repository);

   return response.status(201).json(repository);

});

app.put("/repositories/:id", (request, response) => {
    const { id } = request.params;
    const { title, url, techs } = request.body;

    const repositoryIndex = repositories.findIndex(repository => repository.id = id);

    if (repositoryIndex < 0 ){
      return response.status(400).json( { error: 'Repository not found' });
    }

    //const loadRepository = repositories.find(id);
    const numbersLikes = repositories[repositoryIndex].likes;

    const repository = {
      id,
      title,
      url,
      techs,
      likes: numbersLikes
    }

    repositories[repositoryIndex] = repository;
    
    return response.json(repository);

});

app.delete("/repositories/:id", (request, response) => {
  // TODO
});

app.post("/repositories/:id/like", (request, response) => {
  // TODO
});

module.exports = app;
