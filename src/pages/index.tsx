import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';
import {NewsletterSignup} from '../components/cta/newsletter-signup';


export default function Home(): JSX.Element {
    const {siteConfig} = useDocusaurusContext();
    return (
        <Layout
            title={`${siteConfig.title}`}
            description="The all-in-one collaboration tool for businesses and projects.">
            <HomepageHeader/>
            <main>
                <HomepageFeatures/>
            </main>
        </Layout>
    );
}

function HomepageHeader() {
    const {siteConfig} = useDocusaurusContext();
    return (
        <header className={clsx('hero', styles.heroBanner)}>
            {/*<img src="/img/logo.svg" className={styles.bigLogo} alt="Big Picture Logo"/>*/}
            <div className={"container " + styles.bannerLayout}>
                <div className={styles.info}>
                    <Heading as="h1" className="hero__title">
                        {siteConfig.title}
                    </Heading>
                    <h3 className="hero__subtitle">{siteConfig.tagline}</h3>
                        <p>Replace Slack and Teams, Jira and Asana, Confluence and Sharepoint, with a single application that lets you quickly search, track, and manage all project details.</p>
                </div>
                <div className={styles.screenshot}>
                    <img src="/img/editing-tasks.png" alt="Big Picture Screenshot"/>
                    <aside>An early screenshot of Big Picture in development, updated weekly!</aside>
                </div>
            </div>
            <div className={styles.signUpSection}>
                <h3>Stay updated on our progress and become an early adopter</h3>
                <NewsletterSignup/>
                <aside>Early adopters will enjoy lifetime discounts on Big Picture!</aside>
            </div>

        </header>
    );
}