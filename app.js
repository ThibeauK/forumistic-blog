document.addEventListener('DOMContentLoaded', (event) => {
    fetchComments();
});

function fetchComments() {
    fetch('https://thibeauk.pythonanywhere.com/get_comments')
        .then(response => response.json())
        .then(data => {
            let commentsContainer = document.getElementById('posts-container');
            commentsContainer.innerHTML = ''; // Clear the container
            data.forEach(comment => {
                let commentDiv = document.createElement('div');
                commentDiv.className = 'comment';
                commentDiv.innerHTML = `<strong>${comment.username}</strong>: ${comment.comment}`;
                commentsContainer.appendChild(commentDiv);
            });
        });
}

function submitComment() {
    let username = document.getElementById('username').value;
    let comment = document.getElementById('comment').value;

    if (username && comment) {
        fetch('https://thibeauk.pythonanywhere.com/add_comment', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({username: username, comment: comment}),
        })
        .then(response => response.json())
        .then(data => {
            console.log(data.message);
            fetchComments(); // Refresh comments after submitting
        });
    }
}
