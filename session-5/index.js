function getGrade(total){
  let grade;

      switch (true) {
      case (total > 90):
      grade = 'A+';
      break;

      case (total > 80):
      grade = 'A';
      break;

      case (total > 70):
      grade = 'B';
      break;

      case (total > 60):
      grade = 'C';
      break;

      case (total > 50):
      grade = 'D';
      break;

      case (total > 40):
      grade = 'E';
      break;

      case (total > 30):
      grade = 'F';
      break;

      case (total < 30):
      grade = 'FAIL';
      break;

      default:
      grade = 'Not found';
    }
    return grade
}
console.log("Your grade is: " + getGrade(76)+"!");