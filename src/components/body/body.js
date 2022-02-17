import { useMediaQuery, Grid, GridItem, } from "@chakra-ui/react"
import HeaderPc from "../headers/headerpc"
import Default from "../body/default"
import Packages from "./packages/packages"
import { useState } from "react"
import Navbuttonsmobo from "./navbuttonsmobo"


const Body = () => {

    const [isLargerThan1012] = useMediaQuery('(min-width: 1012px)')
    const [isLargerThan768] = useMediaQuery('(min-width: 768px)')
    const [isLargerThan544] = useMediaQuery('(min-width: 544px)')


    const [Screen, setScreen] = useState('')

    return (
        <Grid m='0 auto' maxW='1280px' p='0 32px' justifyContent='center' templateColumns='repeat(4, 1fr)'>
            <GridItem maxW='296px'>
                {isLargerThan768 ? <HeaderPc /> : ''}
            </GridItem>
            <GridItem maxWidth='896px' p='24px' colSpan={isLargerThan768 ? '3' : '4'}>
                <Default />
            </GridItem>
        </Grid>
    )
}

export default Body;