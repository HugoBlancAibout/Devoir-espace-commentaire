document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('form').addEventListener('submit', function(event) {
        event.preventDefault();

        let firstName = document.getElementById('first-name').value;
        let lastName = document.getElementById('last-name').value;
        let message = document.getElementById('message').value;

        if (firstName.trim() === '' || lastName.trim() === '' || message.trim() === '') {
            document.getElementById('error-message').style.display = 'block';
            return;
        }

        let newComment = document.createElement('div');
        newComment.classList.add('flex', 'space-x-4', 'text-sm', 'text-gray-500');

        newComment.innerHTML = `
            <div class="flex-1 py-10 border-t border-gray-200">
                <h3 class="font-medium text-gray-900">${firstName} ${lastName}</h3>
                <div class="prose prose-sm mt-4 max-w-none text-gray-500">
                    <p>${message}</p>
                </div>
            </div>
        `;

        let commentList = document.getElementById('comment-list');
        commentList.insertBefore(newComment, commentList.firstChild);

        document.getElementById('first-name').value = '';
        document.getElementById('last-name').value = '';
        document.getElementById('message').value = '';
        document.getElementById('error-message').style.display = 'none'; 
    });
});