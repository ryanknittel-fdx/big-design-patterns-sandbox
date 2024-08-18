import React from 'react';
import { Box, Button, Flex, FlexItem, H1, Panel, Text } from '@bigcommerce/big-design';
import { CheckIcon, CloseIcon } from '@bigcommerce/big-design-icons';

const AppCard = () => {
  return (
    <>
      <Flex justifyContent="center" alignItems="center" flexDirection="column" marginBottom="medium">
        <Box backgroundColor="secondary10" borderRadius="normal" padding="xxxLarge" marginBottom="medium" />
        <H1 marginBottom="none">App logo</H1>
      </Flex>
      <Flex justifyContent="space-between" alignItems="center" marginBottom="medium">
        <Text>Price: <strong>Free</strong></Text>
        <Text>Rating: <strong>★★★★★</strong></Text>
      </Flex>
      <Text marginBottom="medium">
        By clicking on install you agree to the <a href="#">BigCommerce terms of service</a> and the App <a href="#">privacy policy</a> and <a href="#">terms of service</a>.
      </Text>
      <Button variant="primary" marginBottom="medium">Install</Button>
      <Box marginBottom="medium">
        <Text bold marginBottom="small">By installing this app, it will be able to:</Text>
        <Flex flexDirection="column" flexGap="4px">
          <Flex alignItems="center">
            <CheckIcon color="success" />
            <FlexItem marginLeft="small">View basic store configuration settings</FlexItem>
          </Flex>
          <Flex alignItems="center">
            <CheckIcon color="success" />
            <FlexItem marginLeft="small">View general store information and settings</FlexItem>
          </Flex>
          <Flex alignItems="center">
            <CheckIcon color="success" />
            <FlexItem marginLeft="small">View and modify orders</FlexItem>
          </Flex>
          <Flex alignItems="center">
            <CheckIcon color="success" />
            <FlexItem marginLeft="small">View and modify products</FlexItem>
          </Flex>
        </Flex>
      </Box>
      <Box>
        <Text bold marginBottom="small">Catalyst <strong>will not be able to:</strong></Text>
        <Flex flexDirection="column" flexGap="4px">
          <Flex alignItems="center">
            <CloseIcon color="danger" />
            <FlexItem marginLeft="small">Access your password</FlexItem>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};

export default AppCard;
