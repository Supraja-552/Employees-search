let EmployeesBtn=document.getElementById('employee-btn');
let MaleBtn=document.getElementById('male-employee-btn');
let FemaleBtn=document.getElementById('female-employee-btn');
let employees=[
    {'Empid':501,'FirstName':'Supraja','LastName':'Chimmani','Email':'chimmanisupraja@gmail.com','Contacts':1234567890,'Gender':'Female','Activate':'YES','Age':21},
   {'Empid':502,'FirstName':'Sushma','LastName':'Dande','Email':'dandesuhma@gmail.com','Contacts':9234567890,'Gender':'Female','Activate':'No','Age':15},
   {'Empid':503,'FirstName':'Anjali','LastName':'Badiginchula','Email':'badiginchulaanjali@gmail.com','Contacts':1234567890,'Gender':'Female','Activate':'YES','Age':22},
   {'Empid':504,'FirstName':'Kiran','LastName':'Dande','Email':'dandekiran@gmail.com','Contacts':1234567890,'Gender':'male','Activate':'YES','Age':17},
   {'Empid':505,'FirstName':'lokesh','LastName':'palla','Email':'pallalokesh@gmail.com', 'Contacts':1234567890,'Gender':'male','Activate':'NO','Age':8},
   {'Empid':506,'FirstName':'Megana','LastName':'palla','Email':'meganapalla@gmail.com', 'Contacts':1234567890,'Gender':'Female','Activate':'YES','Age':8},
   {'Empid':507,'FirstName':'Supraja','LastName':'Chimmani','Email':'chimmanisupraja@gmail.com', 'Contacts':1234567890,'Gender':'Female','Activate':'YES','Age':21},
   {'Empid':508,'FirstName':'Supraja','LastName':'Chimmani','Email':'chimmanisupraja@gmail.com', 'Contacts':1234567890,'Gender':'Female','Activate':'YES','Age':21},
   {'Empid':509,'FirstName':'Supraja','LastName':'Chimmani','Email':'chimmanisupraja@gmail.com', 'Contacts':1234567890,'Gender':'Female','Activate':'YES','Age':21},
   {'Empid':510,'FirstName':'Supraja','LastName':'Chimmani','Email':'chimmanisupraja@gmail.com', 'Contacts':1234567890,'Gender':'Female','Activate':'YES','Age':21},
   {'Empid':511,'FirstName':'Supraja','LastName':'Chimmani','Email':'chimmanisupraja@gmail.com', 'Contacts':1234567890,'Gender':'Female','Activate':'YES','Age':21},
   {'Empid':512,'FirstName':'Supraja','LastName':'Chimmani','Email':'chimmanisupraja@gmail.com', 'Contacts':1234567890,'Gender':'Female','Activate':'YES','Age':21},
   {'Empid':513,'FirstName':'Supraja','LastName':'Chimmani','Email':'chimmanisupraja@gmail.com', 'Contacts':1234567890,'Gender':'Female','Activate':'YES','Age':21},
   {'Empid':514,'FirstName':'Supraja','LastName':'Chimmani','Email':'chimmanisupraja@gmail.com', 'Contacts':1234567890,'Gender':'Female','Activate':'YES','Age':21},
   {'Empid':515,'FirstName':'Supraja','LastName':'Chimmani','Email':'chimmanisupraja@gmail.com', 'Contacts':1234567890,'Gender':'Female','Activate':'YES','Age':21},
  ];
function getEmployees(alll){
      var eachRow=``;
      if (employees.length!==0){
      
   for (let emp of alll){
      
    eachRow+=`<tr>
    <td>${emp.Empid}</td>
    <td>${emp.FirstName}</td>
    <td>${emp.LastName}</td>
    <td>${emp.Email}</td>
    <td>${emp.Contacts}</td>
    <td> ${emp.Gender}</td>
    <td>${emp.Activate}</td>
    <td>${emp.Age}</td>
    </tr>`
   }
    document.getElementById('tbody').innerHTML=eachRow;

   }
   }
   EmployeesBtn.addEventListener('click',function(){
      getEmployees(employees);
     
   });
   
   function femaleEmployees(){
      var eachRow=``;
  for (emp of employees){
   
   if(emp.Gender=='Female'){
      eachRow+=`<tr>
    <td>${emp.Empid}</td>
    <td>${emp.FirstName}</td>
    <td>${emp.LastName}</td>
    <td>${emp.Email}</td>
    <td>${emp.Contacts}</td>
    <td> ${emp.Gender}</td>
    <td>${emp.Activate}</td>
    <td>${emp.Age}</td>
    </tr>`
   }
   
   document.getElementById('tbody').innerHTML=eachRow;
  }
}
FemaleBtn.addEventListener('click',function(){
   femaleEmployees();
  
});

function maleEmployees(){
var eachRow=``;
for (emp of employees){

if(emp.Gender=='male'){
   eachRow+=`<tr>
 <td>${emp.Empid}</td>
 <td>${emp.FirstName}</td>
 <td>${emp.LastName}</td>
 <td>${emp.Email}</td>
 <td>${emp.Contacts}</td>
 <td> ${emp.Gender}</td>
 <td>${emp.Activate}</td>
 <td>${emp.Age}</td>
 </tr>`
}
console.log(eachRow);
document.getElementById('tbody').innerHTML=eachRow;
}
}
MaleBtn.addEventListener('click',function(){
   maleEmployees();
  
});
let empName=document.getElementById("search-input");
console.log(empName.innerText);
empName.addEventListener('keyup',()=>{
   let val=empName.value;
   let enames=searchEmpsData(val,employees);
   getEmployees(enames);

});
function searchEmpsData(val,employees){
   val=val
   let filteredEmps=[];
   for(let e of employees){
      eName=e.FirstName;
      if(eName.includes(val)){
         filteredEmps.push(e);
      }
   }
   console.log(filteredEmps);
   return filteredEmps;
}
