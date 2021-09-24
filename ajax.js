function ajax() {



    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {

        if (this.readyState == 4 && this.status == 200) {
            var response = JSON.parse(this.responseText);
            console.log(response);




            var output = "";
            output += `<tr>`
            output += `<th>TASKS</th>`;
            output += `<th>STATUS</th>`;
            output += `<tr>`


            for (i = 0; i < response.length; i++) {
                // console.log(response[i].completed)
                if (response[i].completed == true) {
                    output += `
                <tr> 
                <td>${response[i].title}</td>
                <td><input type="checkbox" checked class="largerCheckbox" disabled ></td>
                
                
              </tr>`;
                } else { output += `
                <tr> 
                <td>${response[i].title}</td>
                <td><input id="check" type="checkbox" class="largerCheckbox" ></td>
                
                
              </tr>`; }

            }
            // console.log(output);
            document.getElementById("tablebody").innerHTML = output;

            var count = 0;
            console.log(count);
            $(document).ready(function() {


                console.log(count);

                $("#tablebody").on("change",
                    ":checkbox",
                    function() {

                        var status = this.checked;
                        var promise = new Promise(function(resolve, reject) {

                            // console.log(response[j].id)
                            if (status === true) {
                                // $(td).closest("tr").css("text-decoration", "line-through");
                                // $(this.td).parent().parent().css({
                                //     'text-decoration': 'line-through',
                                //     'color': 'red'
                                // })
                                // $('#tablebody:checkbox:checked').parent().parent().css({
                                //     'text-decoration': 'line-through',
                                //     'color': 'red'
                                // })
                                count++;

                            }
                            if (status === false) {
                                count--;
                            }

                            console.log(count);
                            if (count == 5) {
                                console.log(count);
                                resolve();
                            }

                        });
                        promise.then(function() {
                            setTimeout(() => {
                                alert("Congrats! 5 Tasks have been completed successfully!");
                            }, 250);

                        });


                    });
                $("table").on("load", function() {
                    $("#spin").hide();
                });

            })
        }
    }
    xhttp.open("GET", "https://jsonplaceholder.typicode.com/todos", true);
    xhttp.send();
}

// function myFunction() {
//     var searchinput = document.getElementById("search").value;
//     $(document).ready(function() {

//             $("#search").on("change", function() {
//                 for (j = 0; j < response.lenth; j++) {

//                     if (response[j].title).tolo
//                 }

//             });


//         }

//     }