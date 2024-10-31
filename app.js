document.addEventListener('DOMContentLoaded', (event) => {
    fetchPosts();
    fetchComments();
});

function fetchPosts() {
    // GitHub repository URL for Markdown files, if applicable
    const repoURL = "https://api.github.com/repos/ThibeauK/thesis-wiki/contents/posts";
    console.log("Fetching list of Markdown files from GitHub (contents folder)...");

    fetch(repoURL)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Network response was not ok: ${response.statusText}`);
            }
            return response.json();
        })
        .then(data => {
            console.log("GitHub API response:", data);
            const markdownFiles = data.filter(file => file.name.endsWith(".md"));
            if (markdownFiles.length === 0) {
                console.error("No Markdown files found in the 'contents' folder.");
                return;
            }

            markdownFiles.forEach(file => {
                fetch(file.download_url)
                    .then(response => {
                        if (!response.ok) {
                            throw new Error(`Failed to fetch file: ${file.name} - ${response.statusText}`);
                        }
                        return response.text();
                    })
                    .then(markdownContent => {
                        const postHTML = marked.parse(markdownContent);
                        let postDiv = document.createElement('div');
                        postDiv.className = 'post';
                        postDiv.innerHTML = postHTML;
                        document.getElementById('posts-container').appendChild(postDiv);
                    })
                    .catch(error => {
                        console.error(`Error fetching Markdown file content (${file.name}):`, error);
                    });
            });
        })
        .catch(error => {
            console.error("Error fetching list of Markdown files from GitHub:", error);
        });
}

function fetchComments() {
    console.log("Fetching comments...");
    fetch('https://ThibeauK.pythonanywhere.com/get_comments')
        .then(response => {
            if (!response.ok) {
                throw new Error(`Network response was not ok: ${response.statusText}`);
            }
            return response.json();
        })
        .then(data => {
            let commentsContainer = document.getElementById('comments-container');
            commentsContainer.innerHTML = '';
            data.forEach(comment => {
                let commentDiv = document.createElement('div');
                commentDiv.className = 'comment';
                commentDiv.innerHTML = `<strong>${comment.username}</strong>: ${comment.comment}`;
                commentsContainer.appendChild(commentDiv);
            });
        })
        .catch(error => {
            console.error("Error fetching comments:", error);
        });
}

function submitComment() {
    let username = document.getElementById('username').value;
    let comment = document.getElementById('comment').value;

    if (username && comment) {
        fetch('https://ThibeauK.pythonanywhere.com/add_comment', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({username: username, comment: comment}),
        })
        .then(response => {
            if (!response.ok) {
                throw new Error(`Network response was not ok: ${response.statusText}`);
            }
            return response.json();
        })
        .then(data => {
            console.log(data.message);
            fetchComments(); // Refresh comments after submitting
        })
        .catch(error => {
            console.error("Error submitting comment:", error);
        });
    }
}
