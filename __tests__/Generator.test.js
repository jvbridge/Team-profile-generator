const Generator = require("../lib/Generator");
const fs = require("fs");
const Manager = require("../lib/Manager");
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");


jest.mock("fs");

describe ("Generator", () => {
    describe("Constructor", () => {
        it ("should return a new object", () => {
            const gen = new Generator();
            expect(gen instanceof Generator).toEqual(true);
        });
    });
    const gen = new Generator();
    const man = new Manager("Picard", "NCC-1701-D", "picard@enterprise.org", 0);
    const manStr = `
    <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
    <div class="card mt-3" style="width: 18rem;">
      <img src="https://via.placeholder.com/350" class="card-img-top">
      <div class="card-body">
      <h5 class="card-title">Picard</h5>
      </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Manager</li>
      <li class="list-group-item">Employee ID: NCC-1701-D</li>
      <li class="list-group-item">Office Number: 0</li>
    </ul>
    <div class="card-body">
      <a href="mailto:picard@enterprise.org" class="card-link">Email</a>
    </div>
  </div>
</div>`
    const eng = new Engineer("Geordi La Forge", "SC-722-829", "laforge@enterprise.org", "visionMan");
    const engStr = `
      <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
        <div class="card mt-3" style="width: 18rem;">
          <img src="https://via.placeholder.com/350" class="card-img-top">
          <div class="card-body">
          <h5 class="card-title">Geordi La Forge</h5>
          </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Engineer</li>
          <li class="list-group-item">Employee ID: SC-722-829</li>
          <li class="list-group-item"><a href="https://github.com/visionMan">Github</a></li>
        </ul>
        <div class="card-body">
          <a href="mailto:laforge@enterprise.org" class="card-link">Email</a>
        </div>
      </div>
    </div>`;
    const intern = new Intern("Westley Crusher", "SD-2353", "cursher2@enterprise.org", "Starfleet Academy");
    const intStr = `
      <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
        <div class="card mt-3" style="width: 18rem;">
          <img src="https://via.placeholder.com/350" class="card-img-top">
          <div class="card-body">
          <h5 class="card-title">Westley Crusher</h5>
          </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Intern</li>
          <li class="list-group-item">Employee ID: SD-2353</li>
          <li class="list-group-item">School: Starfleet Academy</li>
        </ul>
        <div class="card-body">
          <a href="mailto:cursher2@enterprise.org" class="card-link">Email</a>
        </div>
      </div>
    </div>`;
    describe("employeeStr()", () =>{
        
        it("should make a Manager card", () =>{
            expect(gen.employeeStr(man)).toEqual(manStr);
        });
        
        it("should make an Engineer card", () =>{
            expect(gen.employeeStr(eng)).toEqual(engStr);
        });

        it("should make an Intern card", () =>{
            expect(gen.employeeStr(intern)).toEqual(intStr);
        });
    });

    describe("generate()", () => {
        const employees = [man, eng, intern];
        var cardsStr = manStr + engStr + intStr;
        
        const doc = `
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
        it ("Should generate the web page from the employees", () => {
            expect(gen.generate(employees)).toEqual(doc);
        });
    });
});