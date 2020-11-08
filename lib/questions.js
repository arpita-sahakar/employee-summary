//function to validate is string is empty as input
const stringValidator = async (input) => {
  return input != null && input.trim() != "" ? true : "Invalid input";

};

// function to validate if the email id matches the below pattern
const validateEmail = async (mail) => {
    return  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
        mail
      )? true : "You have entered an invalid email address!"

};

// function to validate if the input value is a number or not.
const numberValidator = async (input) => {
    return !isNaN(input) ? true : "Incorrect number"

};

//contains all the questions to be asked to the user and their respective validations
const managerQues = [
  {
    type: "input",
    message: "Enter Manager's name",
    name: "employeeName",
    validate: stringValidator,
  },
  {
    type: "input",
    message: "Enter Manager's email",
    name: "email",
    validate: validateEmail,
  },
  {
    type: "input",
    message: "Enter office phone number",
    name: "officeNumber",
    validate: numberValidator,
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
    validate: stringValidator,
  },
  {
    type: "input",
    message: "Enter Engineer's email",
    name: "email",
    validate: validateEmail,
  },
  {
    type: "input",
    message: "Enter github user-name",
    name: "gitHubUserName",
    validate: stringValidator,
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
    validate: stringValidator,
  },
  {
    type: "input",
    message: "Enter Intern's email",
    name: "email",
    validate: validateEmail,
  },
  {
    type: "input",
    message: "Enter school name",
    name: "schoolName",
    validate: stringValidator,
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
