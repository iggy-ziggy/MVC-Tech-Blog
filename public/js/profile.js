const newFormHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector('#blog-title').value.trim();
  const text = document.querySelector('#blog-text').value.trim();

  if (title && text) {
    const response = await fetch(`/api/blogs`, {
      method: 'POST',
      body: JSON.stringify({ title, text }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to create project');
    }
  }
};

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/blogs/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to delete project');
    }
  }
};

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

document
  .querySelector('.new-project-form')
  .addEventListener('submit', newFormHandler);

// document
//   .querySelector('.project-list')
//   .addEventListener('click', delButtonHandler);

if (document.querySelector('.update-form')) {
  document.querySelector('.update-form').addEventListener('submit', updateButtonHandler);
}


if (document.querySelector('.del-btn')) {
  document.querySelectorAll('.del-btn').forEach((btn) => {
    btn.addEventListener('click', delButtonHandler);
  });
}