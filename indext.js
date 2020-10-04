

 function submit() {
       //Quizesالقيمة التي تدخلها في الحقل الأول تُخزن في المتغير
        var q = document.getElementById("Quizes").value;
      
       // Midterm القيمة التي تدخلها في الحقل الثاني تُخزن في المتغير
      var m = document.getElementById("Midterm").value;
      // FinalTest القيمة التي تدخلها في الحقل الثاني تُخزن في المتغير
      var f = document.getElementById("FinalTest").value;
      // Oralالقيمة التي تدخلها في الحقل الثاني تُخزن في المتغير
      var o = document.getElementById("Oral").value;
    
      // مجموع القيم التي يتم ادخالها
      var t = 0;

        t= Number(q)+ Number(m) + Number(o)+ Number(f);     // TO CONVERT TEXT TO NUMBER AND SUM

        document.getElementById("total_grades").innerHTML = t;   

        if(t>=90 && t<=100){
          document.getElementById("final_grade").innerHTML = "A" ;
        }else
        if(t>=80 && t<=89){
          document.getElementById("final_grade").innerHTML = "B";
        }else
        if(t>=70 && t<=79){
          document.getElementById("final_grade").innerHTML = "C";
        }else
        if(t>=60 && t<=69){
          document.getElementById("final_grade").innerHTML = "D";
        }else
        document.getElementById("final_grade").innerHTML = "F"
      
      
      
      }