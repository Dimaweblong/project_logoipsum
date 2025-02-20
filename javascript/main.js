document.addEventListener('DOMContentLoaded', () => {
    const btnYearly = document.getElementById('btnYearly')
    const btnMonthly = document.getElementById('btnMonthly')

    btnYearly.addEventListener('click', () => {
        btnYearly.classList.add('btn-chosen-yearly')
        if (btnYearly.hasAttribute('id')) {
            btnYearly.removeAttribute('id')
        }
        btnMonthly.classList.remove('btn-chosen-monthly')
        btnMonthly.setAttribute('id', 'btnMonthly')
    })
    btnMonthly.addEventListener('click', () => {
        btnMonthly.classList.add('btn-chosen-monthly')
        if (btnMonthly.hasAttribute('id')) {
            btnMonthly.removeAttribute('id')
        }
        btnYearly.classList.remove('btn-chosen-yearly')
        btnYearly.setAttribute('id', 'btnYearly')
    })
})

window.onload = function () {
    document.getElementById('btnMonthly').classList.add('btn-chosen-monthly')
    document.getElementById('btnMonthly').removeAttribute('id')
}

document.addEventListener('DOMContentLoaded', () => {
    const blockConteiner = document.querySelectorAll('.sixth-conteiner-block');

    blockConteiner.forEach((block) => {
        block.addEventListener('click', () => {
            
            blockConteiner.forEach((item) => {
                item.classList.remove('chosen-block');
            });

         
            block.classList.add('chosen-block');
        });
    });
});