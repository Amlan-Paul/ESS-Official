function result() {

  

  var students= {

      ARNOBCHAKRABORTY: {
        
        name: "Arnob Chakraborty",

        mail: "amabchy9@gmail.com",

        score: "19/20",

        position: "01 Out Of 08",
        
        highest_score: "19",
        
        certificate: "Yes"

      },

      MDISHTIAQHUSSAIN: {

        name: "MD Ishtiaq Hussain",

        mail: "jashimuddin.ugs@gmail.com",

        score: "18/20",

        position: "02 Out Of 08",
        
        highest_score: "19",
        
        certificate: "Yes"


      },

      AJOYSHARMA: {

        name: "Ajoy Sharma",

        mail: "choton7800@gmail.com",

        score: "18/20",

        position: "03 Out Of 08",
        
        highest_score: "19",
        
        certificate: "Yes"


      },
      
      
    TANVIRHASAN: {
    
      name: "Tanvir Hasan",
    
      mail: "smt1012k21@gmail.com",
    
      score: "17/20",
    
      position: "04 Out Of 08",
    
      highest_score: "19",
    
      certificate: "No"
    
    
    },
  
  
  TOABINTAMOSTAFA: {
    
      name: "Toa Binta Mostafa",
    
      mail: "mgolam752@gmail.com",
    
      score: "11/20",
    
      position: "05 Out Of 08",
    
      highest_score: "19",
    
      certificate: "No"
    
    
    },
    
    
  TASPIAJAHAN: {
    
        name: "Taspia jahan",
    
        mail: "mjinnatjahan@gmail.com",
    
        score: "10/20",
    
        position: "06 Out Of 08",
    
        highest_score: "19",
    
        certificate: "No"
    
    
      },
  
  
    MDNAHIDHOSSEN: {
  
      name: "Md Nahid Hossen",
  
      mail: "nhsproloy6@gmail.com",
  
      score: "08/20",
  
      position: "07 Out Of 08",
  
      highest_score: "19",
  
      certificate: "No"
      
    },
  
  
    MDJONYHOSEN: {
  
      name: "Md.Jony hosen",
  
      mail: "mdjonyhosen67@gmail.com",
  
      score: "07/20",
  
      position: "08 Out Of 08",
  
      highest_score: "19",
  
      certificate: "No"
  
  
    }
  
  
    
      
  }

var studentname=document.getElementById('studentname').value;

var input=studentname.toUpperCase();

var definition=students[input];

var output=document.getElementById("output");

if (definition==undefined) {

   output.innerHTML=`<hr> দুঃখিত! উক্ত নামের কোনো ব্যাক্তি কুইজে অংশগ্রহণ করেনি। <hr>`;} 
   
else { 
  output.innerHTML=` <hr> Your Result <hr> Name: ${definition.name} <br><br>  Email: ${definition.mail} <br><br>  Score:  ${definition.score} <br><br>  Position:  ${definition.position} <br><br>  Highest Score: ${definition.highest_score} <br><br>  Certificate: ${definition.certificate} <hr> কুইজে অংশগ্রহণ করার জন্য আপনাকে অসংখ্য ধন্যবাদ। <hr> `;
};
};
