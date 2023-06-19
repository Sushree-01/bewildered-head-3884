import React from 'react'
import { Box, Flex, Heading, Img } from '@chakra-ui/react'
import Footer from '../Components/Footer'
export const Home = () => {
  return (
    <div>
      <Box >
      <Box margin={"5%"} backgroundColor={"darkBlue"}>
      <Flex>
      <Img  width={"30%"} src="https://assets-netstorage.groww.in/web-assets/billion_groww_desktop/prod/build/client/images/hns-support-img.c56178f0.png" />
      <Heading color={"white"} width={'60%'} paddingTop={"13%"} fontSize={"50px"}>
        Trading Hub Most Trusted and secures site to invest
      </Heading>
      </Flex>
      </Box>
      <Box width={"96%"}  paddingLeft={"5%"} marginBottom={"5%"} >
      <Box backgroundColor={"darkBlue"} >
        <Flex>
          <Img  width={"30%"} paddingLeft={"10%"} src='https://assets-netstorage.groww.in/web-assets/billion_groww_desktop/prod/build/client/images/ios.0a99dcbb.png'/>
          <Img  width={"30%"} paddingLeft={"10%"} src='https://assets-netstorage.groww.in/web-assets/billion_groww_desktop/prod/build/client/images/web.634ac717.png'/>
          <Img  width={"30%"} paddingLeft={"10%"} src='https://assets-netstorage.groww.in/web-assets/billion_groww_desktop/prod/build/client/images/android.6dfb12ca.png'/>
        </Flex>
      </Box>
      </Box>
      <Footer/>

      </Box>
     


    
     
    </div>
  )
}
