$(document).ready(function () {
    $(document).ready(function () {
        $.get(" http://localhost:3000/employeeDetails", function (data) {
            console.log(data); // arry of objects similar to arr in this filea
            for (let i = 0; i < data.length; i++) {
                const abc = `<tr>
                      <td scope="row"> <img src=${data[i].profile} width="30px" border-radius: "50%"  alt="profileImg"> ${data[i].name}</td>
                        <td>${data[i].gender}</td>
                        <td>                         
                            <nobr style="width: 100%; background-color: #e5f3ac; border-radius: 25%; text-align: center; margin-left: 4px;">
                                ${data[i].department}
                            </nobr>
                        </td>
                        <td>&#8377; ${data[i].salary}</td>
                        <td>${data[i].date}</td>
                        <td><i id="DeleteEmpDat" onClick="DeleteEmpData(${data[i].id})" class="glyphicon glyphicon-trash"></i> &nbsp; &nbsp;<i class="glyphicon glyphicon-pencil"></i></td>
                      </tr>`;

                $(".tablebody").append(abc);
            }
        });
    });
});

function DeleteEmpData(empId){
    $.ajax({
        url: 'http://localhost:3000/employeeDetails/'+ empId,
         type: 'DELETE',
         success : function(){
            console.log("delete Success data by id")
         }

    })
}

// $(document).ready(function(){
//     $("i").click(function(){
//       //alert("The paragraph is now hidden");
//       console.warn("-----");
//     });
//   });

// $( "#deleteIcon" ).click(function() {
//     console.log( "Handler for .click() called." );
//   });


// $(document).ready(function() {
//     $("#deleteIcon").click(function() {
//     console.log( "Handler for .click() called." );
//   });
// })

// $(document).ready(function () {
//     var DeleteEmpData = function () {
//         console.warn("-----")
//     }

//     $('#DeleteEmpDat').on('click', DeleteEmpData)
// });

// $('#DeleteEmpDat').on('click', function(event) {
//     console.warn("-----")
// });
