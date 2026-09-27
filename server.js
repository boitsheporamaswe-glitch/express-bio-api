const express = require('express')
const app = express();
const PORT = 5000;
const skills = ['HTML', 'CSS', 'JavaScript', 'Node.js'];

app.get('/', (req, res) => {

  res.send(`

    <h1>Welcome to My Express Bio API!</h1>
    <p>Welcome to my personal Express API.</p>
    
    <ul>
       <li><a href="/api/bio">My Bio</a></li>
       <li><a href="/api/skills">My Skills</a></li>
       <li><a href="/api/greet/yourname">Greet Me</a></li>
    </ul>
  `);
});

app.get('/api/bio', (req, res) => {

  res.json({

    name: 'Botlhale',
    role: 'Aspiring Fullstack Developer',
    track: 'Month 4 Backend Essentials',
    status: 'Learning Express.js'

  });

});

app.get('/api/skills', (req, res) => {

  res.json(skills);

});

app.get('/api/skills/:index', (req, res) => {

  const index = Number(req.params.index);

  if (!Number.isInteger(index) || index < 0 || index >= skills.length) {
    return res.status(404).send('<h1>404: Skill Not Found</h1>');
  }

  res.json(skills[index]);

});

app.get('/api/greet/:name', (req, res) => {

  const name = req.params.name;

  res.json({

    message: `Hello, ${name}! Welcome to my API`

  });

});

app.use((req, res) => {

  res.status(404).send('<h1>404: Page Not Found</h1>');

});

app.listen(PORT, () => {

  console.log(`Server running at http://localhost:${PORT}/`);

});


