$(document).ready(function () {
    $(document).ready(function () {
        $.get(" http://localhost:3000/employeeDetails", function (data) {
            console.log(data); // arry of objects similar to arr in this filea
            for (let i = 0; i < data.length; i++) {
                const abc = `<tr>
                      <td scope="row"> <img src=${data[i].profile} width="30px" border-radius: "50%"  alt="profileImg"> ${data[i].name}</td>
                        <td>${data[i].gender}</td>

                         <td>                         <nobr
                         style="width: 100%; background-color: #e5f3ac; border-radius: 25%; text-align: center; margin-left: 4px;">
                         ${data[i].department}</nobr>
                         </td>
                          <td>&#8377; ${data[i].salary}</td>
                          <td>${data[i].date }</td>
                          <td><a href=""><i class="glyphicon glyphicon-trash"></i></a> &nbsp; &nbsp;<a href=""><i class="glyphicon glyphicon-pencil"></i></a></td>
                      </tr>`;

                $(".tablebody").append(abc);
            }
        });
    });
});