document.addEventListener('DOMContentLoaded', () => {
    const sendBtn = document.getElementById('sendBtn');
    if (sendBtn) {
        sendBtn.addEventListener('click', userForm);
    }

    const calculateBtn = document.getElementById('calculateBtn');
    if (calculateBtn) {
        calculateBtn.addEventListener('click', myExcelFuns);
    }
});

function userForm() {
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const address = document.getElementById('address').value;
    const city = document.getElementById('city').value;
    const province = document.getElementById('province').value;
    const membership = document.querySelector('input[name="membership"]:checked').value;

    const fullName = `${firstName} ${lastName}`;
    const outputText = `
                <strong>Full Name:</strong> ${fullName}<br>
                <strong>Email:</strong> ${email}<br>
                <strong>Address:</strong> ${address}<br>
                ${city}, ${province}<br>
                <strong>Membership:</strong> ${membership}
            `;

    document.getElementById('output').innerHTML = outputText;
}

function myExcelFuns() {
    const numberStr = document.getElementById('numbers').value;

    if (!numberStr.trim()) {
        alert('Please enter some numbers.');
        return;
    }

    const numberArr = numberStr.split(' ').map(Number);
    const selectedOperation = document.querySelector('input[name="operation"]:checked').value;
    let result;

    switch (selectedOperation) {
        case 'sum':
            result = numberArr.reduce((a, b) => a + b, 0);
            break;
        case 'average':
            result = numberArr.reduce((a, b) => a + b, 0) / numberArr.length;
            break;
        case 'max':
            result = Math.max(...numberArr);
            break;
        case 'min':
            result = Math.min(...numberArr);
            break;
        default:
            result = 'Invalid operation';
    }

    document.getElementById('result').innerText = `Result: ${result}`;
}