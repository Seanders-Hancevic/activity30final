

const employeeList = [
  {
    name: 'Jan',
    officeNum: 1,
    phoneNum: '222-222-2222'
  },
  {
    name: 'Juan',
    officeNum: 304,
    phoneNum: '489-789-8789'
  },
  {
    name: 'Margie',
    officeNum: 789,
    phoneNum: '789-789-7897'
  },
  {
    name: 'Sara',
    officeNum: 32,
    phoneNum: '222-789-4654'
  },
  {
    name: 'Tyrell',
    officeNum: 3,
    phoneNum: '566-621-0452'
  },
  {
    name: 'Tasha',
    officeNum: 213,
    phoneNum: '789-766-5675'
  },
  
  {
    name: 'Ty',
    officeNum: 211,
    phoneNum: '789-766-7865'
  },
  {
    name: 'Sarah',
    officeNum: 345,
    phoneNum: '222-789-5231'
  }
];


let comand = prompt('Enter a Command');
  if (comand === 'print'){
    for (i = 0; i < employeeList.length; i++){
      render(employeeList[i].name, employeeList[i].officeNum, employeeList[i].phoneNum);
    }
  }

  if (comand === 'verify'){
    let message = 'no';
    const verifyInfo = prompt('user name');
    for (i = 0; i <employeeList.length; i++){
      if (verifyInfo.toLowerCase() === employeeList[i].name.toLowerCase()) {
        message = 'yes';
      }
    }
    render(message);
  }


  if (comand === 'lookup'){
    const verifyInfo = prompt('user name');
    for (i = 0; i < employeeList.length; i++){
      if (verifyInfo.toLowerCase() === employeeList[i].name.toLowerCase()) {
        
        render(employeeList[i].name, employeeList[i].officeNum, employeeList[i].phoneNum);
      }
    }
  }

  
  if (comand === 'contains'){
    const verifyInfo = prompt('string');
    for (i = 0; i <employeeList.length; i++){
      if (employeeList[i].name.toLowerCase().includes(verifyInfo)) {
        render(employeeList[i].name, employeeList[i].officeNum, employeeList[i].phoneNum);
      }
    }
  }



   if (comand.toLowerCase() === 'update') {
    const noField = 'Not a valid field';
    const employeeName = prompt('choose an employee to update');
    const updateInfo = prompt('choose a field to update');
    if (updateInfo.toLowerCase() === 'officeNum') {
      const newOffice = prompt('enter the employees new Office Number');
      for (let i = 0; i < employeeList.length; i++) {
        if (employeeList[i].name.toLowerCase() === employeeName.toLowerCase()) {
          employeeList[i].officeNum = newOffice;
          render(employeeList[i].name, employeeList[i].officeNum, employeeList[i].phoneNum)
        }
      }
    } else if (updateInfo.toLowerCase() === 'phoneNum'.toLowerCase()) {
      const newPhone = prompt('enter the employees new phone number');
      for (let i = 0; i < employeeList.length; i++) {
        if (employeeList[i].name.toLowerCase() === employeeName.toLowerCase()) {
          employeeList[i].phoneNum = newPhone
          render(employeeList[i].name, employeeList[i].officeNum, employeeList[i].phoneNum)
        }
      }
    } else {
      render(noField);
    }
  }

  if (comand === 'add'){
    let newName = prompt('What is your Name?');
    let newOffice = prompt('What is youf office number?');
    let newTele = prompt('What is your telephone number?');
    const newEmployee = {
      name: newName,
      officeNum: newOffice,
      phoneNum: newTele
    }
  employeeList.push(newEmployee);   
  for (let i = 0; i <employeeList.length; i++){
    render(employeeList[i].name, employeeList[i].officeNum, employeeList[i].phoneNum);
    }

    }
     
    if (comand === 'delete') {
      let nameDel = prompt('What name would you like to delete?');

      for(let i = 0; i < employeeList.length; i++){ 
        if ( employeeList[i].name.toLowerCase() === nameDel.toLowerCase()) {
          employeeList.splice(i, 1); 
        }
     }
     for (let i = 0; i <employeeList.length; i++){
      render(employeeList[i].name, employeeList[i].officeNum, employeeList[i].phoneNum);
      }
    }
 
  



