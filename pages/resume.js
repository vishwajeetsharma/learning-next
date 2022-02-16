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
      <iframe src="https://onedrive.live.com/embed?cid=301D1E744BB92512&amp;resid=301D1E744BB92512%2116082&amp;authkey=ALAhu9Mgj1TnOHM&amp;em=2" width="800px" height="650px" frameborder="0">This is an embedded <a target="_blank" href="https://office.com">Microsoft Office</a> document, powered by <a target="_blank" href="https://office.com/webapps">Office</a>.</iframe>
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