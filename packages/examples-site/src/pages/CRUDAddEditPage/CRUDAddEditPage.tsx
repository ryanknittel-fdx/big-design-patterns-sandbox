import React, { FunctionComponent, useEffect, useState } from "react";
import {
  Box,
  Flex,
  FlexItem,
  Button,
  Panel,
  Form,
  FormGroup,
  Input,
  Message,
  Checkbox,
  Counter,
  FileUploader,
  StatefulTree,
  Text,
  Grid,
  ProgressCircle,
} from "@bigcommerce/big-design";
import { Scroller } from "bigcommerce-design-patterns";
import {
  ActionBar,
  ActionBarProps,
  Header,
  Page,
} from "@bigcommerce/big-design-patterns";
import { useNavigate } from "react-router";
import { useLocation } from "react-router-dom";
import { theme } from "@bigcommerce/big-design-theme";

import { alertsManager } from "../../App";

// let's import categories trhough the service instead
import { Category } from "../../data/dummyCategories";
import {
  getCategories,
  storeProduct,
  updateProduct,
  getProductByUrl,
} from "../../data/services";

interface DescriptionLink {
  text: string;
  link?: {
    text: string;
    href: string;
  };
}

/**
 * A functional component that renders a form with various input fields.
 * The form includes validation for email and email confirmation to ensure they meet specific criteria.
 *
 * @returns {JSX.Element} The form page component.
 */
