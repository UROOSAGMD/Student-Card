 
 
 let students = {
  student1: {
    name: "Ayesha",
    course: "Web Development",
    contact: "ayesha.khan@gmail.com",
    image: "images9.jpeg"
  },
  student2: {
    name: "Uroosa",
    course: "Graphic",
    contact: "UroosaGMD@gmail.com",
    image: "images7.jpeg"
  },
  student3: {
    name: "Humna",
    course: "UI/UX Design",
    contact: "Humna.Shaikh@gmail.com",
    image: "images5.jpeg"
  }
};

  let box=document.getElementById("box");
  box.innerHTML="";
 

 function showAllCard(){
  box.innerHTML=""
 for(let key in students){
  let student=students[key]
 
  let card = document.createElement("div");
  card.className="card";
    card.innerHTML=`
   <img src="${student.image}">
   <h1>${student.name}</h1>
   <p> <strong>Course:</strong> ${student.course}</p>
   <p> <strong>Contact:</strong> ${student.contact}</p>`;

   box.appendChild(card);
}
 }

 

function  searchStudent(){
  
let input =document.getElementById("searchInput").value.trim().toLowerCase();

if(students[input]){
  let student=students[input]
  box.innerHTML=""

  let card = document.createElement("div");
  card.className="card";
    card.innerHTML=`
   <img src="${student.image}">
   <h1>${student.name}</h1>
   <p> <strong>Course:</strong> ${student.course}</p>
   <p> <strong>Contact:</strong> ${student.contact}</p>`;

   box.appendChild(card);
}else{
  box.innerHTML=`<h3>Student not found!</h3>`;
}

}
 showAllCard();
 
 