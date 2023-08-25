let students = [];

let cities = ["Mumbai", "Pune", "Bangalore", "Hyderabad", "Kolkata", "Chennai", "Noida"];

addStudent = ()=>{
    let name = document.getElementById('uname');
    let email = document.getElementById('uemail');

    let student = {
        name: name.value,
        email: email.value
    }

    let studentExist = students.filter((student)=>{
        return student.email == email.value;
    })

    if(studentExist.length == 0){
        students.push(student);
        document.getElementById("name").innerHTML = "<b>Name: <b>"+ student.name;
        document.getElementById("email").innerHTML = "<b>Email: <b>"+student.email;
        getRandomCity();
    }
    else{
        document.getElementById("city").innerHTML = "<i>Exam center already allocated for user!!<i/>";
        //console.log('Student already allocated!!')
    }
    console.log(students);
}

getRandomCity = ()=>{
    let cityIndex = Math.floor(Math.random()*cities.length);
    let city = cities[cityIndex];
    //console.log(city);
    document.getElementById("city").innerHTML = "<b>Exam Center: <b>" + city;

}

//getRandomCity();