const tinderUser = new Object()    //Singelton object
const tinderUser1  = {}      // Non Singleton object

tinderUser.id = "1234b"
tinderUser.name="Sammy"
tinderUser.isloggedIn = false 
// console.log(tinderUser);

const regularUser = {       
    email: "someone@gmail.com",
    fullName: {
        userFullName:"Anushka",      // Declaring object with in object
        lastName:"Singhal"
    }
}
// console.log(regularUser.fullName )



const obj1 = {1:"A" , 2:"B", 3:"C" , 4:"D"}
const obj2 ={5:"E" , 6:"F"}
// const obj3 = Object.assign({}, obj1,obj2 );
const obj3 = {...obj1,...obj2}
// console.log(obj3)


const users = [
    {
        id:1,
        email:"anushak@gmail.com"
    },
    {
        id:1,
        email:"anushak@gmail.com"
    },
    {
        id:1,
        email:"anushak@gmail.com"
    },
]
console.log(users[1].email)
console.log(tinderUser)

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isloggedIn'));

const course = {
    courseName : "Js in Hindi",
    price:"999",
    courseInstructor:"Hitesh"
}
//cousre.courseinstructor

const{courseInstructor:instructor} = course  
console.log(courseInstructor) // Destructure the object
console.log(instructor)