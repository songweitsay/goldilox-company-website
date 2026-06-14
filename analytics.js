// Google Analytics 4 bootstrap + outbound CTA click tracking.
// Single source of truth — included on every page via <script src="analytics.js"></script>.
(function () {
    var GA_ID = 'G-56H5KDP6Y2';

    // Load gtag.js
    var s = document.createElement('script');
    s.async = true;
    s.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_ID;
    document.head.appendChild(s);

    window.dataLayer = window.dataLayer || [];
    function gtag() { dataLayer.push(arguments); }
    window.gtag = gtag;
    gtag('js', new Date());
    gtag('config', GA_ID);

    // Track clicks on the two conversion paths: the Snowflake Marketplace
    // listing and the contact/demo form. Delegated so it covers every CTA
    // on the page, including any added later.
    document.addEventListener('click', function (e) {
        var a = e.target.closest ? e.target.closest('a[href]') : null;
        if (!a) return;
        var href = a.getAttribute('href') || '';
        var label = (a.textContent || '').replace(/\s+/g, ' ').trim().slice(0, 80);
        if (href.indexOf('app.snowflake.com/marketplace') !== -1) {
            gtag('event', 'marketplace_cta_click', { link_text: label, link_url: href, page: location.pathname });
        } else if (href.indexOf('forms.gle') !== -1) {
            gtag('event', 'lead_form_click', { link_text: label, link_url: href, page: location.pathname });
        }
    });
})();
