import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Date from '../components/date';
import Layout, { siteTitle } from '../components/layout';
import Banner from '../components/banner/banner';
import LandingPageStats from '../components/landingPageStats/landingPageStats';
import LandingPageSiteDesc from '../components/landingPageSiteDesc/landingPageSiteDesc';

import utilStyles from '../styles/utils.module.scss';
import { getSortedPostsData } from '../utils/posts';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div className="flex justify-center p-5">
        <Link href="/testForm">
          <a className="pr-3">Simple Form with no validation</a>
        </Link>
        <Link href="/validateForm">
          <a>React Hook Form with validation</a>
        </Link>
      </div>
      {/* <Banner />
      <div className="flex sm:flex-col sm:justify-center md:flex-row md:px-72 md:justify-between md:mt-32 md:mb-72 items-center">  
        <LandingPageStats
          imgPath="/images/icon-communities.svg"
          statText="Communities Formed"
          quantityText="1.4K+"
        />
        <LandingPageStats
          imgPath="/images/icon-messages.svg"
          statText="Messages Sent"
          quantityText="2.7m+"
        />
      </div>
      <LandingPageSiteDesc
        descTitle="Grow Together"
        descContent="Generate meaningful discussions with your audience and build a strong, loyal community. Think of the insightful conversations you miss out on with a feedback form"
        descBgImgPathDesktop="/images/bg-section-top-desktop-1.svg"
        descBgImgPathMob="/images/bg-section-top-desktop-2.svg"
        descImgPath="/images/illustration-grow-together.svg"
      /> */}
      {/* <section className={utilStyles.headingMd}>
        <p>Hello, I am Ironman. Billionaire, playboy, philanthropist</p>
        <p>
          (This is a sample website - you&apos;ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section> */}
      {/* <Image
        alt="landing page"
        src="/images/desktop-design.jpg"
        layout="fill"
      />
      <Image
        alt="landing page"
        src="/images/mobile-design.jpg"
        layout="fill"
      />
      <Image
        alt="landing page"
        src="/images/active-states.jpg"
        layout="fill"
      /> */}
    </Layout>
  );
}
