// This function do the same job that Postman does, making a POST request to the server.
function post() {
    var questionId = $("#question_id").val();
    var content = $("#comment_content").val();

    if(!content){
        alert("comment cannot be empty!!!");
        return;
    }

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
            if (response.code == 200) {
                window.location.reload();
            } else {
                if (response.code == 2003) {
                    var isAccepted = confirm(response.message);
                    if (isAccepted) {
                        window.open("https://github.com/login/oauth/authorize?client_id=ee2e00ceec4ef59bb86b&redirect_uri=http://localhost:8887/callback&scope=user&state=1");
                        window.localStorage.setItem("closable", true);
                    }
                } else {
                    // all other error code case goes here.
                    alert(response.message);
                }
            }
        },
        dataType: "json"
    });
}