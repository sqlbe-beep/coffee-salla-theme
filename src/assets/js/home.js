import "lite-youtube-embed";
import BasePage from "./base-page";
import Lightbox from "fslightbox";
window.fslightbox = Lightbox;

class Home extends BasePage {
    onReady() {
        this.revealSections();
    }

    revealSections() {
        if (!("IntersectionObserver" in window)) {
            return;
        }

        const elements = document.querySelectorAll(".mzn-product-card, .mzn-story__body, .mzn-section__head, .mzn-hero__copy");
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) {
                    return;
                }

                entry.target.classList.add("is-visible");
                observer.unobserve(entry.target);
            });
        }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });

        elements.forEach((element) => observer.observe(element));
    }
}

Home.initiateWhenReady(['index']);
