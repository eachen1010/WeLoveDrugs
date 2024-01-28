//import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import pharmaseeLogo from '../components/pharmaseeLogo.png';
import pharmaseeName from '../components/pharmasee.png';

import {
    Heading,
    Flex,
    Input,
    Button,
    Stack,
    Box,
    FormControl,
    FormHelperText,
    Image
  } from "@chakra-ui/react";
  

const SignUp = () => {

    const navigate = useNavigate();
    //const [error, setError] = useState('');

    // useEffect(() => {
    //     if(currentUser)
    //     {
    //         navigate('/search');
    //     };
    //   });

    const handleClick = async data => {
        //const { username, password } = data;
        try {
          navigate('/search');
          //reset();
        } catch (e) {
          console.log(e);//setError('Failed to log in');
        }
      };


    return (
        <>
            <Flex
            flexDirection="row"
            width="100wh"
            height="100vh"
            backgroundColor="white"
            > 

            <Box bg="#44accf" minW={{base:"40%"}}>
              <Heading mt = "50%" ml = "7%" color="white">Come up with a unique family username!</Heading>
            </Box>

            <Stack
            justifyContent="center"
            alignItems="center"
            minW = {{base:"60%"}}
            flexDir="column"
            //m="2"
            >
            <Box>
            <Image src={pharmaseeLogo} alt='cute pill' width="125px" height="125px"/>
            </Box>

            <Box>
            <Image src={pharmaseeName} alt='website name' width = "30vw"/>
            </Box>

            <Box minW={{ base: "50%"}}>
                <form >
                <Stack
                   // maxW = {{base:"60%"}}
                    //maxW = "10vw"
                    spacing={2}
                    backgroundColor="whiteAlpha.900"
                    boxShadow="base"
                    rounded = "md"
                    padding = "20px"
                    alignItems = "center"
                    justifyContent = "center"
                >
                    <FormControl justifyContent = "center">
                        <Input type="username" placeholder="New Family Username" />
                    </FormControl>
                    <FormControl>
                        <Input type={"password"} placeholder="New Password"/>
                    </FormControl>

                    <Button
                    borderRadius={0}
                    type="submit"
                    variant="solid"
                    colorScheme='blue'
                    backgroundColor = "#44accf"
                    width="full"
                    onClick={handleClick}
                    >
                        Create Family
                    </Button>

                </Stack>
                </form>
            </Box>
            </Stack>
        </Flex>
      </>
    );
};
export default SignUp;