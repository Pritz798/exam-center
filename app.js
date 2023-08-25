let students = [];

let cities = ["Mumbai", "Pune", "Bangalore", "Hyderabad", "Kolkata", "Chennai", "Noida"];

addStudent = ()=>{
    let name = document.getElementById('uname');
    let email = document.getElementById('email');

    let student = {
        name: name.value,
        email: email.value
    }

    let studentExist = students.filter((student)=>{
        return student.email == email.value;
    })

    if(studentExist.length == 0){
        students.push(student);
        getRandomCity();
    }
    else{
        document.getElementById("city").innerText = "Exam center already allocated for user!!";
        //console.log('Student already allocated!!')
    }
    console.log(students);
}

getRandomCity = ()=>{
    let cityIndex = Math.floor(Math.random()*cities.length);
    let city = cities[cityIndex];
    //console.log(city);
    document.getElementById("city").innerText = "Exam Cenetr: " + city;

}

//getRandomCity();