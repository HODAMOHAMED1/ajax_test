/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

findAll();

function findAll() {
 $.ajax({ 
    type: 'GET', 
    url: 'http://localhost:8084/MedicalInsuranceSystem/api/version1/reviews/retrieve', 
    dataType: 'json',
    success: function (data) { 
        $.each(data.list_review, function(index, element) {
           $("#insertRow").append("<tr><td>"+element.reviewId+"</td><td>"+element.medicalTypeId+"</td><td>"+element.serviceId+"</td>\n\
<td>"+element.description+"</td><td>"+element.date+"</td><td>"+element.type+"</td><td>"+element.employeeEmployeeId+"</td><td>"+element.reviewRate+"</td></tr>");
        });
    }
});
}
