const updateButtonHandler = async (event) => {
  event.preventDefault();
  console.log('test');

  const title = document.querySelector('#blog-title').value.trim();
  const text = document.querySelector('#blog-text').value.trim();
  const currentURL = window.location.href;
  const id = currentURL.split('/').slice(-1).toString();

  console.log(title);
  console.log(text);
  console.log(id);

  const response = await fetch(`/api/blogs/update/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ title, text, id }),
  });

  if (response.ok) {
    document.location.replace('/profile');
  } else {
    alert('Failed to update post');
  }
};

if (document.querySelector('.update-form')) {
  document
    .querySelector('.update-form')
    .addEventListener('submit', updateButtonHandler);
}
