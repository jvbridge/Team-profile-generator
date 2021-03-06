# Team-profile-generator
This creates a web page for an engineering team

This is a command-line apllication that takes in information about employees on
software engineering team and then uses taht information to generate an HTML 
web page that displays summaries for each person.

This is my first foyer into testing based development. For it I will be using
the node module [Jest](https://jestjs.io/) to test my code to ensure that it
works.

## Installation

This requires Node.js to be installed in order to work.

Download this repository to a directory and then run `npm install` in order to
download all of the necessary node modules to run it. 

After that you should be able to run it by running `node ./index.js` or 
`node ./`

## Usage

The program will prompt you to enter information about employees. The first 
employee will always be a manager. Others will be engineers and Interns. 

All employees will have Names, Emails, and ID numbers (all strings). Managers
will have Office numbers, Engineers will have github user names, and Interns
will have schools. 

After you finish entering all the details the program will write the file to
`./dist/team-profile.html`. It will overwrite any file in there that already
has that name. 

https://user-images.githubusercontent.com/6423593/165187307-867e0248-ef15-4599-8b69-ce9cb36133b0.mp4

The default `./dist/team-profile.html` file is the one created in this video. 

## Credits

|Technologies used |
|------------------|
|[![Bootstrap](https://img.shields.io/badge/bootstrap-%23563D7C.svg?style=for-the-badge&logo=bootstrap&logoColor=white)](https://getbootstrap.com/)|
|[![Jest](https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white)](https://jestjs.io/)|
|[![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)](https://git-scm.com/)|
|[![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)](https://github.com/)|
|[![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/en/)|

## License
Licensed under the MIT license

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Tests

You can see all the tests used in the `./__tests__` directory

If you wish to see the results of them run `npm run test` within the main 
directory. 
