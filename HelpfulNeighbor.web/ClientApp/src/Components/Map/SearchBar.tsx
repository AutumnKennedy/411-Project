import { SearchIcon } from "@chakra-ui/icons";
import { Box, 
    IconButton, 
    Input, 
    InputGroup, 
    InputRightElement,  
    Stack, 
    Wrap, 
    WrapItem, 
} from "@chakra-ui/react";
import React from "react";
import SearchFilter from "./SearchFilter";

export default function SearchBar() {
    const searchBarStyle: React.CSSProperties = {
        position: 'absolute',
        top: '3%',
        left: '3%',
    };

    return (
        <Wrap>
            <WrapItem>
                <div style={searchBarStyle}>
                    <Stack spacing={4}>
                        <Box bgColor="#FFFFFF" borderRadius='lg'>
                            <InputGroup>
                                <Input placeholder='Search' variant='filled'/>
                                <InputRightElement>
                                    <IconButton aria-label='Search database' variant='ghost' icon={<SearchIcon />} />
                                </InputRightElement>
                            </InputGroup>
                        </Box>
                    </Stack>
                </div>
            </WrapItem>
            <WrapItem>
                <SearchFilter/>
            </WrapItem>
        </Wrap>
    );
}
