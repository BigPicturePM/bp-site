import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Work Without Limitations',
    Svg: require('@site/static/img/logo-open.svg').default,
    description: (
      <>
        Unlimited projects, users, guests, tasks, lists, messages and everything else. Pay only for what you use.
      </>
    ),
  },
  {
    title: 'Collaborate Across Your Organization',
    Svg: require('@site/static/img/logo-open.svg').default,
    description: (
      <>
        Big Picture project management is a single, unified, source for all project collaboration. All conversations, meetings, notes, documentation, work items, and tasks are stored in Big Picture. 
        The days of siloed project details are over.
      </>
    ),
  },
  {
    title: 'Focus on Projects',
    Svg: require('@site/static/img/logo-open.svg').default,
    description: (
      <>
        Most messages and meetings at the team level are about a project: from daily stand-up, to slack messages asking about the status of an issue, to a zoom meeting triaging the latest issues, or planning the next sprint. Big Picture unifies all project communication and tracking into a single application.
      </>
    ),
  },
  {
    title: 'Teams Matter',
    Svg: require('@site/static/img/logo-open.svg').default,
    description: (
      <>
        Teams are a central focus of Big Picture. They can be assigned to projects, @mentioned in conversations, membership history is stored, and their relationships to other teams can be tracked.
      </>
    ),
  },
  {
    title: 'Public and Private Documentation',
    Svg: require('@site/static/img/logo-open.svg').default,
    description: (
      <>
        Collaborate on documents that are published for a project, organization, or a team. Documentation is centralized, tracked, and versioned, and can be made private, public to the whole organization, or even published to end-users. 
      </>
    ),
  },
  {
    title: 'External Collaborators',
    Svg: require('@site/static/img/logo-open.svg').default,
    description: (
      <>
        Let guest users see issue lists and progress, public documentation, or even collaborate on projects alongside your permanent employees.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className={styles.featureImageContainer}>
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
