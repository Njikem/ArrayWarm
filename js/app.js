
let student_name = 'Alex';
let student_gpa = 3.8,
honor_role= true;

if(honor_role ===true){
    console.log('Congrats you made it');
}else{
    console.log('Try again next time');
}


if(student_gpa >=1.9){
    console.log('F');
}else if(student_gpa >=2.4){
    console.log('D');
}else if(student_gpa >=2.9){
    console.log('C');
}else if(student_gpa >=3.4){
    console.log('B');
}else if(student_gpa>=4){
    console.log('A');
}else{
    console.log('You have failed');
}

let student_names =['Josh', 'Geo', 'Amanda']
let student_gpas =[3.5, 2.9, 3]
let honor_roles =[true, false, false]

if(honor_roles <= 3.5){
    console.log('All students are on the honor role')
}else if(honor_roles === '2/3students'){
    console.log('You guys did great');

}else{
    console.log('You people actually tried');
}

student_gpas.push(3.9);
student_names.push('Jude');
honor_roles.push('true');

let last_student = student_names.pop(2);
let last_student_honor = honor_roles.pop(2);
let last_student_gpa = student_gpas.pop(1);

if(student_gpas>=3.5){
    console.log('Last student best student');
}