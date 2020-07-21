$('#testBtn').click(function() {
    $('#testH1').text('Success');
    document.getElementById('testH1').innerHTML = 'Success2'
})

$('#goToSelectsBtn').click(function() {
    document.location.href = 'http://localhost:3000/selectTodos';
})