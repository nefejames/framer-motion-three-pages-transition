import {PageContainer} from '../Styles'; 

const Home = ({pageVariants}) => {
  return (
    <PageContainer
      variants={pageVariants} 
      exit="out" 
      animate="in" 
      initial="out"
      transition="transition">
      <h1>Home page</h1>
    </PageContainer>
  )
}

export default Home
