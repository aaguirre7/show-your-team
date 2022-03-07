<div id="top"><div>
<!--
*** This is the Readme for the team profile generator generator 
-->

<!-- Project Shields -->

[![LinkedIn][linkedin-shield]][linkedin-url]

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

<!-- Project Logo -->
<br />
<div align="center">
    <a href="https://github.com/aaguirre7/show-your-team">
        <img src="./assets/images/logo.jpg" alt="logo">
    <a/>
    <h3 align="center">
        A Team Profile Generator
    </h3>
    <p align="center">
        Generate your team profile!
        <br />
        <a href="https://github.com/aaguirre7/show-your-team">
            <strong>Explore the docs</strong>
        </a>
        <br />
        <br />
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
    </li>
    <li>
        <a href="#what-was-done"> What was done</a>
    </li>
    <li>
        <a href="#instalation"> instalation</a>
    </li>
    <li>
        <a href="#usage"> usage</a>
    </li>
     <li>
        <a href="#video-of-usage"> video</a>
    </li>
    <li>
        <a href="#contact">Contact</a>
    </li>

  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## About The Challange

[![Product Name Screen Shot][product-screenshot1]](./assets/images/screenshot_1.png)
[![Product Name Screen Shot][product-screenshot2]](./assets/images/screenshot_2.png)
### The Task

AS A manager
I WANT to generate a webpage that displays my team's basic info
SO THAT I have quick access to their emails and GitHub profiles

### Criteria

- GIVEN a command-line application that accepts user input
- WHEN I am prompted for my team members and their information
THEN an HTML file is generated that displays a nicely formatted team roster based on user input
- WHEN I click on an email address in the HTML
THEN my default email program opens and populates the TO field of the email with the address
- WHEN I click on the GitHub username
THEN that GitHub profile opens in a new tab
- WHEN I start the application
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
- WHEN I enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
- WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
- WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
- WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated

### What was done

Using NODE and ES6 created and a cli app that asks you about your team and prints out a quick HTML file so you can show case it.

### Instalation

- Clone or Fork the Repo to your computer.
- Install NODEjs.
- Use NPM to install inquirer and jest:

```

npm install inquirer && jest 

```

### Usage

Run the following from the directory where you have downloaded the repo.

```

node index.js

```

Once the program starts answer all the relevant questions until the program finished.

The new team profile will be sotred in the dist folder and you can copy it to your working site.

### Video of Usage




-------------------------
Thank you for taking time looking at this page.

Happy painting!

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTACT -->
## Contact

Abraham Aguirre Aguirre.Abraham@gmail.com

Project Link: [https://github.com/aaguirre7/show-your-team](https://github.com/aaguirre7/show-your-team)

<!-- MARKDOWN LINKS & IMAGES -->
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/abraham-aguirre-1b237293/
[product-screenshot1]: ./assets/images/screenshot_1.png
[product-screenshot2]: ./assets/images/screenshot_2.png

