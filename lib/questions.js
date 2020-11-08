const managerQues = [
  {
    type: "input",
    message: "Enter Manager's name",
    name: "employeeName",
  },
  {
    type: "input",
    message: "Enter Manager's email",
    name: "email",
  },
  {
    type: "number",
    message: "Enter officeNumber",
    name: "officeNumber",
  },
  {
    type: "list",
    message: "Add team members",
    name: "temMemType",
    choices: ["None", "Intern", "Engineer"],
  },
];

const engineerQues = [
  {
    type: "input",
    message: "Enter Engineer's name",
    name: "employeeName",
  },
  {
    type: "input",
    message: "Enter Engineer's email",
    name: "email",
  },
  {
    type: "input",
    message: "Enter github user-name",
    name: "gitHubUserName",
  },
  {
    type: "list",
    message: "Add team members",
    name: "temMemType",
    choices: ["None", "Intern", "Engineer"],
  },
];

const internQues = [
  {
    type: "input",
    message: "Enter Intern's name",
    name: "employeeName",
  },
  {
    type: "input",
    message: "Enter Intern's email",
    name: "email",
  },
  {
    type: "input",
    message: "Enter school name",
    name: "schoolName",
  },

  {
    type: "list",
    message: "Add team members",
    name: "temMemType",
    choices: ["None", "Intern", "Engineer"],
  },
];

module.exports = {
  managerQues,
  engineerQues,
  internQues,
};
