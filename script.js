document.addEventListener('DOMContentLoaded', () => {
  // Event listeners para los botones de suscripción
  const botonesSuscribirse = document.querySelectorAll('.suscribirse-button');
  botonesSuscribirse.forEach(boton => {
    boton.addEventListener('click', (event) => {
      const plan = event.target.dataset.plan;
      // Número de teléfono (reemplaza con el número deseado)
      const numeroTelefono = '50369383442'; // Código de país + número
      const mensaje = `¡Hola! Estoy interesado en suscribirme al plan ${plan}.`;
      const urlWhatsApp = `https://wa.me/${numeroTelefono}?text=${encodeURIComponent(mensaje)}`;
      window.open(urlWhatsApp, '_blank'); // Abre WhatsApp en una nueva pestaña
    });
  });

  // Event listeners para las categorías
  const categorias = document.querySelectorAll('.categoria-item');
  categorias.forEach(categoria => {
    categoria.addEventListener('click', (event) => {
      const categoriaSeleccionada = event.currentTarget.dataset.categoria;
      // Redirige a la página de la categoría seleccionada
      scrollToSection(categoriaSeleccionada);
    });
  });

  // Manejo de enlaces de navegación (Inicio, Categorías, Planes, Contacto)
  const enlacesNav = document.querySelectorAll('nav a');
  enlacesNav.forEach(enlace => {
    enlace.addEventListener('click', (event) => {
      event.preventDefault(); // Evita la navegación predeterminada
      const destino = event.target.dataset.section;
      scrollToSection(destino);
    });
  });

  function scrollToSection(destino) {
    let target;
    if (destino === 'hero') {
      target = document.documentElement;
    } else {
      target = document.getElementById(destino);
    }

    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start' // Para alinear la parte superior del elemento con la parte superior de la ventana
      });
    }
  }

  // Simulación de envío de formulario de contacto (opcional)
  const formularioContacto = document.getElementById('contact-form');
  if (formularioContacto) {
    formularioContacto.addEventListener('submit', function(event) {
      event.preventDefault();
      // Aquí podrías agregar la lógica para enviar el formulario
      alert('Formulario de contacto enviado (simulación)');
      formularioContacto.reset(); // Limpia el formulario
    });
  }
});