import {NewsletterSignup} from "@site/src/components/cta/newsletter-signup";
import styles from "@site/src/components/cta/cta.module.scss";

export const BlogFooterSignup = () => {
    return (
        <div className={styles.signUpSection}>
            <h3>Stay updated on our progress and become an early adopter</h3>
            <NewsletterSignup/>
            <aside>Early adopters will enjoy lifetime discounts on Big Picture!</aside>
        </div>
    )
}