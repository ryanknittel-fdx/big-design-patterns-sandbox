import React from "react";
import {
  Box,
  Button,
  Flex,
  FlexItem,
  Form,
  FormGroup,
  H1,
  HR,
  Panel,
  Small,
  Text,
} from "@bigcommerce/big-design";
import { CheckIcon, CloseIcon } from "@bigcommerce/big-design-icons";

const AppCard = () => {
  return (
    <>
      <HR />
      <Flex
        justifyContent="space-between"
        alignItems="center"
        marginBottom="medium"
        marginTop="small"
      >
        <FlexItem>
          <Text margin="none">Price</Text>
          <Text bold marginTop="xxSmall">
            Free
          </Text>
        </FlexItem>
        <FlexItem>
          <Text margin="none">Rating</Text>
          <Text bold color="warning60" marginTop="xxSmall">
            ★★★★★
          </Text>
        </FlexItem>
        <FlexItem>
          <Text margin="none">Partner Tier</Text>
          <Flex marginTop="xxSmall">
            <FlexItem>
              <img
                src="https://images.ctfassets.net/wowgx05xsdrr/mKRdJn9Ea3OXNOizSFotn/8d2579f3cdc3b214fdf635cfaee78cc9/elite.svg"
                height="24"
              />
            </FlexItem>
            <FlexItem>
              <Text color="brand" uppercase={true} marginLeft="xxSmall" bold>
                Elite
              </Text>
            </FlexItem>
          </Flex>
        </FlexItem>
      </Flex>
      <HR />
      <Text marginBottom="medium">
        By clicking on install you agree to the{" "}
        <a href="#">BigCommerce terms of service</a> and the App{" "}
        <a href="#">privacy policy</a> and <a href="#">terms of service</a>.
      </Text>
      <Form fullWidth>
        <FormGroup>
          <Button variant="primary" marginBottom="medium">
            Install
          </Button>
        </FormGroup>
      </Form>
      <Box marginBottom="medium">
        <Text bold marginBottom="small">
          By installing this app, it will be able to:
        </Text>
        <Flex flexDirection="column" flexGap="4px">
          <Flex alignItems="center">
            <CheckIcon color="success" />
            <FlexItem marginLeft="small">
              View basic store configuration settings
            </FlexItem>
          </Flex>
          <Flex alignItems="center">
            <CheckIcon color="success" />
            <FlexItem marginLeft="small">
              View general store information and settings
            </FlexItem>
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
        <Text bold marginBottom="small">
          Buy Buttons <strong>will not be able to:</strong>
        </Text>
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
