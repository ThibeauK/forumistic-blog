import json

# Define the file path to the comments JSON file
COMMENTS_FILE = '/home/ThibeauK/mysite/comments.json'

# Function to load comments from the file
def load_comments():
    try:
        with open(COMMENTS_FILE, 'r') as file:
            return json.load(file)
    except FileNotFoundError:
        print("Comments file not found. Creating a new one.")
        return []
    except json.JSONDecodeError:
        print("Error decoding JSON. Resetting to empty list.")
        return []

# Function to save comments back to the file
def save_comments(comments):
    with open(COMMENTS_FILE, 'w') as file:
        json.dump(comments, file, indent=4)

# Function to delete a comment
def delete_comment(criteria):
    comments = load_comments()

    # Find the comments that do not match the criteria to keep them
    updated_comments = [comment for comment in comments if not match_criteria(comment, criteria)]

    if len(updated_comments) == len(comments):
        print("No comment matched the given criteria.")
    else:
        save_comments(updated_comments)
        print("Comment(s) matching the criteria have been deleted.")

# Function to match criteria (for username or comment content)
def match_criteria(comment, criteria):
    return criteria.lower() in comment['username'].lower() or criteria.lower() in comment['comment'].lower()

# Main program to prompt user for input
if __name__ == "__main__":
    criteria = input("Enter the username or part of the comment to delete: ").strip()
    if criteria:
        delete_comment(criteria)
    else:
        print("No criteria provided. Exiting.")
