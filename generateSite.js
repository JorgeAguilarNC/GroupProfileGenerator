const generateTeam = (team) => {
  console.log(team);
  const html = [];
  //generate manager card
  const generateManager = (manager) => {
    console.log(manager);
    let managerHtml = (
      //Bootstrap code
      <div class='card' style='width: 18rem;'>
        <div class='card-header'>
          ${manager.name} <br />
          <i class='fas fa-mug-hot'></i>Manager
        </div>
        <ul class='list-group list-group-flush'>
          <li class='list-group-item'>ID: ${manager.id}</li>
          <li class='list-group-item'>
            Email:
            <span id='email'>
              <a href='mailto:${manager.email}'></a>{" "}
            </span>
          </li>
          <li class='list-group-item'>office number:${manager.officeNumber}</li>
        </ul>
      </div>
    );
    html.push(managerHtml);
  };

  const generateEngineer = (engineer) => {
    console.log(engineer);
    let engineerHtml = (
      <div class='card' style='width: 18rem;'>
        <div class='card-header'>
          ${engineer.name} <br />
          <i class='fas fa-mug-hot'></i>engineer
        </div>
        <ul class='list-group list-group-flush'>
          <li class='list-group-item'>ID: ${engineer.id}</li>
          <li class='list-group-item'>
            Email:
            <span id='email'>
              <a href='mailto:${engineer.email}'>${engineer.email}</a>
            </span>
          </li>
          <li class='list-group-item'>
            Github username:{" "}
            <a
              target='blank'
              href='https://github.com/${engineer.githubUsername}'>
              ${engineer.githubUsername}
            </a>{" "}
          </li>
        </ul>
      </div>
    );
    html.push(engineerHtmlHTML);
  };

  const generateIntern = (intern) => {
    console.log(intern);
    let internHtml = (
      <div class='card' style='width: 18rem;'>
        <div class='card-header'>
          ${intern.name} <br />
          <i class='fas fa-user-graduate'></i>intern
        </div>
        <ul class='list-group list-group-flush'>
          <li class='list-group-item'>ID: ${intern.id}</li>
          <li class='list-group-item'>
            {" "}
            Email:{" "}
            <span id='email'>
              <a href='mailto: ${intern.email}'>${intern.email}</a>{" "}
            </span>{" "}
          </li>
          <li class='list-group-item'>school: ${intern.school} </li>
        </ul>
      </div>
    );
    html.push(internHtmlHTML);
  };
  //for look for employees
  for (let i = 0; i < team.length; i++) {
    if (team[i].getrole() === "manager") {
      generateManager(team[i]);
    }
    if (team[i].getrole() === "engineer") {
      generateIntern(team[i]);
    }
    if (team[i].getrole() === "intern") {
      generateIntern(team[i]);
    }
  }
  //html blocks
  return html.join("");
};
module.exports = (team) => {
  return `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <script src="https://use.fontawesome.com/c59e55c46d.js"></script>
    <link rel="stylesheet" href="..//assets\style.css"/>
    <title>Team Profile Generator</title>
</head>

<body>
    <header>
        <h1>My Team</h1>
    </header>
    <main> ${generateTeam(team)}
    </main>
</body>
</html>
`;
};
