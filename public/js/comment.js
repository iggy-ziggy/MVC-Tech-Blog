const commentFormHandler = async (event) => {
  event.preventDefault();

  const input = document.querySelector('#blog-comment').value.trim();
  const currentURL = window.location.href;
  const blogPostId = currentURL.split('/').slice(-1).toString();

  console.log(input);
  console.log(blogPostId);

  if (input) {
    const response = await fetch(`/api/comments`, {
      method: 'POST',
      body: JSON.stringify({ input, blogPostId }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    console.log(response);

    if (response.ok) {
      document.location.reload();
    } else {
      const errorData = await response.json();
      console.log('Error:', errorData);
      alert('Failed to create comment');
    }
  }
};

document
  .querySelector('.new-comment-form')
  .addEventListener('submit', commentFormHandler);
