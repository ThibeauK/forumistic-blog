document.addEventListener('DOMContentLoaded', (event) => {
    fetchPosts();
    fetchComments();
});

function fetchPosts() {
    // GitHub repository where your Markdown posts are stored
    const repoURL = "https://api.github.com/repos/ThibeauK/thesis-wiki/contents/posts";

    // Fetch the repository content
    fetch(repoURL)
        .then(response => response.json())
        .then(data => {
            // Filter to get only .md files
            const markdownFiles = data.filter(file => file.name.endsWith(".md"));

            markdownFiles.forEach(file => {
                fetch(file.download_url)
                    .then(response => response.text())
                    .then(markdownContent => {
                        // Use marked.js to convert Markdown to HTML
                        const postHTML = marked.parse(markdownContent);

                        // Create a div to display the post
                        let postDiv = document.createElement('div');
                        postDiv.className = 'post';
                        postDiv.innerHTML = postHTML;

                        // Append postDiv to the posts container
                        document.getElementById('posts-container').appendChild(postDiv);
                    });
            });
        });
}

function fetchComments() {
    // Assuming your comments are fetched as before
    fetch('https://thibeauk.pythonanywhere.com/get_comments')
        .then(response => response.json())
        .then(data => {
            let commentsContainer = document.getElementById('comments-container');
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
