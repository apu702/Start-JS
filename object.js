
//Basic Structure//
var student = {id:121, phone:1234, name:"Abir"};
var student2 = {id:131, phone:134, name:"mahi"};

console.log(student, student2);




//Excess Object Property
        //Way-1
        var student = {id:121, phone:1234, name:"Abir"};
        var student2 = {id:131, phone:134, name:"mahi"};

        var phoneNo = student.phone;
        console.log(phoneNo);


        
        //Way-2
        var student = {id:121, phone:1234, name:"Abir"};
        var student2 = {id:131, phone:134, name:"mahi"};

        var phoneNo = student["phone"];
        console.log(phoneNo);


        //Way-3
        var student = {id:121, phone:1234, name:"Abir"};
        var student2 = {id:131, phone:134, name:"mahi"};

        var phoneName = "phone";
        var phoneNo = student[phoneName];
        console.log(phoneNo);

//Change Object Value
        //Way-1
        var student = {id:121, phone:1234, name:"Abir"};
        var student2 = {id:131, phone:134, name:"mahi"};

        student2.phone = 56469;
        console.log(student2);

        //way-2
        var student = {id:121, phone:1234, name:"Abir"};
        var student2 = {id:131, phone:134, name:"mahi"};

        student2["phone"] = 785475;
        console.log(student2);

        //way-3
        var student = {id:121, phone:1234, name:"Abir"};
        var student2 = {id:131, phone:134, name:"mahi"};


        var phoneName = "phone";
        student2[phoneNmae] = 345566;
        console.log(student2);


//Add New Property
        //Way-1
        var student = {id:121, phone:1234, name:"Abir"};
        var student2 = {id:131, phone:134, name:"mahi"};

        student2.cinema = "Ogni2";
        console.log(student2);


        //Way-2
        var student = {id:121, phone:1234, name:"Abir"};
        var student2 = {id:131, phone:134, name:"mahi"};

        student2 [cinema] = "Smartboy";
        console.log(student2);

        //way-3
        
