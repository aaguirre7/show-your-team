const path = require("path");
const fs = require("fs");

const htmlSRC = path.resolve(__dirname, "../src");

const buildSite = employees => {
    const htmlCODE = [];
  
    htmlCODE.push(employees
      .filter(employee => employee.getRole() === "manager")
      .map(manager => makeManager(manager))
    );
    htmlCODE.push(employees
      .filter(employee => employee.getRole() === "engineer")
      .map(engineer => makeEngineer(engineer))
    );
    htmlCODE.push(employees
      .filter(employee => employee.getRole() === "intern")
      .map(intern => makeIntern(intern))
    );
  
    return makeMain(html.join(""));
  
  };
  
  const makeManager = manager => {
    let template = fs.readFileSync(path.resolve(htmlSRC, "manager.html"), "utf8");
    template = replacePlaceholders(template, "name", manager.getName());
    template = replacePlaceholders(template, "role", manager.getRole());
    template = replacePlaceholders(template, "email", manager.getEmail());
    template = replacePlaceholders(template, "id", manager.getId());
    template = replacePlaceholders(template, "officeNumber", manager.getOfficeNumber());
    return template;
  };
  
  const makeEngineer = engineer => {
    let template = fs.readFileSync(path.resolve(htmlSRC, "engineer.html"), "utf8");
    template = replacePlaceholders(template, "name", engineer.getName());
    template = replacePlaceholders(template, "role", engineer.getRole());
    template = replacePlaceholders(template, "email", engineer.getEmail());
    template = replacePlaceholders(template, "id", engineer.getId());
    template = replacePlaceholders(template, "github", engineer.getGithub());
    return template;
  };
  
  const makeIntern = intern => {
    let template = fs.readFileSync(path.resolve(htmlSRC, "intern.html"), "utf8");
    template = replacePlaceholders(template, "name", intern.getName());
    template = replacePlaceholders(template, "role", intern.getRole());
    template = replacePlaceholders(template, "email", intern.getEmail());
    template = replacePlaceholders(template, "id", intern.getId());
    template = replacePlaceholders(template, "school", intern.getSchool());
    return template;
  };
  
  const makeMain = htmlCODE => {
    const template = fs.readFileSync(path.resolve(htmlSRC, "main.html"), "utf8");
    return replacePlaceholders(template, "team", htmlCODE);
  };
  
  const replacePlaceholders = (template, placeholder, value) => {
    const pattern = new RegExp("{{ " + placeholder + " }}", "gm");
    return template.replace(pattern, value);
  };
  
  module.exports = buildSite;