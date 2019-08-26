// This function do the same job that Postman does, making a POST request to the server.
function post() {
    var questionId = $("#question_id").val();
    var content = $("#comment_content").val();
    comment2target(questionId, 1, content);
}

function comment2target(targetId, type, content) {
    if (!content) {
        alert("comment cannot be empty!!!");
        return;
    }

    // $.ajax{......} is the body of the request that contains data to send to the server.
    $.ajax({
        type: "POST",
        url: "/comment",
        contentType: 'application/json',
        data: JSON.stringify({
            "parentId": targetId,
            "content": content,
            "type": type
        }),
        success: function (response) {
            if (response.code == 200) {
                window.location.reload();
            } else {
            debugger;
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

function comment(e) {
    var commentId = e.getAttribute("data-id");
    var content = $("#input-" + commentId).val();
    comment2target(commentId, 2, content);
}

function collapseComments(e) {
    var id = e.getAttribute("data-id");
    var comments = $("#comment-" + id);

    var collapse = e.getAttribute("data-collapse");
    if (collapse) {
        // collapse
        comments.removeClass("in");
        e.removeAttribute("data-collapse");
        e.classList.remove("active");
    } else {
        var subCommentContainer = $("#comment-" + id);
        if (subCommentContainer.children().length != 1) {
            comments.addClass("in");
            e.setAttribute("data-collapse", "in");
            e.classList.add("active");
        } else {
            // expend
            $.getJSON("/comment/" + id, function (data) {
                console.log(data);
                $.each(data.data.reverse(), function (index, comment) {
                    var avatarElement = $("<img/>", {
                        "class": "media-object image-rounded",
                        "src": comment.user.avatarUrl
                    });

                    var mediaLeftElement = $("<div/>", {
                        "class": "media-left"
                    });
                    mediaLeftElement.append(avatarElement);

                    var mediaBodyElement = $("<div/>", {
                        "class": "media-left"
                    }).append($("<h5/>", {
                        "class": "media-heading",
                        "html": comment.user.name
                    })).append($("<div/>", {
                        "html": comment.content
                    })).append($("<div/>", {
                        "class": "menu"
                    }).append($("<span/>", {
                        "class": "pull-right",
                        "html": moment(comment.gmtCreate).format('DD-MMMM-YYYY')
                    })));

                    var mediaElement = $("<div/>", {
                        "class": "media"
                    });

                    mediaElement.append(mediaLeftElement).append(mediaBodyElement);

                    var commentElement = $("<div/>", {
                        "class": "col-lg-12 col-md-12 col-sm-12 col-xs-12 comments",
                    });
                    commentElement.append(mediaElement);
                    subCommentContainer.prepend(commentElement);
                });
                comments.addClass("in");
                e.setAttribute("data-collapse", "in");
                e.classList.add("active");
            });
        }
    }
}

function showSelectTag() {
    $("#select-tag").show();
}

function selectTag(value) {
    var previous = $("#tag").val();
    if (previous.indexOf(value)==-1) {
        if (previous) {
            $("#tag").val(previous + ',' + value);
        } else {
            $("#tag").val(value);
        }
    }
}