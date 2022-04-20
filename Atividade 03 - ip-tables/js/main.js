const form = document.querySelector('form');
const tbody = document.querySelector('tbody');

form.onsubmit = (event) => {
    event.preventDefault();

    const ip = document.querySelector('#ip').value;
    const mask = document.querySelector('#mask').value;
    const version = document.querySelector('#version').value || '-';

    const view = `<tr>
        <td>${ip}</td>
        <td>${mask}</td>
        <td>${version}</td>
    </tr>`;

    tbody.insertAdjacentHTML('beforeend', view);

    form.reset();

    btnSubmit.blur();
};