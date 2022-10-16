const generateSite = (team) => {
  console.log(team);
  //create an array to push html elements and loop through team data
  const html = [];

  const generateManager = (manager) => {
    console.log(manager);
    let managerHtml = `<div class='card' style='width: 18rem:'>
    <div class='card-header'>
      ${manager.name} <br />
      <i class='fas fa-glasses'></i>manager
    </div>
    <ul class='list-group list-group-flush'>
      <li class='list-group-item'>ID: $(manager.id)</li>
      <li class='list-group-item'>
        Email:
        <span id='email'>
          <a href='mailto:$ {manager.email}'></a>
        </span>{" "}
      </li>
    </ul>
  </div>`;
  };
  const generateEngineer = (engineer) => {
    console.log(engineer);
    let internHtml = `
    <div class='card' style='width: 18rem:'>
    <div class='card-header'>
      ${engineer.name} <br />
      <i class='fas fa-glasses'></i>engineer
    </div>
    <ul class='list-group list-group-flush'>
      <li class='list-group-item'>ID: $(engineer.id)</li>
      <li class='list-group-item'>
        Email:
        <span id='email'>
          <a href='mailto:$ {engineer.email}'></a>
        </span>{" "}
      </li>
    </ul>
  </div>
 `;
    html.push(internHtml);
  };
  const generateIntern = (intern) => {
    console.log(intern);
    let internHtml = `
    <div class='card' style='width: 18rem:'>
    <div class='card-header'>
      ${intern.name} <br />
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
    </ul>
  </div>
 `;
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
