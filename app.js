const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const { managerQues, engineerQues, internQues } = require("./lib/questions");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

// Using inquirer to gather information about the development team members,
// and to created objects for each team member as per the respective class

const teamArray = [];
let id = 1;

const getEmployeeDetails = (questions, flag) => {
  inquirer.prompt(questions).then((answer) => {
    if (flag === "m") {
      // create manager object using constructor and push in the team array if flag is "m"
      let manager = new Manager(
        answer.employeeName,
        id++,
        answer.email,
        answer.officeNumber
      );
      teamArray.push(manager);
    } else if (flag === "i") {
      //create intern object using constructor and push in the team array if flag is "i"
      let intern = new Intern(
        answer.employeeName,
        id++,
        answer.email,
        answer.schoolName
      );
      teamArray.push(intern);
    } else if (flag === "e") {
      // create Engineer object using constructor and push in the team array if flag is "e"
      let engineer = new Engineer(
        answer.employeeName,
        id++,
        answer.email,
        answer.gitHubUserName
      );
      teamArray.push(engineer);
    }
    //based on what type of team member user chooses,
    //getEmployeeDetails function is called with respective flag and questions
    if (answer.temMemType === "Intern") {
      getEmployeeDetails(internQues, "i");
    } else if (answer.temMemType === "Engineer") {
      getEmployeeDetails(engineerQues, "e");
    } else {
      // if the user choose None as the next team member then render function is called
      // with teamArray as the parameter.
      // This function returns the html data based on the teamArray.
      const renderResp = render(teamArray);

      //write the html data in a file.
      fs.writeFile(outputPath, renderResp, (err) => {
        err ? console.error(err) : console.log("success");
      });
    }
  });
};
// call "getEmployeeDetails" function with "managerQues" & "m" as parameters.

getEmployeeDetails(managerQues, "m");
