// This function do the same job that Postman does, making a POST request to the server.
function post() {
    var questionId = $("#question_id").val();
    var content = $("#comment_content").val();
    // $.ajax{......} is the body of the request that contains data to send to the server.
    $.ajax({
        type: "POST",
        url: "/comment",
        contentType: 'application/json',
        data: JSON.stringify({
            "parentId": questionId,
            "content": content,
            "type": 1
        }),
        success: function (response) {
            console.log(response);
        },
        dataType: "json"
    });
}