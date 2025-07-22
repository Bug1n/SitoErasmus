// ViveTuMovil - Optimized JavaScript
// This script handles the main functionalities of the ViveTuMovil website

function changePage(page) {
    // Redirects to the specified page
    window.location.href = page;

}
// Main functions
function handleCall() {
    window.open('tel:+34954042255', '_self');
}

//cambia el texto del botón para las direcciones según el ancho de la pantalla
function textMobile() {
    let txt = document.getElementById("address-button-id");
    console.log(txt.innerText);
    console.log(screen.width)
    if (screen.width < 1270)
        txt.innerText = "📍"
}

//link para abrir Google Maps con la dirección
function handleDirections() {
    const address = 'C. Virgen del Valle, 73, 41011 Sevilla';
    window.open(`https://maps.google.com/?q=${encodeURIComponent(address)}`, '_blank');
}

// Share functionality
// This function checks if the browser supports the Web Share API
function handleShare() {
    if (navigator.share) {
        navigator.share({
            title: 'ViveTuMóvil - Reparación de Celulares Sevilla',
            text: 'Servicios profesionales de reparación de smartphones en Sevilla',
            url: window.location.href,
        }).catch(() => copyLink());
    } else {
        copyLink();
    }
}

function copyLink() {
    if (navigator.clipboard) {
        navigator.clipboard.writeText(window.location.href)
            .then(() => showMessage('Enlace copiado!', 'success'))
            .catch(() => fallbackCopy());
    } else {
        fallbackCopy();
    }
}

function fallbackCopy() {
    const textArea = document.createElement('textarea');
    textArea.value = window.location.href;
    textArea.style.position = 'fixed';
    textArea.style.left = '-9999px';
    document.body.appendChild(textArea);
    textArea.select();

    try {
        document.execCommand('copy');
        showMessage('Enlace copiado!', 'success');
    } catch (err) {
        showMessage('Error de copia', 'error');
    }

    document.body.removeChild(textArea);
}

function showMessage(text, type) {
    const msg = document.createElement('div');
    msg.textContent = text;
    msg.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        z-index: 1000;
        padding: 12px 20px;
        border-radius: 8px;
        color: white;
        font-weight: 500;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        ${type === 'success' ? 'background: #16a34a;' : 'background: #dc2626;'}
    `;

    document.body.appendChild(msg);
    setTimeout(() => msg.style.transform = 'translateX(0)', 100);
    setTimeout(() => {
        msg.style.transform = 'translateX(100%)';
        setTimeout(() => document.body.removeChild(msg), 300);
    }, 3000);
}

// Day update
function updateDay() {
    const days = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
    const today = days[new Date().getDay()];
    const dayElements = document.querySelectorAll('.day');

    dayElements.forEach((el, index) => {
        const dayName = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'][index];
        const hourEl = el.parentElement;

        hourEl.classList.remove('today');
        if (dayName === today) {
            el.textContent = 'Hoy';
            hourEl.classList.add('today');
        } else {
            el.textContent = dayName;
        }
    });
}

// Status update
function updateStatus() {
    const now = new Date();
    const hour = now.getHours();
    const day = now.getDay();

    // Weekend check
    if (day === 0 || day === 6) {
        setClosedStatus();
        return;
    }

    // Business hours check
    if ((hour >= 10 && hour < 14) || (hour >= 17 && hour < 21)) {
        setOpenStatus();
    } else {
        setClosedStatus();
    }
}

function setOpenStatus() {
    const statusElements = document.querySelectorAll('.status2 span, .status-open span');
    statusElements.forEach(el => {
        if (el.parentElement.classList.contains('status-open')) {
            el.textContent = 'Actualmente abierto';
        }
    });
}

function setClosedStatus() {
    const statusElements = document.querySelectorAll('.status2 span, .status-open span');
    statusElements.forEach(el => {
        if (el.parentElement.classList.contains('status-open')) {
            el.textContent = 'Actualmente cerrado';
        } else {
            el.textContent = 'Cerrado';
        }
    });
}

// Card animations
function initAnimations() {
    const cards = document.querySelectorAll('.card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';

        setTimeout(() => {
            card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 100);
    });
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    updateDay();
    updateStatus();
    initAnimations();

    // Update every minute
    setInterval(() => {
        updateDay();
        updateStatus();
    }, 60000);
});

// Global exports
window.ViveTuMovil = {
    handleCall,
    handleDirections,
    handleShare
};

// Status update por el testo "cierra en"
function updateStatus() {
    const now = new Date();
    const hour = now.getHours();
    const minute = now.getMinutes();
    const day = now.getDay();

    // Weekend check
    if (day === 0 || day === 6) {
        setClosedStatus();
        updateCountdown(now, null); // No hay horario de apertura
        return;
    }

    // Business hours check
    if ((hour >= 10 && hour < 14) || (hour >= 17 && hour < 20)) { // Corregido hasta las 20h
        setOpenStatus();
        if (hour < 14) {
            // Calcula el tiempo restante hasta las 14h
            updateCountdown(now, { hour: 14, minute: 0 });
        } else {
            // Calcula el tiempo restante hasta las 20h (o 20:30 si fuera necesario)
            updateCountdown(now, { hour: 20, minute: 0 });
        }
    } else {
        setClosedStatus();
        if (hour < 17) {
            // Calcula el tiempo restante hasta las 17h (apertura de la tarde)
            updateCountdown(now, { hour: 17, minute: 30 });
        } else {
            // Calcula el tiempo restante hasta las 10h del día siguiente (apertura de la mañana)
            const tomorrow = new Date(now.getTime() + 24 * 60 * 60 * 1000);
            tomorrow.setHours(10, 0, 0, 0);
            updateCountdown(now, { hour: tomorrow.getHours(), minute: tomorrow.getMinutes() });
        }
    }
}

function updateCountdown(now, targetTime) {
    if (!targetTime) {
        document.querySelector('.status2 span').textContent = 'Cerrado';
        return;
    }

    const target = new Date(now.getTime());
    target.setHours(targetTime.hour, targetTime.minute, 0, 0);

    const diff = target.getTime() - now.getTime();
    if (diff <= 0) {
        document.querySelector('.status2 span').textContent = 'Cerrado';
        return;
    }

    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)) + 1;

    document.querySelector('.status2 span').textContent = `Cierra en ${hours}h${minutes}m`;
}

updateStatus(); // Llamada inicial para establecer el estado al cargar la página
setInterval(updateStatus(), 60 * 1000); // Actualiza cada minuto
