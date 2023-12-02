const currentURL = window.location.href.split('?')[0].split('#')[0];

fetch(`https://lubieniebieski-api.fly.dev/tootlink?url=${encodeURIComponent(currentURL)}`)
    .then(response => {
        if (response.status === 204) {
            return Promise.resolve('');
        } else {
            return response.json();
        }
    })
    .then(data => {
        if (data) {
            const mastodonConvo = document.getElementById('mastodon_convo');
            mastodonConvo.innerHTML = '🗣️ Discuss/comment ';

            const link = document.createElement('a');
            link.href = data.tootURL;
            link.textContent = 'on Mastodon';

            const div = document.createElement('div');
            mastodonConvo.appendChild(link);
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
   
