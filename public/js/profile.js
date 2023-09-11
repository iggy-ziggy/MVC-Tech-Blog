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

if (document.querySelector('.new-project-form')) {
  document
  .querySelector('.new-project-form')
  .addEventListener('submit', newFormHandler);
}

if (document.querySelector('.del-btn')) {
  document.querySelectorAll('.del-btn').forEach((btn) => {
    btn.addEventListener('click', delButtonHandler);
  });
}