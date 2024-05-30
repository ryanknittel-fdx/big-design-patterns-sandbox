import React, { FunctionComponent, useState } from "react";
import {
  AlertProps, 
  Flex,
  FlexItem,
  Button,
  Panel,
  Form,
  FormGroup,
  Input,
  Textarea,
  Message,
  Checkbox,
} from "@bigcommerce/big-design";
import Page from "../../components/page/Page";
import { useNavigate } from "react-router";
import { theme } from "@bigcommerce/big-design-theme";
import { alertsManager } from "../../App";

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

  // the success alert for when things are submitted correctly
  // this alert will be handled by he alerts manager
  // which is the global entity declared in the App.tsx file
  const successAlert: AlertProps = {
    messages: [
      {
        text: "The form has been submitted successfully.",
      },
    ],
    type: "success",
    onClose: () => null,
  };

  /**
   * Handles changes to any input field by updating the form state.
   * @param {React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>} event The input change event.
   */
  const handleInputChange = (event: any) => {
    const { id, value } = event.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  // Regular expression to validate the email format.
  const EMAIL_REGEX = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

  // State to store email validation error message.
  const [emailValid, setEmailValid] = useState(true); // we start at optimistic state
  // State to store email confirmation validation error message.
  const [emailConfirmationValid, setEmailConfirmationValid] = useState(true); // we start at optimistic state
  // state to store if the form is valid
  const [formValid, setFormValid] = useState(false);
  // state to store if the form has been submitted
  const [formSubmitted, setFormSubmitted] = useState(false);
  // state to handle buttons disabled state
  const [isSubmitting, setIsSubmitting] = useState(false);

  // state to handle fake server error
  const [serverError, setServerError] = useState(false);
  // state to show server error alert
  const [showServerError, setServerErrorVisibility] = useState(false);

  /**
   * Validates the email input against a regex pattern and sets an error message if invalid.
   */
  const validateEmail = () => {
    const emailValid = EMAIL_REGEX.test(formData.email);
    setEmailValid(emailValid);
    setFormSubmitted(false);
    return emailValid;
  };

  /**
   * Validates that the email and email confirmation inputs match and sets an error message if they do not.
   */
  const validateEmailConfirmation = () => {
    const emailConfirmationValid = formData.email === formData.emailConfirm;
    setEmailConfirmationValid(emailConfirmationValid);
    setFormSubmitted(false);
    return emailConfirmationValid;
  };

  const validateForm = () => {
    const emailValid = validateEmail();
    const emailConfirmationValid = validateEmailConfirmation();

    const formmValid = emailValid && emailConfirmationValid;
    setFormValid(formmValid);
    return formValid;
  };

  const setupServerError = (event:any) => {
    setServerError(event.target.checked);
  }

  const handleSubmit = () => {
    // set server error visibiity to false
    setServerErrorVisibility(false);
    // let's set the form as submitted
    setFormSubmitted(true);
    // scroll window to top
    window.scrollTo(0, 0);

    // let's check for form validity first
    if (validateForm()) {
      // then submit the form

      // let's disable action buttons
      setIsSubmitting(true);

      // let's simulate a form submission to the server
      setTimeout(() => {
        if (serverError) {
          // let's simulate a server error
          setServerErrorVisibility(true);
        } else {
          // let's reset the form
          setFormData({
            name: "",
            lastName: "",
            email: "",
            emailConfirm: "",
            description: "",
          });
          // let's reset the form submitted state
          setFormSubmitted(false);
          // let's enable action buttons
          setIsSubmitting(false);
          
          // show success alert
          alertsManager.add(successAlert);
        }

        // let's enable action buttons
        setIsSubmitting(false);
      }, 1000);
    }
  };

  // Action bar buttons with event handlers for cancel and save operations.
  const ActionBarButtons = (
    <>
      <Button
        variant="secondary"
        onClick={() => window.alert("Cancel clicked")}
        disabled={isSubmitting}
      >
        Cancel
      </Button>
      <Button variant="primary" onClick={handleSubmit} disabled={isSubmitting} isLoading={isSubmitting}>
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
        {formSubmitted && !formValid && (
          <Message
            type="error"
            messages={[
              {
                text: "Please correct the form errors before submitting.",
              },
            ]}
          ></Message>
        )}
        {
          showServerError && (
            <Message
              type="error"
              messages={[
                {
                  text: "An error occurred while submitting the form. Please try again.",
                },
              ]}
            ></Message>
          )
        }
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
                  error={
                    emailValid
                      ? ""
                      : formData.email
                      ? "Invalid email"
                      : "Email is required"
                  }
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
                  error={emailConfirmationValid ? "" : "Emails do not match"}
                />
              </FormGroup>
              <FormGroup>
                <Textarea
                  id="description"
                  onChange={handleInputChange}
                  label="Message"
                  placeholder="Enter your message here"
                  resize
                  rows={3}
                  value={formData.description}
                />
              </FormGroup>
              <FormGroup>
                <Checkbox onChange={setupServerError} label="Simulate server error on submission" checked={serverError}></Checkbox>
              </FormGroup>
            </Form>
          </Panel>
        </FlexItem>
      </Flex>
    </Page>
  );
};

export default PageForm;
