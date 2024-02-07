//const tinderUser= newOnject()


const tinderUser={}
 tinderUser.id="  123abcs"
 tinderUser.name="sammy"
 tinderUser.LoggedIn=false

 //console.log(tinderUser);

 const regularUser={
    email: "some@gmail.com",
    fullname:{
        userfullName:{
            firstname:"Jaideep",
            lastname:"singh"
        }

    }
 }

 //console.log(regularUser.fullname.userfullName.firstname);

 const obj1={1:"JUgnu",2:"Singh"}
 const obj2={3:"Bani", 4:"Soni"}
 const obj4={5:"a",6:"b"}

 const obj3=Object.assign({},obj1,obj2,obj4);
 //assign is used to merge to objects

 //console.log(obj3);

/**************Object destructure **************/

const course={
    coursename:"js in hindi",
    price:"999",
    courseInstructor:"Jaideep"
}

const {courseInstructor:instructor} = course
console.log(instructor);


 