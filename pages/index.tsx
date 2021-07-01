import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Navbar from '../components/navbar'
import Footer from '../components/footer'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      {/* background */}
      <section>
        <div className={`${utilStyles.test}`}>
          <div className={`${utilStyles.ParallaxVideo}`}>
            
            <video
              className={`${utilStyles.video}`}
              autoPlay
              muted
              loop
              id='background'
            >
              <source src="/videos/background.mp4" type="video/mp4" />
            </video>
          </div>
          <div className={`${utilStyles.content} ${utilStyles.videoText}`}>
            <h1 className={`${utilStyles.videoText}`}>INÊS PINHEIRO</h1>
            <h6 className={`${utilStyles.videoText2}`}>Animation and Illustration</h6>
          </div>
          <div>
            <a href="#projects" className={`${utilStyles.scrollDown}`} ></a>
          </div>
        </div>
      </section>

      <section id="#projects">
        <div className={`${utilStyles.ParallaxContent}`}>
          {/* NAVBAR */}
          <Navbar />

          <Footer />
          {/* SHOWCASE */}
          <div>

          </div>
        </div>
      </section>


      {/* test */}
      {/* <section className={utilStyles.headingMd}>
        <p>[Your Self Introduction]</p>
        <p>
          (This is a sample website - you’ll be building a site like this in{' '}
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
    </Layout>
  )
}
