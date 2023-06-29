
function onFormSubmit(event) {
      event.preventDefault()
   var formdata = readformdata();
   var activity = document.getElementById("act").value;
   var startdate = document.getElementById("sdate").value;
   var enddate = document.getElementById("edate").value;
   var status  = document.getElementById("status").value;
   // Instructions()
   if (activity="") {
      document.getElementById("error_activity").innerHTML("*This field is mandatory")
      }
   else{
      if(startdate=""){
         document.getElementById("error_sdate").innerHTML("*This field is mandatory")
      }
      else{
         if(enddate=""){
            document.getElementById("error_sdate").innerHTML("*This field is mandatory")
         }
         else{
            if(status=""){
            document.getElementById("error_sdate").innerHTML("*This field is mandatory")
            }
            else{InsertNewRecord(formdata);}
         }
      }
      
   }
   
   // console.log()
   // return false
   
}



function readformdata() {
   
   var activity = document.getElementById("act").value;
   var startdate = document.getElementById("sdate").value;
   var enddate = document.getElementById("edate").value;
   var status  = document.getElementById("status").value;
   
   var formdata = {}
      formdata["activity"] = activity;
      formdata["startdate"] = startdate;
      formdata["enddate"] = enddate;
      formdata["status"] = status;

      // console.log(formdata)
      return formdata

   }

   function InsertNewRecord(data) {
      // document.getElementsByClassName
      var table = document.getElementById("task_list").getElementsByTagName("tbody")[0]
      var newRow = table.insertRow(table.length);
      cell1 = newRow.insertCell(0);
      cell1.innerHTML = data.activity;
      cell2 = newRow.insertCell(1);
      cell2.innerHTML = data.startdate;
      cell3 = newRow.insertCell(2);
      cell3.innerHTML = data.enddate;  
      cell4 = newRow.insertCell(3);
      cell4.innerHTML = data.status;

      // let edit = document.createElement("button");
      // edit.className="edit";
      // edit.textContent = "EDIT";
      // cell5.appendChild(edit);
      cell5 = newRow.insertCell(4);
      cell5.innerHTML = ` <button style="background-color:#008CBA;" >Edit</button>   <button style="background-color: #f44336;" >Delete</button>`

   }