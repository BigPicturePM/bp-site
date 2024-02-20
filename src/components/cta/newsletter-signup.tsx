import {FC} from "react"
import styles from "@site/src/components/cta/cta.module.scss";

export const NewsletterSignup: FC = () => {
    return (
        <form
            action="https://burrowscorp.us21.list-manage.com/subscribe/post?u=52d8a79d04e84f5b256f65da7&amp;id=3f615c1d6b&amp;f_id=00cff6e6f0"
            method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form"
        >
            <div className={styles.emailContainer}>
                {/*<label htmlFor="emailAddress" className="form-label">Email address</label>*/}
                <input placeholder="you@company.com" type="email" className={styles.emailControl}
                       name="EMAIL"
                       required={true}
                       id="mce-EMAIL"/>
                <div style={{position:"absolute", left:"-5000px"}}>
                <input type="text" name="b_52d8a79d04e84f5b256f65da7_3f615c1d6b" tabIndex="-1"
                       defaultValue=""/>
                </div>
            </div>
            <div className="grid  gap-2 mb-6">
                <button type="submit" className={styles.signUpButton}>
                Get Early Access
                </button>
            </div>
        </form>
)
}
