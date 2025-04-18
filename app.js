document.addEventListener('DOMContentLoaded', (event) => {
    initializePage();

    const d = new Date();
    document.getElementById("time").innerHTML = d;
});

function initializePage() {
    showLoadingState();
    Promise.all([fetchPosts(), fetchComments()])
        .then(() => {
            hideLoadingState();
        })
        .catch(error => {
            console.error("Initialization error:", error);
            hideLoadingState();
        });
}

function showLoadingState() {
    let loadingElement = document.getElementById('loading-state');
    if (loadingElement) {
        loadingElement.style.display = 'block';
    }
}

function hideLoadingState() {
    let loadingElement = document.getElementById('loading-state');
    if (loadingElement) {
        loadingElement.style.display = 'none';
    }
}

function fetchPosts() {
    const repoURL = "https://api.github.com/repos/ThibeauK/forumistic-blog/contents/posts";
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

            let markdownFiles = data
                .filter(file => file.name.endsWith(".md"))
                .sort((a, b) => {
                const numA = parseInt(a.name.match(/\d+/));
                const numB = parseInt(b.name.match(/\d+/));
                return numB - numA; 
        });


            if (markdownFiles.length === 0) {
                console.error("No Markdown files found in the 'contents' folder.");
                return;
            }

            markdownFiles.reduce((promise, file) => {
                return promise.then(() => fetchAndRenderPost(file));
            }, Promise.resolve());
        })
        .catch(error => {
            console.error("Error fetching list of Markdown files from GitHub:", error);
        });
}

function fetchAndRenderPost(file) {
    return fetch(file.download_url)
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

            const postId = file.name.replace('.md', '');
            postDiv.id = `post-${postId}`;
            postDiv.innerHTML = postHTML;

            let replyLink = document.createElement('a');
            replyLink.href = "#comment-section";
            replyLink.textContent = "⎇ Reply";
            replyLink.className = 'reply-link-post';
            replyLink.onclick = function () {
                handleReply(file.name);
            };

            postDiv.appendChild(replyLink);
            document.getElementById('posts-container').appendChild(postDiv);
        })
        .catch(error => {
            console.error(`Error fetching Markdown file content (${file.name}):`, error);
        });
}


function fetchComments() {
    console.log("Fetching comments...");
    return fetch('https://ThibeauK.pythonanywhere.com/get_comments')
        .then(response => {
            if (!response.ok) {
                throw new Error(`Network response was not ok: ${response.statusText}`);
            }
            return response.json();
        })
        .then(data => {
            let commentsContainer = document.getElementById('comments-container');
            commentsContainer.innerHTML = '';

            data.forEach((comment, index) => {
                let commentDiv = document.createElement('div');
                commentDiv.className = 'comment';

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

                let replyContextHTML = '';
                if (replyContext) {
                    let replyTarget = replyContext.replace('Replying to Comment from ', '').trim();
                    replyContextHTML = `<span class="reply-context" id="reply-context-${index}">Replying to <a href="#post-${replyTarget}" class="reply-link">${replyTarget}</a></span> `;
                }

                let mainCommentHTML = `<span id="main-comment-${index}">${mainComment}</span>`;
                commentDiv.innerHTML = `
                    <strong>${comment.username}</strong>: ${replyContextHTML}${mainCommentHTML}
                `;

                let replyLink = document.createElement('a');
                replyLink.href = "#comment-section";
                replyLink.textContent = "⎇ Reply";
                replyLink.className = 'reply-link-comment';
                replyLink.onclick = function () {
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
    let formElement = document.getElementById('comment-section');
    if (formElement) {
        formElement.scrollIntoView({ behavior: 'smooth' });
    } else {
        console.error("Form element not found for ID: comment-section");
    }

    const postId = replyToPostName.replace('.md', '');
    const replyLinkHTML = `<a href="#post-${postId}" class="reply-link">${replyToPostName.replace('.md', '')}</a>`;

    let replyContextDisplay = document.getElementById('reply-context-display');
    if (replyContextDisplay) {
        replyContextDisplay.innerHTML = `Replying to: ${replyLinkHTML}`;
        replyContextDisplay.style.display = 'block';
    } else {
        console.error("Reply context display element not found for ID: reply-context-display");
    }

    let hiddenReplyContext = document.getElementById('hidden-reply-context');
    if (hiddenReplyContext) {
        hiddenReplyContext.value = `Replying to Comment from ${replyToPostName.replace('.md', '')}`;
    } else {
        console.error("Hidden reply context input element not found for ID: hidden-reply-context");
    }

    let commentInput = document.getElementById('comment');
    if (commentInput) {
        commentInput.value = '';
        commentInput.focus();
    } else {
        console.error("Comment input element not found for ID: comment");
    }
}

function submitComment() {
    let username = document.getElementById('username').value.trim();
    let commentInput = document.getElementById('comment');
    let mainComment = commentInput.value.trim();
    let replyContextElement = document.getElementById('hidden-reply-context');
    let replyContext = replyContextElement ? replyContextElement.value.trim() : "";
    let combinedComment = mainComment;

if (replyContext && replyContext !== "") {
    combinedComment = `${replyContext} - ${mainComment}`;
}


    let frm = document.getElementById('comment-section');

    if (username && mainComment) {
        fetch('https://ThibeauK.pythonanywhere.com/add_comment', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username: username, comment: combinedComment }),
        })
        .then(response => {
            if (!response.ok) {
                throw new Error(`Network response was not ok: ${response.statusText}`);
            }
            return response.json();
        })
        .then(data => {
            console.log(data.message);
            fetchComments();
            frm.reset();
            document.getElementById('reply-context-display').style.display = 'none';
            document.getElementById('hidden-reply-context').value = '';
        })
        .catch(error => {
            console.error("Error submitting comment:", error);
        });
    } else {
        alert("Please provide both a username and a comment.");
    }
}
