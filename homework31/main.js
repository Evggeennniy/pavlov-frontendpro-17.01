document.getElementById("fetchPost").addEventListener("click", function () {
  const postId = document.getElementById("postId").value;

  if (postId < 1 || postId > 100 || isNaN(postId)) {
    alert("Please enter a valid ID between 1 and 100.");
    return;
  }

  fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((post) => {
      const postElement = document.createElement("div");
      postElement.innerHTML = `
                <h2>${post.title}</h2>
                <p>${post.body}</p>
                <button onclick="fetchComments(${post.id})">Load Comments</button>
            `;
      const postContainer = document.getElementById("post");
      postContainer.innerHTML = "";
      postContainer.appendChild(postElement);
    })
    .catch((error) => {
      console.error(
        "There has been a problem with your fetch operation:",
        error
      );
    });
});

function fetchComments(postId) {
  fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
    .then((response) => response.json())
    .then((comments) => {
      const commentsElement = document.createElement("div");
      comments.forEach((comment) => {
        commentsElement.innerHTML += `
                    <div>
                        <h4>${comment.name}</h4>
                        <p>${comment.body}</p>
                    </div>
                `;
      });
      document.getElementById("post").appendChild(commentsElement);
    })
    .catch((error) => {
      console.error(
        "There has been a problem with your fetch operation:",
        error
      );
    });
}
