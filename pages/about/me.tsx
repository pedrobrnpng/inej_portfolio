import Navbar from "../../components/navbar"
import { getData } from '../../lib/aboutme'
import { GetStaticProps } from 'next'


export default function AboutMe({
  pageData
}: {
  pageData: {
    contentHtml: string
  }
}) {
  return (
    <div>
      <Navbar />
      <div>
        <h3>AbOuT mE</h3>
        <div dangerouslySetInnerHTML={{ __html: pageData.contentHtml }} />
      </div>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const pageData = await getData('itsme')

  return {
    props: {
      pageData
    }
  }
}