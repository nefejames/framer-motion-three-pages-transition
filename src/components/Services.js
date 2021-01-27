import {PageContainer} from '../Styles'; 

const Services = ({pageVariants}) => {
  return (
    <PageContainer
    variants={pageVariants} 
    exit="out" 
    animate="in" 
    initial="out">
      <h1>Services Page</h1>
    </PageContainer>
  )
}

export default Services
