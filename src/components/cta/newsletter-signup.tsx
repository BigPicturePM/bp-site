import { FC } from "react"
import styles from './cta.module.scss';

export const NewsletterSignup: FC = () => {
    return (
        <form>
            <div className={styles.emailContainer}>
                {/*<label htmlFor="emailAddress" className="form-label">Email address</label>*/}
                <input placeholder="you@company.com" type="email" className={styles.emailControl}
                       id="emailAddress"/>
            </div>
            <div className="grid  gap-2 mb-6">
                <button type="submit" className={styles.signUpButton}>
                    Get Early Access
                </button>
            </div>
        </form>
    )
}
