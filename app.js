document.addEventListener('DOMContentLoaded', (event) => {
    fetchPosts();
    fetchComments();
});

function fetchPosts() {
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

            markdownFiles.forEach((file, index) => {
                fetch(file.download_url)
                    .then(response => {
                        if (!response.ok) {
                            throw new Error(`Failed to fetch file: ${file.name} - ${response.statusText}`);
                        }
                        return response.text();
                    })
                    .then(markdownContent => {
                        const postHTML = marked.parse(markdownContent);
                        
                        // Create a container div for the post
                        let postDiv = document.createElement('div');
                        postDiv.className = 'post';
                        
                        // Add a unique ID to each post based on its filename (without .md)
                        const postId = file.name.replace('.md', '');
                        postDiv.id = `post-${postId}`;  // Use backticks here

                        // Set the post content
                        postDiv.innerHTML = postHTML;

                        // Create a Reply link for each post
                        let replyLink = document.createElement('a');
                        replyLink.href = "#comment-section";
                        replyLink.textContent = "Reply";
                        replyLink.className = 'reply-link';
                        replyLink.onclick = function() {
                            handleReply(file.name);
                        };

                        // Add margin to the reply link to create whitespace
                        replyLink.style.marginLeft = "20px";

                        // Append the reply link to the post content
                        postDiv.appendChild(replyLink);
                        
                        // Append the complete post to the posts container
                        document.getElementById('posts-container').appendChild(postDiv);
                    })
                    .catch(error => {
                        console.error(`Error fetching Markdown file content (${file.name}):`, error);  // Use backticks here
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
            commentsContainer.innerHTML = ''; // Clear the container before adding new comments

            data.forEach((comment, index) => {
                let commentDiv = document.createElement('div');
                commentDiv.className = 'comment';
                
                // Extract reply context if available
                let fullComment = comment.comment;
                let replyContext = '';
                let mainComment = fullComment;

                if (fullComment.startsWith('Replying to')) {
                    let endOfReplyContext = fullComment.indexOf('-');
                    if (endOfReplyContext !== -1) {
                        replyContext = fullComment.substring(0, endOfReplyContext).trim();
                        mainComment = fullComment.substring(endOfReplyContext + 1).trim();
                    }
                }

                // Create a span for the reply context if available
                let replyContextHTML = '';
                if (replyContext) {
                    replyContextHTML = `<span class="reply-context" id="reply-context-${index}">${replyContext}</span> `;
                }

                // Set the innerHTML with the reply context and main comment
                commentDiv.innerHTML = `
                    <strong>${comment.username}</strong>: ${replyContextHTML}${mainComment}
                `;

                // Create a Reply link for each comment
                let replyLink = document.createElement('a');
                replyLink.href = "#comment-section";
                replyLink.textContent = "Reply";
                replyLink.className = 'reply-link';
                replyLink.style.marginLeft = "20px"; // Add some spacing for clarity
                replyLink.onclick = function() {
                    handleReply(`Comment from ${comment.username}`);
                };

                commentDiv.appendChild(replyLink);
                commentsContainer.appendChild(commentDiv);
            });
        })
        .catch(error => {
            console.error("Error fetching comments:", error);
        });
}

function handleReply(replyToPostName) {
    console.log("handleReply called with:", replyToPostName); // Debug log

    // Scroll to the comment form
    let formElement = document.getElementById('comment-section');
    if (formElement) {
        formElement.scrollIntoView({ behavior: 'smooth' });
    } else {
        console.error("Form element not found for ID: comment-section");
    }

    // Create a clickable link to the original post/comment
    const postId = replyToPostName.replace('.md', '');
    const replyLink = `<a href="#post-${postId}">${replyToPostName.replace('.md', '')}</a>`;

    // Prefill the comment text area with the reply text including the link
    let commentInput = document.getElementById('comment');
    if (commentInput) {
        // Wrap the reply context in a span for styling
        commentInput.value = `Replying to <span class="reply-context" id="reply-context">${replyLink}</span> - `;
        commentInput.focus();
    } else {
        console.error("Comment input element not found for ID: comment");
    }
}




function submitComment() {
    let username = document.getElementById('username').value;
    let commentInput = document.getElementById('comment');
    let comment = commentInput.value;
    let frm = document.getElementById('comment-section');

    if (username && comment) {
        // Store the comment in the correct format
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
            fetchComments(); // Fetch comments after adding a new one
            frm.reset(); // Clear the form after submitting
        })
        .catch(error => {
            console.error("Error submitting comment:", error);
        });
    }
}

