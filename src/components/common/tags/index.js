import { Helmet } from 'react-helmet-async'

const MetaTags = ({ title, description }) => {
  return (
    <Helmet>
      <meta charSet='utf-8' />
      <title>{title}</title>
      <meta name='description' content={description} />
    </Helmet>
  )
}

export default MetaTags
