import Head from 'next/head'
import Date from '../../components/Date'
import Layout from '../../components/Layout'
import { getAllPostIds, getPostData } from '../../lib/posts'
import utilStyles from '../../styles/utils.module.css'


export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id)
  return {
    props: {
      postData
    }
  }
}

// In development (npm run dev or yarn dev), getStaticPaths runs on every request.
// In production, getStaticPaths runs at build time.
export async function getStaticPaths() {
  const paths = getAllPostIds()
  // paths contains the array of known paths returned by getAllPostIds(), which include the params defined by pages/posts/[id].js. 
  return {
    paths,
    fallback: false
  }
}


export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  )
}