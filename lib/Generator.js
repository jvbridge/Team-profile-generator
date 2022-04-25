const Employee = require("./Employee");

class Generator {
    constructor (){
        this.output = ``;
    }

    /**
     * Sets this.output to be the appropriate string to generate teh
     * @param {Employee[]} employees 
     */
    generate(employees){
        let cardsStr ="";

        employees.forEach((employee) =>{
            cardsStr += this.employeeStr(employee);
        });


        this.output = `
<!DOCTYPE html>
<head>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
</head>
<body>                
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="position-relative translate-middle-x top-50 start-50">
            <a class="navbar-brand" href="#">Team Generator</a>
        </div>
    </nav>
        <div class="container justify-content-center">
            <div class="row">
${cardsStr}
        </div>
    </div>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
</body>`;

        return this.output;
    }

    /**
     * Makes the card HTML for the employee string
     * @param {Employee} employee 
     * @returns {string} the html for each employee
     */
    employeeStr (employee){

        let uniqueStr;
        if (employee.getRole() == "Manager"){
            uniqueStr = `Office Number: ${employee.getOfficeNumber()}`;
        }
        if (employee.getRole() == "Intern"){
            uniqueStr = `School: ${employee.getSchool()}`;
        }

        if (employee.getRole() == "Engineer"){
            uniqueStr = `<a href="https://github.com/${employee.getGithub()}">Github</a>`;
        }

        const cardBody  = `
      <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
        <div class="card mt-3" style="width: 18rem;">
          <img src="https://via.placeholder.com/350" class="card-img-top">
          <div class="card-body">
          <h5 class="card-title">${employee.getName()}</h5>
          </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">${employee.getRole()}</li>
          <li class="list-group-item">Employee ID: ${employee.getId()}</li>
          <li class="list-group-item">${uniqueStr}</li>
        </ul>
        <div class="card-body">
          <a href="mailto:${employee.getEmail()}" class="card-link">Email</a>
        </div>
      </div>
    </div>`;
        return cardBody;
    }

}

module.exports = Generator;