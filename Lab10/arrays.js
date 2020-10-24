var employees = ["James", "Phineas", "Hercules", "Batgirl", "Wonder Woman", "Jonas"];
var my_kids = [["James", 6, 59.5], ["Goober", 2, 35.2], ["Stretch", 19, 200] ];

console.log(my_kids);

var my_kid1 = {
"name": "James",
"age": 6,
"weight": 59.5

};

/*
for (attrib in my_kid1) {
    console.log(my_kid1["attrib"]);
    console.log(my_kid1.attrib);
    console.log(my_kid1["attrib"]);
}
*/

var my_kid2 = {
    "name": "Goober",
    "age": 2,
    "weight": 35.2
    
    };

    var my_kid3 = {
        "name": "Stretch",
        "age": 19,
        "weight": 200
        
        };


        console.log("Age of kid3 = " + my_kid3["age]"]);
        better_kids = [my_kid1, my_kid2, my_kid3];

        for (i=0; i<better_kids.length; i++ ) {
            console.log("My kid " + better_kids[i].name + " is " + better_kids[i].age + " years old");
        }

/* for (i=0; i< my_kids.length; i++) {
    console.log("My kid %s weighs %d", my_kids [i][0], my_kids[i][2] );
}

*/ 

/* for (i=0; i< employees.length; i++) {
    if (i % 2 ==0)
    {
        console.log("Team1 Member: " + employees[i]);
    } else
    {
        console.log("Team2 Member: " + employees[i]);
    }

}
*/

for (empl of employees) {
    if (i % 2 ==0)
    {
        console.log("Team1 Member: " + empl);
    } else
    {
        console.log("Team2 Member: " + empl);
    }
}