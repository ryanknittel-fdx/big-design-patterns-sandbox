import React, { FunctionComponent, useState } from "react";
import {
  Flex,
  FlexItem,
  Button,
  Panel,
  Form,
  FormGroup,
  Input,
  Textarea,
} from "@bigcommerce/big-design";
import Page from "../../components/page/Page";
import { useNavigate } from "react-router";
import { theme } from "@bigcommerce/big-design-theme";

/**
 * A functional component that renders a form with various input fields.
 * The form includes validation for email and email confirmation to ensure they meet specific criteria.
 *
 * @returns {JSX.Element} The form page component.
 */
const PageForm: FunctionComponent = () => {
  const navigate = useNavigate();

  /**
   * State to hold form data for name, last name, email, email confirmation, and description.
   */
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    email: "",
    emailConfirm: "",
    description: "",
  });

  /**
   * Handles changes to any input field by updating the form state.
   * @param {React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>} event The input change event.
   */
  const handleInputChange = (event) => {
    const { id, value } = event.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  // Regular expression to validate the email format.
  const EMAIL_REGEX = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

  // State to store email validation error message.
  const [emailError, setEmailError] = useState("");
  // State to store email confirmation validation error message.
  const [emailConfirmationError, setEmailConfirmationError] = useState("");

  /**
   * Validates the email input against a regex pattern and sets an error message if invalid.
   */
  const validateEmail = () => {
    setEmailError(
      EMAIL_REGEX.test(formData.email) ? "" : "Please enter a valid email",
    );
  };

  /**
   * Validates that the email and email confirmation inputs match and sets an error message if they do not.
   */
  const validateEmailConfirmation = () => {
    setEmailConfirmationError(
      formData.email === formData.emailConfirm ? "" : "Emails do not match",
    );
  };

  // Action bar buttons with event handlers for cancel and save operations.
  const ActionBarButtons = (
    <>
      <Button
        variant="secondary"
        onClick={() => window.alert("Cancel clicked")}
      >
        Cancel
      </Button>
      <Button variant="primary" onClick={() => window.alert("Form Submitted")}>
        Save
      </Button>
    </>
  );

  return (
    <Page
      headerTitle="Form Page"
      headerBackButtonLabel="Back to patterns"
      onHeaderBackButtonClick={() => navigate("/")}
      pageDescription={<>Description of the overall form.</>}
      actionBar={ActionBarButtons}
    >
      <Flex flexDirection="column" flexGap={theme.spacing.xLarge}>
        <FlexItem>
          <Panel
            header="Form heading"
            description="Description of the form (optional)"
          >
            <Form fullWidth>
              <FormGroup>
                <Input
                  id="name"
                  label="Name"
                  onChange={handleInputChange}
                  placeholder="Enter name"
                  type="text"
                  value={formData.name}
                />
                <Input
                  id="lastName"
                  label="Last name"
                  onChange={handleInputChange}
                  placeholder="Enter last name"
                  type="text"
                  value={formData.lastName}
                />
              </FormGroup>
              <FormGroup>
                <Input
                  id="email"
                  label="Email"
                  onChange={handleInputChange}
                  onBlur={validateEmail}
                  placeholder="Enter email"
                  type="email"
                  value={formData.email}
                  required
                  error={emailError}
                />
                <Input
                  id="emailConfirm"
                  label="Confirm email"
                  onChange={handleInputChange}
                  onBlur={validateEmailConfirmation}
                  placeholder="Confirm email"
                  type="email"
                  value={formData.emailConfirm}
                  required
                  error={emailConfirmationError}
                />
              </FormGroup>
              <FormGroup>
                <Textarea
                  id="description"
                  onChange={handleInputChange}
                  label="Description"
                  placeholder="Enter description"
                  resize
                  rows={3}
                  value={formData.description}
                />
              </FormGroup>
            </Form>
          </Panel>
        </FlexItem>
      </Flex>
    </Page>
  );
};

export default PageForm;
