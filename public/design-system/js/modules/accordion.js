// @ts-nocheck
function accordion(accordionElement) {
    // Add classes to help with CSS 
    let details = accordionElement.querySelectorAll('details');
    let summaries = accordionElement.querySelectorAll('summary');
    details.forEach((detail) => {
        detail.classList.add('accordion-item');
    });
    summaries.forEach((summary) => {
        summary.classList.add('accordion-header');
        summary.classList.add('accordion-button');
        summary.classList.add('h4');
    });
    // Fetch all the details element.
    if (!accordionElement.classList.contains('accordion--keep-open')) {
        const details = accordionElement.querySelectorAll(":scope > details");
        // Add the onclick listeners.
        details.forEach((targetDetail) => {
            targetDetail.addEventListener("click", () => {
                // Close all the details that are not targetDetail.
                details.forEach((detail) => {
                    if (detail !== targetDetail) {
                        detail.removeAttribute("open");
                    }
                });
            });
        });
    }
}
export default accordion;
