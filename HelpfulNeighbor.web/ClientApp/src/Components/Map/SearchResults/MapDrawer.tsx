import React from 'react';
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Box,
  Heading,
} from '@chakra-ui/react';
import InfoCard from './InfoCard';
import { SearchResults } from '../../../Data/Queries/ResourceQueries';
import { SearchResult } from '../../../Data/Queries/ResourceQueries';

interface MapDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  searchResults: SearchResults;
}

export default function MapDrawer({ isOpen, onClose, searchResults }: MapDrawerProps) {
  console.log("Search Results in MapDrawer:", searchResults);

  return (
    <Box>
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader textAlign="center">Search Results</DrawerHeader>
          <DrawerBody>
            <div>
              {searchResults.resources && searchResults.resources.length > 0 ? (
                <>
                  <b><Heading size='md' textAlign="center">{searchResults.resources.length} Search Results Found</Heading></b>
                  <br/>
                  {searchResults.resources.map((result: SearchResult, index: number) => (
                    <div key={index}>
                      <InfoCard
                        Name={result.resource.Name}
                        ResourceType={result.resource.ResourceType}
                        Address={result.resource.Address}
                        hoursOfOperation={result.hoursOfOperation || []}
                        Website={result.resource.Website}
                        PhoneNumber={result.resource.PhoneNumber}
                      />
                    </div>
                  ))}
                </>
              ) : (
                <p>No search results found.</p>
              )}
            </div>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}


