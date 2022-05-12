function testResults (form) {
    let testName = form.name.value;
    let testEmail = form.email.value;
    let testMessage = form.message.value;
    alert (`You typed:\n${testName}\n${testEmail}\n${testMessage}`);
}