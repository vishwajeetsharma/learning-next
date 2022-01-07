import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello I'm <b>Vishwajeet Sharma</b> I'm a software developer. You can contact me on <a href="https://twitter.com/Vishwaj57908623" target="_blank" rel='noreffer'>Twitter</a>.</p>
        <p>
          <Link href="/posts/first-post"><a>First Post</a></Link>
        </p>
      </section>
    </Layout>
  )
}