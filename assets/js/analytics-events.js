/**
 * EU CONFIO - Analytics Events Script
 * Delegação de eventos de clique e rastreamento GA4 via GTM
 */

(function() {
    'use strict';

    // Event delegation na fase de captura
    document.addEventListener('click', function(e) {
        const target = e.target.closest('a, button');
        if (!target) return;

        const href = target.href || target.getAttribute('data-href');
        const title = target.title || target.textContent || '';
        
        // Determinar localização do CTA
        let location = 'unknown';
        const section = target.closest('section');
        if (section) {
            if (section.classList.contains('hero')) location = 'hero';
            else if (section.classList.contains('empresas')) location = 'empresas';
            else if (section.classList.contains('pessoas')) location = 'pessoas';
            else if (section.classList.contains('faq')) location = 'faq';
            else if (section.classList.contains('footer')) location = 'footer';
            else if (section.classList.contains('download')) location = 'download';
        }

        // WhatsApp clicks
        if (href && href.includes('wa.me')) {
            trackEvent('whatsapp_click', {
                cta_label: title,
                cta_location: location
            });
        }
        // Phone clicks
        else if (href && href.startsWith('tel:')) {
            trackEvent('phone_click', {
                cta_label: title
            });
        }
        // Email clicks
        else if (href && href.startsWith('mailto:')) {
            trackEvent('email_click', {
                cta_label: title
            });
        }
        // App download
        else if (href && (href.includes('apps.apple.com') || href.includes('play.google'))) {
            const store = href.includes('apps.apple') ? 'ios' : 'android';
            trackEvent('app_download_click', {
                store: store,
                cta_label: title
            });
        }
    }, true);

    /**
     * Track event to GTM dataLayer
     */
    function trackEvent(eventName, params = {}) {
        if (window.dataLayer) {
            window.dataLayer.push({
                event: eventName,
                ...params,
                timestamp: new Date().toISOString()
            });
        }
    }

    // Page view tracking
    trackEvent('page_view', {
        page_title: document.title,
        page_path: window.location.pathname
    });

})();
