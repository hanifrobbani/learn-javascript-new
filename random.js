const dataArray = [
    {
      id: 1,
      name: "Alice",
      age: 30,
      profession: "Engineer"
    },
    {
      id: 2,
      name: "Bob",
      age: 25,
      profession: "Designer"
    },
    {
      id: 3,
      name: "Charlie",
      age: 28,
      profession: "Teacher"
    }
  ];
  
  dataArray.forEach((data) => console.log(data.age))
  
  const userProfile = {
    name: "John Doe",
    age: 32,
    profession: "Developer",
    skills: ["JavaScript", "React", "Node.js", "TypeScript"],
    hobbies: ["Reading", "Hiking", "Gaming"]
  };
  
  //userProfile.skills.forEach((data) => console.log(data))
  console.log(userProfile.age)
  console.log(userProfile.name)


