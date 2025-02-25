window.addEventListener('load', () => {
    setTimeout(() => {
        document.querySelector('body').insertAdjacentHTML('afterend', `
            <div class="coockies">
            <p>Diese Website verwendet Cookies zur Speicherung von Daten. Indem Sie die Website weiterhin nutzen, stimmen Sie der Verwendung dieser Dateien zu.</p>
            <button id="btnCookies">Akzeptieren und fortfahren</button>
        </div>
    
            `)

            const btnCookies = document.querySelector('#btnCookies');
            const cookies = document.querySelector('.coockies');
        
            btnCookies.addEventListener('click', () => {
                cookies.classList.add('cookies-disabled')
                cookies.classList.remove('coockies')
        
            })
    }, 1000)
})
