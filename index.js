const generateSite = (team) => {
  console.log(team);
  //create an array to push html elements and loop through team data
  const html = [];

  const generateManager = (manager) => {
    console.log(manager);
    let managerHtml = (
      <div class='card' style='width: 18rem:'>
        <div class='card-header'>
          ${engineer.name} <br />
          <i class='fas fa-glasses'></i>Engineer
        </div>
        <ul class='list-group list-group-flush'>
          <li class='list-group-item'>ID: $(engineer.id)</li>
          <li class='list-group-item'>
            Email:
            <span id='email'>
              <a href='mailto:$ {engineer.email}'></a>
            </span>{" "}
          </li>
          <li class='list-group-item'>
            Github userName:
            <a
              target='_blank'
              href='https://github.com/$ {engineer.githubUserName} '>
              ${engineer.githubUserName}{" "}
            </a>
          </li>
        </ul>
      </div>
    );
  };
  const generateIntern = (intern) => {
    console.log(intern);
    let internHtml = (
      <div class='card' style='width: 18rem:'>
        <div class='card-header'>
          ${engineer.name} <br />
          <i class='fas fa-glasses'></i>intern
        </div>
        <ul class='list-group list-group-flush'>
          <li class='list-group-item'>ID: $(intern.id)</li>
          <li class='list-group-item'>
            Email:
            <span id='email'>
              <a href='mailto:$ {intern.email}'></a>
            </span>{" "}
          </li>
          <li class='list-group-item'>
            Github userName:
            <a
              target='_blank'
              href='https://github.com/$ {intern.githubUserName} '>
              ${intern.githubUserName}{" "}
            </a>
          </li>
        </ul>
      </div>
    );
    html.push(internHtml);
  };
  //loop for all Staff members
  for (let i = 0; i < team.length; i++) {
    if (team[i].getRole() == "Manager") {
      generateManager(team[i]);
    }
    if (team[i].getRole() === "Engineer") {
      generateEngineer(team[i]);
    }
    if (team[i].getRole() === "intern") {
      generateIntern(team[i]);
    }
  }
};
