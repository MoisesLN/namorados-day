const input = document.getElementById('inputName');
const body = document.body;
const initial = document.getElementById('initial');
const real = document.getElementById('real');
const invalid = document.getElementById('invalid');

function verify(){
    if(input.value.toLowerCase().trim() == 'sabine'){
        input.value = '';
        initial.classList.add('hide');
        console.log('foi');
        setTimeout(() => {
            initial.classList.add('hidden');
            initial.classList.remove('hide');
            body.classList.add('pink');
            real.classList.remove('hidden');

            const items = document.querySelectorAll('.fade-in');
            items.forEach((el, i) => {
                setTimeout(() => {
                    el.classList.add('show');
                }, 400 * i); // atraso progressivo de 400ms por item
            });
        }, 1000)
    } else {
        invalid.textContent = "essa pagina nao é pra vc"
        input.value = '';
    }
}

const timeText = document.getElementById('time');

function calcTempo() {
    const march7 = new Date(new Date().getFullYear(), 2, 7); // 7 de março 
    const now = new Date(); 
    const diffTime = now - march7;

    // Converter milissegundos para dias, horas e segundos
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    const diffHours = Math.floor((diffTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const diffMinutes = Math.floor((diffTime % (1000 * 60 * 60)) / (1000 * 60));
    const diffSeconds = Math.floor((diffTime % (1000 * 60)) / 1000);

    return {
        days: diffDays,
        hours: diffHours,
        minutes: diffMinutes,
        seconds: diffSeconds
    };
}

function updateTimeText() {
    const { days, hours, minutes, seconds } = calcTempo();
    timeText.textContent = `Já se passaram ${days} dias, ${hours} horas, ${minutes} minutos e ${seconds} segundos desde nosso primeiro contato!! lembro como se fosse hoje rs, tão temida cartilha calouro que acabou rendendo te conhecer. na hora foi trabalhoso, mas depois de tudo eu nunca reclamaria de qualquer trabalho, te conhecer foi a melhor coisa que já me aconteceu e se precisasse eu faria tudo de novo outras milhões de vezes.`;
}

// Atualizar o texto a cada segundo
setInterval(updateTimeText, 1000);

// Chamar a função ao carregar a página
updateTimeText();