import Head from 'next/head'
import Link from 'next/link'
export default function Home() {
  return (
    <>
      <Head>
        <title>Resume | Vishwajeet Sharma</title>
      </Head>
      <section align="center" className="heading">
          <h1>Resume</h1>
          <h3>Vishwajeet Sharma</h3>
      </section>
      <section align="center">
      <iframe src="/resume.html"  width="100%"></iframe>
      </section>
      <section className="back-to-home">
      <div style={{padding:"15px 40px", marginTop:"15px", marginLeft:"100px"}}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      </section>
    </>
  )
}