import {PageContainer} from '../Styles'; 

const About = ({pageVariants}) => {
  return (
    <PageContainer primary
    variants={pageVariants} 
    exit="out" 
    animate="in" 
    initial="out">
      <h1>About Page</h1>
    </PageContainer>
  )
}

export default About
