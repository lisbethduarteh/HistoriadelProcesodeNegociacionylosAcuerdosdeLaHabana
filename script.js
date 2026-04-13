// Inicializar los íconos de Lucide
lucide.createIcons();

// Función para cambiar entre las diferentes secciones (tabs)
function switchTab(tabId) {
    const targetSection = document.getElementById(tabId);
    if (!targetSection) return;

    // Ocultar todas las secciones
    document.querySelectorAll('.tab-content').forEach(tab => tab.classList.remove('active'));
    
    // Reiniciar estilos de los botones de navegación
    document.querySelectorAll('.nav-button').forEach(btn => {
        btn.classList.remove('nav-active');
        btn.classList.add('text-slate-400');
    });

    // Mostrar la sección seleccionada
    targetSection.classList.add('active');
    
    // Resaltar el botón activo
    const activeBtn = document.getElementById('nav-' + tabId);
    if (activeBtn) {
        activeBtn.classList.add('nav-active');
        activeBtn.classList.remove('text-slate-400');
    }

    // Scroll suave hacia la sección (compensando la barra de navegación)
    const navEl = document.querySelector('nav');
    if (navEl) {
        const navHeight = navEl.offsetHeight;
        const elementRect = targetSection.getBoundingClientRect().top;
        const bodyRect = document.body.getBoundingClientRect().top;
        const offsetPosition = (elementRect - bodyRect) - navHeight - 30;
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
}

// Función para abrir el modal genérico
function openModal(imgSrc, caption) {
    const modal = document.getElementById('method-modal');
    const modalImg = document.getElementById('modal-image');
    const modalCap = document.getElementById('modal-caption');
    
    if (modalImg) modalImg.src = imgSrc || '';
    if (modalCap) modalCap.innerText = caption || '';
    if (modal) modal.classList.add('active');
    
    // Prevenir scroll en el fondo
    document.body.style.overflow = 'hidden';
}

// Función específica para la galería documental
function openGalleryModal(images) {
    openModal('', 'Revisión documental');
}

// Función para cerrar el modal
function closeModal() {
    const modal = document.getElementById('method-modal');
    if (modal) modal.classList.remove('active');
    
    // Restaurar scroll en el fondo
    document.body.style.overflow = 'auto';
}
