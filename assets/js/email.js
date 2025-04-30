(function() {
    emailjs.init("nLpco6llNE1VDHqhL"); 
})();
function sendEmail(e) {
    e.preventDefault();
    const emailInput = document.getElementById('email-input');
    const messageInput = document.getElementById('message-input');
    const userEmail = emailInput.value;
    const userMessage = messageInput.value;
    if (!userEmail || !userEmail.includes('@')) {
        alert('Vui lòng nhập địa chỉ email hợp lệ!');
        return false;
    }
    if (!userMessage.trim()) {
        alert('Vui lòng nhập nội dung tin nhắn!');
        return false;
    }
    const templateParams = {
        to_email: 'pnhoaian270205@gmail.com',
        from_email: userEmail,
        message: `Tin nhắn từ: ${userEmail}\n\nNội dung:\n${userMessage}`
    };
    emailjs.send('service_p4lmm3n', 'template_ukv4rwe', templateParams)
        .then(function(response) {
            alert('Cảm ơn bạn đã gửi tin nhắn cho AnPnh!');
            emailInput.value = '';
            messageInput.value = '';
        }, function(error) {
            console.log('Error:', error);
            alert('Có lỗi xảy ra, vui lòng thử lại sau!');
        });
    return false;
} 