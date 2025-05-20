async function addReport() {
    const data = {
        reportID: document.getElementById('reportID').value,
        patientName: document.getElementById('patientName').value,
        type: document.getElementById('type').value,
        date: document.getElementById('date').value
    };

    const res = await fetch('/api/addReport', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    });

    const result = await res.json();
    document.getElementById('output').textContent = JSON.stringify(result, null, 2);
}

async function verifyReport() {
    const id = document.getElementById('verifyID').value;
    const res = await fetch('/api/verifyReport/' + id);
    const result = await res.json();
    document.getElementById('output').textContent = JSON.stringify(result, null, 2);
}