const CRUDAddEditPage: FunctionComponent = () => {
  // NAVIGATION
  const navigate = useNavigate();
  const backToListingHandler = () => {
    navigate("/page-crud-list");
  };

  // URL PARAMS
  const location = useLocation();
  const nameParam = location.pathname.split("/").pop();
  const isEditPage = nameParam && nameParam !== "page-crud-add";

  // FETCH CATEGORE TREE
  const [productCats, setProductCats] = useState<Category[]>([]);
  useEffect(() => {
    const fetchCategories = async () => {
      const data = await getCategories();
      setProductCats(data as Category[]);
    };
    fetchCategories();
  }, []);

  // STATE FOR FORM FIELDS
  const [name, setName] = useState("");
  const [sku, setSku] = useState("");
  const [initialCategories, setInitialCategories] = useState<Category[]>([]);
  const [categories, setCategories] = useState([]);
  const [stock, setStock] = useState(0);
  const [price, setPrice] = useState(0);
  const [images, setImages] = useState<File[]>([]);

  // IF EDIT PAGE, FETCH ITEM DATA
  useEffect(() => {
    if (isEditPage) {
      // fetch item data from dummy service
      getProductByUrl(nameParam).then((data: any) => {
        // set form data
        data.name && setName(data.name);
        data.sku && setSku(data.sku);
        isEditPage &&
          data.categories.length > 0 &&
          setInitialCategories(data.categories);
        data.stock && setStock(data.stock);
        data.price && setPrice(data.price);
      });
    }
  }, [nameParam]);

  // INPUT CHANGE HANDLERS
  const nameChangeHandler = (event: any) => {
    const name = event.target.value.trim();
    name.length > 0 && setNameError("");
    setName(name);
  };
  const skuChangeHandler = (event: any) => {
    setSku(event.target.value);
  };
  const priceChangeHandler = (event: any) => {
    setPrice(event.target.value);
  };
  const handleCategoriesChange = (val: any) => {
    setCategories(val);
  };
  const fileChangeHandler = (files: File[]) => {
    validateFileTypes(files[0]);
    setImages(files);
  };

  // INPUT VALIDATION

  //name
  const [nameError, setNameError] = useState("");
  const validateName = () => {
    if (name.length < 1) {
      setNameError("Name is required.");
      return false;
    }
    setNameError("");
    return true;
  };

  //price
  const [priceError, setPriceError] = useState("");
  const validatePrice = () => {
    if (price.toString() !== "" && price > -1) {
      setPriceError("");
      return true;
    }
    setPriceError("Price is required.");
    return false;
  };

  // files
  const [filesError, setFilesError] = useState("");
  const validateFileTypes = (file: File) => {
    if (file) {
      const filesAreValid =
        file.type === "image/jpeg" ||
        file.type === "image/png" ||
        file.type === "image/gif" ||
        file.type === "image/svg+xml" ||
        file.type === "image/webp";
      if (!filesAreValid) {
        setFilesError("File type not supported. Please upload an image file.");
        return false;
      }
    }
    setFilesError("");
    return true;
  };

  // FORM

  // state to store if the form has been submitted
  const [formSubmitted, setFormSubmitted] = useState(false);
  // state to handle buttons disabled state
  const [isSubmitting, setIsSubmitting] = useState(false);
  // state to handle fake server error
  const [serverError, setServerError] = useState(false);
  // state to show server error alert
  const [showServerError, setServerErrorVisibility] = useState(false);
  // state to store form validity
  const [formValid, setFormValid] = useState(false);
  // state to store form error messages
  const [formErrorMessages, setFormErrorMessages] = useState<DescriptionLink[]>(
    []
  );

  // handler to set simulated server error state
  const setupServerError = (event: any) => {
    setServerError(event.target.checked);
  };

  // form validation function
  const validateForm = () => {
    const nameIsValid = validateName();
    const priceIsValid = validatePrice();
    let filesAreValid = true;
    if (images.length > 0) {
      filesAreValid = validateFileTypes(images[0]);
    }

    const fv = nameIsValid && priceIsValid && filesAreValid;

    if (!fv) {
      // if form is not valid
      // set the form error messages
      const errorMessages: DescriptionLink[] = [
        { text: "Please correct the form errors before submitting." },
      ];
      if (!nameIsValid) {
        errorMessages.push({
          text: "• Name is required.",
          link: {
            text: "Enter name",
            href: "#nameFG",
          },
        });
      }
      if (!priceIsValid) {
        errorMessages.push({
          text: "• Price is required.",
          link: {
            text: "Enter price",
            href: "#priceFG",
          },
        });
      }
      if (!filesAreValid) {
        errorMessages.push({
          text: "• File type not supported.",
          link: {
            text: "Change file",
            href: "#fileFG",
          },
        });
      }

      setFormErrorMessages(errorMessages);
    } else {
      // if form is valid
      // clear form error messages
      setFormErrorMessages([]);
    }

    // set form validity state
    setFormValid(fv);

    // return form validity
    return fv;
  };

  // store item through service
  const storeItem = async () => {
    // let's get the store method based on the page type
    const storeMethod = isEditPage ? updateProduct : storeProduct;

    await storeMethod({
      name: name,
      sku: sku,
      categories: categories,
      stock: stock,
      price: price,
      images: images,
    });
    if (serverError) {
      // let's simulate a server error
      return false;
    } else {
      return true;
    }
  };

  // handle form submission
  const handleSubmit = async () => {
    // set server error visibiity to false
    setServerErrorVisibility(false);
    // let's set the form as submitted
    setFormSubmitted(true);
    // scroll window to top
    window.scrollTo(0, 0);

    // let's check for form validity first
    const fv = validateForm();
    if (fv) {
      // then submit the form

      // let's disable action buttons
      setIsSubmitting(true);

      // let's simulate a form submission to the server
      const stored = await storeItem();
      if (stored) {
        // let's set the form submitted state
        setFormSubmitted(false);
        // let's enable action buttons
        setIsSubmitting(false);

        // navigate to listing page and trigger alert
        if (isEditPage) {
          // if it's an edit page we stay and fire up a success alert
          return alertsManager.add({
            messages: [
              {
                text: `Your changes have been saved.`,
              },
            ],
            type: "success",
          });
        } else {
          // if it's an add page we navigate to listing page and fire up a success alert
          return navigate("/page-crud-list", {
            state: {
              alert: {
                messages: [
                  {
                    text: `Item ${name} added successfully.`,
                  },
                ],
                type: "success",
              },
            },
          });
        }
      }

      // let's enable action buttons
      setIsSubmitting(false);
    }

    // let's handle if we should show a server error
    if (serverError) {
      setServerErrorVisibility(true);
    }
  };

  // Action bar buttons with event handlers for cancel and save operations.
  const actionBarProps: ActionBarProps = {
    actions: [
      {
        text: "Save",
        onClick: handleSubmit,
        disabled: isSubmitting,
        isLoading: isSubmitting,
      },
      {
        text: "Cancel",
        onClick: backToListingHandler,
        disabled: isSubmitting,
        variant: "secondary",
      },
    ],
  };

  return (
    <Page
      header={
        <Header
          title={isEditPage ? name : "Add item"}
          description={`Description of what's going to be added.`}
          backLink={{
            text: "Back to items list",
            onClick: () => backToListingHandler(),
            href: "#",
          }}
        />
      }
      actionBar={<ActionBar {...actionBarProps} />}
    >
      <Flex
        flexDirection="column"
        flexGap={theme.spacing.xLarge}
        marginBottom="xxxLarge"
      >
        {formSubmitted && !formValid && (
          <Message type="error" messages={formErrorMessages}></Message>
        )}
        {showServerError && (
          <Message
            type="error"
            messages={[
              {
                text: "An error occurred while submitting the form. Please try again.",
              },
            ]}
          ></Message>
        )}
        <FlexItem>
          <Panel
            header="Item details"
            description="Enter the details of your item (optional)"
          >
            <Form>
              <Grid
                gridColumns={{ mobile: "100%", tablet: "414px" }}
                gridGap={theme.spacing.small}
              >
                <a id="nameFG"></a>
                <FormGroup>
                  <Input
                    id="name"
                    label="Name"
                    onChange={nameChangeHandler}
                    placeholder="Enter name"
                    type="text"
                    value={name}
                    required
                    error={nameError}
                    onBlur={validateName}
                  />
                </FormGroup>
                <FormGroup>
                  <Input
                    id="sku"
                    label="SKU"
                    onChange={skuChangeHandler}
                    placeholder="Enter SKU"
                    type="text"
                    value={sku}
                  />
                </FormGroup>
                <Box as="fieldset" border="none" margin="none" padding="none">
                  <Text
                    bold
                    marginBottom="xSmall"
                    as="legend"
                    marginHorizontal="none"
                  >
                    Categories
                  </Text>
                  <Scroller
                    border="box"
                    borderRadius="normal"
                    width={{ mobile: "100%", tablet: "415px" }}
                    height="320px"
                  >
                    {
                      // the category tree
                      productCats.length > 0 && (
                        <StatefulTree
                          nodes={productCats as any}
                          selectable="multi"
                          iconless={true}
                          onSelectionChange={handleCategoriesChange}
                          defaultSelected={initialCategories as any}
                        />
                      )
                    }
                    {
                      // let's show a loader while fetching categories
                      productCats.length === 0 && (
                        <Flex
                          alignItems="center"
                          justifyContent="center"
                          paddingVertical="xLarge"
                        >
                          <ProgressCircle size="small" />
                        </Flex>
                      )
                    }
                  </Scroller>
                </Box>
                <a id="priceFG"></a>
                <FormGroup>
                  <Input
                    id="price"
                    label="Price"
                    onChange={priceChangeHandler}
                    placeholder="Enter price"
                    type="number"
                    value={price}
                    required
                    iconLeft="$"
                    error={priceError}
                    onBlur={validatePrice}
                  />
                </FormGroup>
                <Counter
                  id="stock"
                  label="Stock"
                  min={0}
                  onCountChange={setStock}
                  value={stock}
                  required
                />
                <a id="fileFG"></a>
                <FormGroup>
                  <FileUploader
                    dropzoneConfig={{
                      label: "Drag and drop image here",
                    }}
                    files={images}
                    label="Upload image"
                    onFilesChange={fileChangeHandler}
                    required
                    validators={[
                      {
                        validator: validateFileTypes,
                        type: "file-type",
                      },
                    ]}
                    error={filesError}
                  />
                </FormGroup>
                <FormGroup>
                  <Checkbox
                    onChange={setupServerError}
                    label="Simulate server error on submission"
                    checked={serverError}
                  ></Checkbox>
                </FormGroup>
              </Grid>
            </Form>
          </Panel>
        </FlexItem>
      </Flex>
    </Page>
  );
};

export default CRUDAddEditPage;
