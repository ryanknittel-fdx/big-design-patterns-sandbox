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
import Page from "../../components/page/Page";
import Scroller from "../../components/scroller/Scroller";
import { useNavigate } from "react-router";
import { useLocation } from "react-router-dom";
import { theme } from "@bigcommerce/big-design-theme";

// let's import categories trhough the service instead
import { Category } from "../../data/dummyCategories";
import { getCategories, storeProduct, getProductByUrl } from "../../data/services";

import { DummyItem } from "../../data/dummyProducts";

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
  const skuParam = location.pathname.split("/").pop();
  useEffect(() => {
    if (skuParam && skuParam!=="page-crud-add") {
      // fetch item data from database
      getProductByUrl(skuParam).then((data:any) => {
        // set form data
        // data.name && setName(data.name);
        // data.sku && setSku(data.sku);
        // data.categorise && setCategories(data.categories);
        // data.stock && setStock(data.stock);
        // data.price && setPrice(data.price);
        
      });
    }
  });

  // CATEGORIES
  const [productCats, setProductCats] = useState<Category[]>([]);
  useEffect(() => {
    getCategories().then((data) => {
      setProductCats(data as Category[]);
    });
  }, []);

  // SET UP THE FORM DATA
  const [name, setName] = useState("");
  const [sku, setSku] = useState("");
  const [categories, setCategories] = useState([]);
  const [stock, setStock] = useState(0);
  const [price, setPrice] = useState(0);
  const [images, setImages] = useState<File[]>([]);
  const resetForm = () => {
    setName("");
    setSku("");
    setCategories([]);
    setStock(0);
    setPrice(0.0);
    setImages([]);
  };

  // CHANGE HANDLERS
  const nameChangeHandler = (event: any) => {
    const name = event.target.value.trim();
    if (name.length > 0) {
      setNameError("");
    }
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

  // VALIDATION

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
  const [formValid, setFormValid] = useState(false);
  const [formErrorMessages, setFormErrorMessages] = useState<DescriptionLink[]>(
    []
  );

  const validateForm = () => {
    const nameIsValid = validateName();
    const priceIsValid = validatePrice();
    let filesAreValid = true;
    if (images.length > 0) {
      filesAreValid = validateFileTypes(images[0]);
    }

    const fv = nameIsValid && priceIsValid && filesAreValid;

    if (!fv) {
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
      setFormErrorMessages([]);
    }
    setFormValid(fv);
    return fv;
  };

  // state to store if the form has been submitted
  const [formSubmitted, setFormSubmitted] = useState(false);
  // state to handle buttons disabled state
  const [isSubmitting, setIsSubmitting] = useState(false);

  // state to handle fake server error
  const [serverError, setServerError] = useState(false);
  // state to show server error alert
  const [showServerError, setServerErrorVisibility] = useState(false);

  const setupServerError = (event: any) => {
    setServerError(event.target.checked);
  };

  const storeItem = async () => {
    // store item in database
    await storeProduct({
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
        // let's reset the form
        resetForm();
        // let's reset the form submitted state
        setFormSubmitted(false);
        // let's enable action buttons
        setIsSubmitting(false);

        // navigate to listing page and trigger alert
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

      // let's enable action buttons
      setIsSubmitting(false);
    }

    // let's handle if we should show a server error
    if (serverError) {
      setServerErrorVisibility(true);
    }
  };

  // Action bar buttons with event handlers for cancel and save operations.
  const ActionBarButtons = (
    <>
      <Button
        variant="secondary"
        onClick={backToListingHandler}
        disabled={isSubmitting}
        mobileWidth="auto"
      >
        Cancel
      </Button>
      <Button
        mobileWidth="auto"
        variant="primary"
        onClick={handleSubmit}
        disabled={isSubmitting}
        isLoading={isSubmitting}
      >
        Save
      </Button>
    </>
  );

  return (
    <Page
      headerTitle="Add item"
      headerBackButtonLabel="Back to items list"
      onHeaderBackButtonClick={backToListingHandler}
      pageDescription={<>Description of what's going to be added.</>}
      actionBar={ActionBarButtons}
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
                  <Scroller border="box" borderRadius="normal" width={{mobile:"100%", tablet:"415px"}} height="320px">
                    {productCats.length > 0 && (
                      <StatefulTree
                        nodes={productCats}
                        selectable="multi"
                        iconless
                        onSelectionChange={handleCategoriesChange}
                      />
                    )}
                    {productCats.length === 0 && (
                      <Flex
                        alignItems="center"
                        justifyContent="center"
                        paddingVertical="xLarge"
                      >
                        <ProgressCircle size="small" />
                      </Flex>
                    )}
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
