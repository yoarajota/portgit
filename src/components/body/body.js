import { useMediaQuery, Grid, GridItem, } from "@chakra-ui/react"
import HeaderPc from "../headers/headerpc"
import { useScreen } from "../../hooks/useScreen"


const Body = () => {

    const { screen } = useScreen()

    const [isLargerThan1012] = useMediaQuery('(min-width: 1012px)')
    const [isLargerThan768] = useMediaQuery('(min-width: 768px)')
    const [isLargerThan544] = useMediaQuery('(min-width: 544px)')


    return (
        <Grid m='0 auto' maxW='1280px' p='0 32px' justifyContent='center' templateColumns='repeat(4, 1fr)'>
            <GridItem maxW='296px'>
                {isLargerThan768 ? <HeaderPc /> : ''}
            </GridItem>
            <GridItem maxWidth='896px' p='24px' colSpan={isLargerThan768 ? '3' : '4'}>
                {screen}
            </GridItem>
        </Grid>
    )
}

export default Body;