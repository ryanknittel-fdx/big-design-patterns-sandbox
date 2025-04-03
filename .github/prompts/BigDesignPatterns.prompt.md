You are an expert in React that focuses on using BigDesign, BigCommerce's design library. 

Always make sure you import the right library from npm, as detailed below, based on the component you are using.

## I. `bigcommerce-design-patterns` Components

The `bigcommerce-design-patterns` npm package provides higher-level components built using the foundational components from `@bigcommerce/big-design` and `@bigcommerce/big-design-patterns`. They aim to provide a consistent experience across BigCommerce admin applications.

*   **ActionBar:**
    *   **Description:** A component for displaying actions related to a specific context.
    *   **Use Case:** Displaying actions at the top of a page, within a card, or in a modal.
    *   **Props:**
        *   `children`: `ReactNode` - Content to be rendered inside the action bar.
*   **AdvancedPanel:**
    *   **Description:** A panel component with advanced features such as filtering and sorting.
    *   **Use Case:** Displaying a panel with advanced features.
    *   **Props:**
        *   `headerTitle`: `string` - Title to be displayed in the header.
        *   `headerBackButtonLabel`: `string` - Label for the back button in the header.
        *   `onHeaderBackButtonClick`: `() => void` - Callback function for back button click.
        *   `headerCTAs`: `ReactNode` - Call-to-action elements in the header.
        *   `panelDescription`: `ReactNode` - Description content for the panel.
        *   `contentsPadding`: `boolean` - Determines if the panel contents should have padding (default: true).
        *   `children`: `ReactNode` - Content to be rendered inside the panel.
        *   `headerIcon`: `ReactNode` - Icon to be displayed next to the header title.
        *   `headerBadge`: `BadgeProps` - Badge component props to be displayed next to the title.
*   **AnchorNav:**
    *   **Description:** A component for displaying a navigation menu with anchor links.
    *   **Use Case:** Displaying a navigation menu with anchor links.
    *   **Props:**
        *   `elements`: `Array<{ id: string; label: string; element: ReactNode; }>` - An array of objects, where each object contains the `id` (string), `label` (string), and `element` (ReactNode) for each anchor link.
*   **CardGrid:**
    *   **Description:** A component for displaying a grid of cards.
    *   **Use Case:** Displaying a grid of cards.
    *   **Props:**
        *   `items`: `CardGridItemProps[]` - Array of items to be rendered within the grid.
            *   **CardGridItemProps:**
                | Prop Name | Type | Default | Description | Required |
                |-----------|------|---------|-------------|----------|
                | `button` | `CardGridButtonProps` | - | Button props for the card grid item. | No |
                | `heading` | `React.ReactNode` | - | Heading content for the card grid item. | No |
                | `description` | `string` | - | Description content for the card grid item. | No |
                | `format` | `'action' \| 'content'` | `'content'` | Defines the format of the card grid item, either 'action' or 'content'. | No |
                | `href` | `string` | - | URL to navigate to when the item is clicked. | No |
                | `hrefTarget` | `string` | `'_self'` | Target attribute for the link. | No |
                | `onClick` | `() => void` | - | Function to call when the item is clicked. | No |
                | `icon` | `React.ReactNode` | - | Icon displayed in the card grid item. | No |
        *   `format`: `"content" | "action"` - Format of all grid items, either 'content' or 'action'.
        *   `shadow`: `"raised"` - Shadow to be applied.
        *   `gridColumns`: `GridProps["gridColumns"]` - Column template (e.g., "repeat(3, 1fr)")
        *   `gridGap`: `GridProps["gridGap"]` - Size of gaps between grid items

**Example Usage:**

```jsx
<CardGrid
  items={[
    {
      heading: 'Card 1',
      description: 'Description for card 1',
      href: 'https://example.com',
    },
    {
      heading: 'Card 2',
      description: 'Description for card 2',
      href: 'https://example.com',
    },
  ]}
/>
```

*   **ContextSelector:**
    *   **Description:** A component for selecting a context.
    *   **Use Case:** Displaying a context selector.
    *   **Props:**
        *   `children`: `ReactNode` - Content to be rendered inside the context selector.
*   **FeatureTag:**
    *   **Description:** A component for displaying a feature tag.
    *   **Use Case:** Displaying a feature tag.
    *   **Props:**
        *   `label`: `string` - The text label displayed next to the icon in the tag.
        *   `icon`: `ReactElement<IconProps>` - The icon displayed within the tag.
        *   `isActive`: `boolean` - Indicates whether the feature tag is currently active.
*   **Hero:**
    *   **Description:** A component for displaying a hero section.
    *   **Use Case:** Displaying a hero section.
    *   **Props:**
        *   `children`: `ReactNode` - Content to be rendered inside the hero section.
*   **InfoIllustration:**
    *   **Description:** A component for displaying an info illustration.
    *   **Use Case:** Displaying an info illustration.
    *   **Props:**
        *   `children`: `ReactNode` - Content to be rendered inside the info illustration.
*   **InstallScreen:**
    *   **Description:** A component for displaying an install screen.
    *   **Use Case:** Displaying an install screen.
     *   **Props:**
        *   `onBackButtonClick`: `() => void` - Callback function for back button click.
        *   `onInstallButtonClick`: `() => void` - Callback function for install button click.
        *   `customForm`: `ReactNode` - Custom form to be rendered.
        *   `app`: `AppType` - App information.
        *   `copy`: `InstallationCopy` - Copy for the installation panel.
*   **Scroller:**
    *   **Description:** A component for displaying a scroller.
    *   **Use Case:** Displaying a scroller.
     *   **Props:**
        *   `width`: `GridProps["gridColumns"]` -  The width of the scroller.
        *   `height`: `GridProps["gridRows"]` - The height of the scroller.
        *   `children`: `ReactNode` - Content to be rendered inside the scroller.
*   **DashboardLayout:**
    *   **Description:** A component for displaying a dashboard layout.
    *   **Use Case:** Displaying a dashboard layout.
    *   **Props:**
        *   `aside`: `ReactNode` - Content to be rendered in the aside section.
        *   `header`: `ReactNode` - Content to be rendered in the header section.
        *   `message`: `MessageProps` - Message to be displayed.
        *   `background`: `Background` - Background properties.
        *   `children`: `ReactNode` - Content to be rendered in the main content area.

**Example Usage:**

```jsx
<DashboardLayout
  aside={<div>Aside Content</div>}
  header={<div>Header Content</div>}
>
  <div>Main Content</div>
</DashboardLayout>
```

## II. `@bigcommerce/big-design` Components

The `@bigcommerce/big-design` npm package is a foundational component library that provides a wide range of UI elements. These components are designed to be reusable and customizable, forming the building blocks for creating consistent user interfaces. For a comprehensive list and documentation, refer to the [BigDesign documentation](https://developer.bigcommerce.com/big-design/).

*   **Accordion**
*   **Action Group**
*   **Alert**
*   **Avatar**
*   **Badge**
*   **Box**
*   **Breadcrumbs**
*   **Button**
*   **Card**
*   **Checkbox**
*   **Container**
*   **Datepicker**
*   **Date Range Picker**
*   **Divider**
*   **Dropdown**
*   **Empty State**
*   **Form**
*   **Heading**
*   **HelpText**
*   **Icons**
*   **Image**
*   **Input**
*   **Link**
*   **List**
*   **Loading Overlay**
*   **Modal**
*   **Pagination**
*   **Panel**
*   **Paragraph**
*   **Popover**
*   **Progress Bar**
*   **Radio**
*   **Select**
*   **Skeleton**
*   **Spinner**
*   **Switch**
*   **Table**
*   **Tabs**
*   **Text**
*   **Textarea**
*   **Tooltip**
*   **Toast**

## III. Key Differences

*   `bigcommerce-design-patterns` offers higher-level, domain-specific components tailored for e-commerce use cases. They are built *using* the components from `@bigcommerce/big-design`.
*   `@bigcommerce/big-design` provides a comprehensive set of low-level, general-purpose UI components.
*   When building new features, consider whether a suitable component already exists in `bigcommerce-design-patterns`. If not, leverage the components from `@bigcommerce/big-design` to create a custom solution.

## IV. `@bigcommerce/big-design-patterns` Components

*   **Page:**
    *   **Description:** A layout component for displaying a page with header, content, and optional action bar.
    *   **Use Case:** Creating consistent page layouts across applications.
    *   **Props:**
        *   `header`: `ReactNode` - Content to be rendered in the header section (should be a `Header` component).
        *   `message`: `MessageProps` - Message to be displayed below the header.
        *   `background`: `Background` - Background properties for the page.
            *   `src`: `string` - Image source URL.
            *   `backgroundSize`: `CSSProperties['backgroundSize']` - Background size (default: 'contain').
            *   `backgroundPosition`: `CSSProperties['backgroundPosition']` - Background position (default: 'top right').
            *   `backgroundRepeat`: `CSSProperties['backgroundRepeat']` - Background repeat (default: 'no-repeat').
        *   `actionBar`: `ReactNode` - Action bar to display at the bottom of the page (should be an `ActionBar` component).
        *   `children`: `ReactNode` - Content to be rendered in the main section of the page.

*   **Header:**
    *   **Description:** A component for displaying the top section of a page with title, description, and actions.
    *   **Use Case:** Creating consistent page headers across applications.
    *   **Props:**
        *   `title`: `string` - Title text to display.
        *   `actions`: `Array<ActionButtonProps | ActionDropdownProps>` - Actions to display in the header (max 3).
        *   `backLink`: `{ text: string; href: string; }` - Back link properties.
        *   `badge`: `BadgeProps` - Badge to display next to the title.
        *   `description`: `string | ReactNode` - Description to display under the title.
        *   `icon`: `ReactNode` - Icon to display next to the title.

*   **ActionBar:**
    *   **Description:** A sticky bar component for displaying actions at the bottom of a page.
    *   **Use Case:** Displaying primary and secondary actions that affect the current page.
    *   **Props:**
        *   `actions`: `Array<{ text: string; } & Omit<ButtonProps, 'children' | 'mobileWidth'>>` - Array of button actions (max 3).

**Example Usage:**

```jsx
import { Page, Header, ActionBar } from '@bigcommerce/big-design-patterns';

const MyPage = () => (
  <Page
    header={
      <Header
        title="Products"
        description="Manage your products"
        backLink={{ text: "Back to Dashboard", href: "/" }}
        actions={[
          { text: "Add Product", variant: "primary", onClick: handleAdd },
          { text: "Import", variant: "secondary", onClick: handleImport },
        ]}
      />
    }
    actionBar={
      <ActionBar
        actions={[
          { text: "Save Changes", variant: "primary", onClick: handleSave },
          { text: "Cancel", variant: "subtle", onClick: handleCancel },
        ]}
      />
    }
  >
    <div>Page Content</div>
  </Page>
);
```

## V. List Page Example

The List Page is a common pattern in e-commerce applications, used to display collections of items that users can browse, filter, and take actions on. This example demonstrates how to build a comprehensive list page using BigDesign components and patterns.

**Key Components Used:**
- `Page` and `Header` from `@bigcommerce/big-design-patterns`
- `ContextSelector` from `bigcommerce-design-patterns`
- `Panel`, `Table`, `Message`, and other UI components from `@bigcommerce/big-design`

**Example Usage:**

```jsx
import React, { FunctionComponent, useState } from "react";
import {
  Flex,
  FlexItem,
  Button,
  Select,
  Message,
  Panel,
  Table,
  TableItem,
  Text,
  Dropdown,
} from "@bigcommerce/big-design";
import { ContextSelector } from "bigcommerce-design-patterns";
import { Header, Page } from "@bigcommerce/big-design-patterns";
import {
  AddIcon,
  SettingsIcon,
  MoreHorizIcon,
} from "@bigcommerce/big-design-icons";

// Define the data structure
interface Item extends TableItem {
  sku: string;
  name: string;
  stock: number;
  image: string;
  categories: string;
  price: string;
}

// Sample data
const data: Item[] = [
  {
    sku: "649C853EC78E9",
    image: "product-image-1.jpg",
    name: "US H1 2023 Hackathon T-Shirt",
    categories: "Shirts, Shop all",
    stock: 10,
    price: "$27.00",
  },
  // Additional items...
];

// Define table columns
const columns = [
  {
    header: "Name",
    hash: "name",
    render: ({ name, image }) => (
      <Flex alignItems="center">
        <img src={image} alt={name} style={{ width: 47, marginRight: 8 }} />
        <Text>{name}</Text>
      </Flex>
    ),
  },
  { header: "Sku", hash: "sku", render: ({ sku }) => sku },
  {
    header: "Categories",
    hash: "categories",
    render: ({ categories }) => categories,
  },
  {
    header: "Stock",
    hash: "stock",
    render: ({ stock }) => stock,
  },
  {
    header: "Price",
    hash: "price",
    render: ({ price }) => price,
  },
  {
    header: "",
    hash: "actions",
    render: () => (
      <Dropdown
        items={[
          { content: "Edit", onItemClick: (item) => item, hash: "edit" },
          { content: "Duplicate", onItemClick: (item) => item, hash: "duplicate" },
          { content: "Delete", onItemClick: (item) => item, hash: "delete", actionType: "destructive" },
        ]}
        toggle={<Button variant="utility" iconOnly={<MoreHorizIcon />}></Button>}
      />
    ),
  },
];

const PageList: FunctionComponent = () => {
  const [contextValue, setContextValue] = useState("mx");
  const [selectedItems, setSelectedItems] = useState<Item[]>([]);

  return (
    <Page
      header={
        <Header
          actions={[
            {
              text: "Add Item",
              iconLeft: <AddIcon />,
              onClick: () => window.alert("Add item clicked"),
              mobileWidth: "100%",
            },
          ]}
          description="List pages are the bread and butter of an application, where you present a number of items to act upon."
          title="List Page"
          backLink={{
            text: "Back to patterns",
            onClick: () => console.log("Back clicked"),
            href: "#",
          }}
        />
      }
    >
      <Flex flexDirection="column">
        {/* Context Selector for switching between different views */}
        <FlexItem>
          <ContextSelector>
            <Flex justifyContent="space-between">
              <Select
                onOptionChange={(val) => setContextValue(val)}
                options={[
                  { value: "one", content: "Context 1" },
                  { value: "two", content: "Context 2" },
                  { value: "three", content: "Context 3" },
                ]}
                value={contextValue}
              />
              <Button
                variant="subtle"
                iconLeft={<SettingsIcon />}
                onClick={() => window.alert("Context tools clicked")}
              >
                Context tools
              </Button>
            </Flex>
          </ContextSelector>
        </FlexItem>
        
        {/* Messages to display information to the user */}
        <FlexItem>
          <Message
            type="info"
            header="Optional header"
            messages={[
              {
                text: "Required description copy.",
                link: {
                  text: "Optional Link",
                  href: "#",
                },
              },
            ]}
          />
        </FlexItem>
        
        {/* Panel containing the table of items */}
        <FlexItem>
          <Panel
            header="Items list"
            description="Common actions you'll create within a page"
          >
            <Table
              columns={columns}
              itemName="Products"
              items={data}
              keyField="sku"
              selectable={{
                selectedItems,
                onSelectionChange: setSelectedItems,
              }}
            />
          </Panel>
        </FlexItem>
      </Flex>
    </Page>
  );
};
```

This example demonstrates a typical list page pattern with:
1. A header with page title, description, and primary actions
2. A context selector for switching between different data contexts
3. Informational messages to guide users
4. A table of items with custom rendering for different data types
5. Item actions via dropdown menus
6. Selection functionality for performing bulk actions

## VI. Anchor Navigation Example

The Anchor Navigation pattern is used when a page contains multiple sections that users might want to quickly navigate between. This pattern is especially useful for long-form content or complex pages where users need to jump to specific sections without scrolling.

**Key Components Used:**
- `Page` and `Header` from `@bigcommerce/big-design-patterns`
- `AnchorNav` from `bigcommerce-design-patterns`
- `Panel`, `Text`, and `Box` components from `@bigcommerce/big-design`

**Example Usage:**

```jsx
import React, { FunctionComponent } from "react";
import { Panel, Text, Box } from "@bigcommerce/big-design";
import { AnchorNav } from "bigcommerce-design-patterns";
import { useNavigate } from "react-router";
import { Header, Page } from "@bigcommerce/big-design-patterns";

const AnchorNavExample: FunctionComponent = () => {
  const navigate = useNavigate();

  return (
    <Page
      header={
        <Header
          description="When a page has a lot of content, it can be helpful to provide an anchor navigation to help users quickly jump to specific sections."
          title="Anchor Navigation Example"
          backLink={{
            text: "Back",
            onClick: () => navigate("/"),
            href: "#",
          }}
        />
      }
    >
      <AnchorNav
        elements={[
          {
            label: "First Section",
            element: (
              <Panel header="First Section">
                <Box>
                  <Text>
                    Content for the first section goes here. The AnchorNav component
                    will automatically create navigation links to each section and
                    handle smooth scrolling when those links are clicked.
                  </Text>
                </Box>
              </Panel>
            ),
            id: "first-section",
          },
          {
            label: "Second Section",
            element: (
              <Panel header="Second Section">
                <Box>
                  <Text>
                    Content for the second section goes here. Each section should have
                    a unique ID that will be used for the anchor navigation.
                  </Text>
                </Box>
              </Panel>
            ),
            id: "second-section",
          },
          // Additional sections as needed...
        ]}
      />
    </Page>
  );
};
```

The `AnchorNav` component takes an array of elements, each with:
- `label`: The text shown in the navigation sidebar
- `element`: The React component to render for that section
- `id`: A unique identifier used for the anchor link

The component automatically creates a sticky sidebar with links to each section and handles scroll positioning when those links are clicked. This pattern helps users navigate through long or complex pages efficiently.

## VII. Card Grid Example

The Card Grid pattern provides an organized way to display resources or actions in a visually appealing grid layout. This pattern is commonly used for showcasing related content, features, resources, or action items that users can interact with.

**Key Components Used:**
- `Page` and `Header` from `@bigcommerce/big-design-patterns`
- `CardGrid` from `bigcommerce-design-patterns`
- `Panel`, `H4`, and other UI components from `@bigcommerce/big-design`

**Example Usage:**

```jsx
import React, { FunctionComponent } from "react";
import { H4 } from "@bigcommerce/big-design";
import { CardGrid, AdvancedPanel as Panel } from "bigcommerce-design-patterns";
import { Header, Page } from "@bigcommerce/big-design-patterns";
import { useNavigate } from "react-router";
import { theme } from "@bigcommerce/big-design-theme";

const CardGridExample: FunctionComponent = () => {
  const navigate = useNavigate();

  return (
    <Page
      header={
        <Header
          title="Card Grids"
          description="Card grids are used to showcase relevant resources or actions in a condensed, organized manner."
          backLink={{
            text: "Back",
            onClick: () => navigate("/"),
            href: "#",
          }}
        />
      }
    >
      {/* Content Format Example */}
      <Panel headerTitle="Content Cards">
        <CardGrid
          items={[
            {
              heading: <H4>Documentation</H4>,
              description: "Access developer documentation and API references.",
              href: "https://developer.example.com",
            },
            {
              heading: <H4>Support Resources</H4>,
              description: "Find help articles and contact support teams.",
              href: "https://support.example.com",
            },
          ]}
        />
      </Panel>

      {/* Action Format Example */}
      <Panel headerTitle="Action Cards">
        <CardGrid
          format="action"
          items={[
            {
              heading: <H4>Connect App</H4>,
              description: "Integrate with third-party services and extend functionality.",
              button: {
                text: "Connect",
                onClick: () => console.log("Connect clicked"),
              },
              icon: (
                <img
                  src="https://example.com/app-icon.svg"
                  height="45"
                  width="45"
                  alt="App Icon"
                />
              ),
            },
            {
              heading: <H4>Analytics Dashboard</H4>,
              description: "View performance metrics and business insights.",
              button: {
                text: "View",
                onClick: () => console.log("View clicked"),
              },
              icon: (
                <img
                  src="https://example.com/analytics-icon.svg"
                  height="45"
                  width="45"
                  alt="Analytics Icon"
                />
              ),
            },
          ]}
        />
      </Panel>

      {/* Skeleton Example */}
      <Panel headerTitle="Loading State">
        <CardGrid />
      </Panel>
    </Page>
  );
};
```

The `CardGrid` component supports two main formats:

1. **Content format** (default): Used for informational resources that link to other pages
   - Each card typically includes a heading, description, and href for navigation

2. **Action format**: Used for interactive elements that trigger specific actions
   - Each card typically includes a heading, description, icon, and action button

When no items are provided or during loading states, the CardGrid automatically displays skeleton cards. This pattern is ideal for dashboards, resource pages, app marketplaces, and feature overviews.

## VIII. Dashboard Layout Example

The Dashboard Layout pattern provides a structured way to organize content in admin interfaces, with a clear hierarchy between primary and secondary content. This pattern includes a main content area and an optional aside section that adapts responsively between desktop and mobile views.

**Key Components Used:**
- `DashboardLayout` from `bigcommerce-design-patterns`
- `Header` from `@bigcommerce/big-design-patterns`
- `Panel` and `Text` components from `@bigcommerce/big-design`

**Example Usage:**

```jsx
import React from "react";
import { DashboardLayout } from "bigcommerce-design-patterns";
import { Panel, Text } from "@bigcommerce/big-design";
import { Header } from "@bigcommerce/big-design-patterns";

const DashboardExample = () => {
  const asideContent = (
    <>
      <Panel header="Aside Panel">
        <Text>
          This is the aside content that will appear on the right in desktop
          view and below the main content in mobile view.
        </Text>
      </Panel>
      <Panel header="Aside Panel">
        <Text>
          This is the aside content that will appear on the right in desktop
          view and below the main content in mobile view.
        </Text>
      </Panel>
    </>
  );

  return (
    <DashboardLayout
      aside={asideContent}
      header={
        <Header description="Page description (optional)" title="Dashboard" />
      }
    >
      <Panel header="Main contents">
        <Text>
          Main content appears here. This is the primary focus area of your dashboard.
          This area can contain multiple panels, tables, charts, or any other content.
        </Text>
        <Text>
          The layout automatically handles responsive behavior, ensuring proper
          content organization across different screen sizes and devices.
        </Text>
      </Panel>
      <Panel header="Secondary contents">
        <Text>
          You can include multiple panels in the main content area to organize
          different sections of information. The DashboardLayout helps maintain
          consistent spacing and alignment between these elements.
        </Text>
      </Panel>
    </DashboardLayout>
  );
};
```

The `DashboardLayout` component provides:

1. **Structured content organization** - Clear separation between main content and supplementary information
2. **Responsive design** - Aside content appears on the right in desktop views and below main content in mobile views
3. **Consistent styling** - Maintains proper spacing and alignment across all elements

This pattern is ideal for admin dashboards, overview pages, reporting interfaces, and any view where you need to display primary content alongside supplementary information or controls.

## IX. Form Page Example

The Form Page pattern provides a structured way to collect user input with validation and feedback mechanisms. This pattern is commonly used for data entry, settings configuration, and other scenarios where user input is required.

**Key Components Used:**
- `Page` and `Header` from `@bigcommerce/big-design-patterns`
- `ActionBar` from `@bigcommerce/big-design-patterns`
- `Form`, `FormGroup`, `Input`, `Textarea`, `Checkbox`, and other form components from `@bigcommerce/big-design`
- `Message` component for validation feedback
- `Panel` for organizing form sections

**Example Usage:**

```jsx
import React, { FunctionComponent, useState } from "react";
import {
  AlertProps,
  Flex,
  FlexItem,
  Panel,
  Form,
  FormGroup,
  Input,
  Textarea,
  Message,
  Checkbox,
} from "@bigcommerce/big-design";
import { Header, Page, ActionBar } from "@bigcommerce/big-design-patterns";
import { useNavigate } from "react-router";
import { theme } from "@bigcommerce/big-design-theme";

const FormPageExample: FunctionComponent = () => {
  const navigate = useNavigate();
  
  // Form state management
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    email: "",
    emailConfirm: "",
    description: "",
  });
  
  // Validation states
  const [emailValid, setEmailValid] = useState(true);
  const [emailConfirmationValid, setEmailConfirmationValid] = useState(true);
  const [formValid, setFormValid] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Error handling states
  const [serverError, setServerError] = useState(false);
  const [showServerError, setServerErrorVisibility] = useState(false);
  
  // Email validation regex
  const EMAIL_REGEX = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  
  // Input change handler
  const handleInputChange = (event) => {
    const { id, value } = event.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };
  
  // Email validation
  const validateEmail = () => {
    const emailValid = EMAIL_REGEX.test(formData.email);
    setEmailValid(emailValid);
    setFormSubmitted(false);
    return emailValid;
  };
  
  // Email confirmation validation
  const validateEmailConfirmation = () => {
    const emailConfirmationValid = formData.email === formData.emailConfirm;
    setEmailConfirmationValid(emailConfirmationValid);
    setFormSubmitted(false);
    return emailConfirmationValid;
  };
  
  // Form validation
  const validateForm = () => {
    const emailValid = validateEmail();
    const emailConfirmationValid = validateEmailConfirmation();
    
    const formValid = emailValid && emailConfirmationValid;
    setFormValid(formValid);
    return formValid;
  };
  
  // Form submission handler
  const handleSubmit = () => {
    setServerErrorVisibility(false);
    setFormSubmitted(true);
    window.scrollTo(0, 0);
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      // Simulate API request
      setTimeout(() => {
        if (serverError) {
          setServerErrorVisibility(true);
        } else {
          // Reset form on success
          setFormData({
            name: "",
            lastName: "",
            email: "",
            emailConfirm: "",
            description: "",
          });
          setFormSubmitted(false);
          // Show success message
          alert("Form submitted successfully");
        }
        setIsSubmitting(false);
      }, 1000);
    }
  };

  return (
    <Page
      header={
        <Header
          title="Form Page"
          description="Structured data collection with validation"
          backLink={{
            text: "Back",
            onClick: () => navigate("/"),
            href: "#",
          }}
        />
      }
      actionBar={
        <ActionBar
          actions={[
            {
              variant: "secondary",
              onClick: () => navigate("/"),
              disabled: isSubmitting,
              text: "Cancel",
            },
            {
              variant: "primary",
              onClick: handleSubmit,
              disabled: isSubmitting,
              text: "Save",
            },
          ]}
        />
      }
    >
      <Flex flexDirection="column" flexGap={theme.spacing.xLarge}>
        {/* Form validation messages */}
        {formSubmitted && !formValid && (
          <Message
            type="error"
            messages={[
              {
                text: "Please correct the form errors before submitting.",
              },
            ]}
          />
        )}
        
        {showServerError && (
          <Message
            type="error"
            messages={[
              {
                text: "An error occurred while submitting the form. Please try again.",
              },
            ]}
          />
        )}
        
        {/* Form panel */}
        <FlexItem>
          <Panel
            header="Form Example"
            description="Fill out the information below"
          >
            <Form fullWidth>
              {/* Personal information */}
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
              
              {/* Email with validation */}
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
              
              {/* Additional information */}
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
              
              {/* Testing controls */}
              <FormGroup>
                <Checkbox
                  onChange={(e) => setServerError(e.target.checked)}
                  label="Simulate server error on submission"
                  checked={serverError}
                />
              </FormGroup>
            </Form>
          </Panel>
        </FlexItem>
      </Flex>
    </Page>
  );
};
```

The Form Page pattern demonstrates:

1. **Structured data collection** - Organized form fields grouped logically
2. **Input validation** - Real-time validation with helpful error messages
3. **Feedback mechanisms** - Clear messaging for form errors and submission status
4. **Submission handling** - Processing states and response handling
5. **Responsive actions** - Sticky action bar with primary/secondary actions

This pattern is ideal for user registration, profile editing, settings configuration, content creation, and any scenario requiring structured data input with validation.

## X. InfoIllustration Example

The InfoIllustration component provides visual representations for various states, including empty states, success messages, warnings, and errors. This pattern helps communicate status and provide context to users through consistent, visually appealing illustrations.

**Key Components Used:**
- `InfoIllustration` from `bigcommerce-design-patterns`
- `Page` and `Header` from `@bigcommerce/big-design-patterns`
- `Flex`, `FlexItem`, and `Text` components from `@bigcommerce/big-design`

**Example Usage:**

```jsx
import React, { FunctionComponent } from "react";
import { Flex, FlexItem, Text } from "@bigcommerce/big-design";
import { InfoIllustration, AdvancedPanel as Panel } from "bigcommerce-design-patterns";
import { Header, Page } from "@bigcommerce/big-design-patterns";
import { useNavigate } from "react-router";
import { theme } from "@bigcommerce/big-design-theme";

const InfoIllustrationExample: FunctionComponent = () => {
  const navigate = useNavigate();

  return (
    <Page
      header={
        <Header
          description="Illustrations to convey status on errors and empty spaces."
          title="Info Illustrations"
          backLink={{
            text: "Back to patterns",
            onClick: () => navigate("/"),
            href: "#",
          }}
        />
      }
    >
      <Flex flexDirection="column" flexGap={theme.spacing.xLarge}>
        {/* Basic Example with Text and Actions */}
        <Panel headerTitle="Basic Example">
          <Flex justifyContent="center" alignItems="center">
            <InfoIllustration
              heading="Information heading"
              actionPrimary={{
                text: "Main CTA",
                onClick: () => console.log("Primary action clicked"),
              }}
              actionSecondary={{ 
                text: "Secondary CTA", 
                onClick: () => console.log("Secondary action clicked"),
              }}
            >
              <Text color="secondary60">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Text>
            </InfoIllustration>
          </Flex>
        </Panel>

        {/* Variants Examples */}
        <FlexItem>
          <Panel headerTitle="Illustration Variants">
            <Flex flexDirection="column" flexGap={theme.spacing.xxLarge}>
              {/* Info Variant */}
              <Flex justifyContent="center" alignItems="center">
                <InfoIllustration 
                  variant="info1" 
                  icon="info"
                  heading="Information Message" 
                />
              </Flex>

              {/* Info with Pattern */}
              <Flex justifyContent="center" alignItems="center">
                <InfoIllustration
                  variant="info2"
                  pattern="down"
                  icon="orders"
                  heading="No Orders Found"
                >
                  <Text>No orders match your current filter selection.</Text>
                </InfoIllustration>
              </Flex>

              {/* Success Variant */}
              <Flex justifyContent="center" alignItems="center">
                <InfoIllustration
                  variant="success"
                  icon="success"
                  heading="Operation Successful"
                  actionPrimary={{
                    text: "Continue",
                    onClick: () => console.log("Continue clicked"),
                  }}
                />
              </Flex>
              
              {/* Warning Variant */}
              <Flex justifyContent="center" alignItems="center">
                <InfoIllustration
                  variant="warning"
                  icon="permission"
                  heading="Permission Warning"
                >
                  <Text>You need additional permissions to access this feature.</Text>
                </InfoIllustration>
              </Flex>
              
              {/* Error Variant */}
              <Flex justifyContent="center" alignItems="center">
                <InfoIllustration
                  variant="error"
                  icon="server"
                  heading="Server Error"
                  actionPrimary={{
                    text: "Try Again",
                    onClick: () => console.log("Try again clicked"),
                  }}
                >
                  <Text>Unable to process your request. Please try again later.</Text>
                </InfoIllustration>
              </Flex>
            </Flex>
          </Panel>
        </FlexItem>
      </Flex>
    </Page>
  );
};
```

The `InfoIllustration` component supports:

1. **Multiple variants**: `info1`, `info2`, `info3`, `info4`, `success`, `warning`, and `error` styles
2. **Background patterns**: `up`, `down`, `square`, and `cross` options that complement the variants
3. **Various icons**: Including `info`, `warning`, `success`, `products`, `orders`, `categories`, and more
4. **Content customization**: Add headings, descriptive text, and call-to-action buttons

This pattern is ideal for empty states, success confirmations, error pages, permission warnings, and instructional screens where visual communication enhances the user experience.

## XI. BigDesign Icons

The `@bigcommerce/big-design-icons` npm package provides a comprehensive set of SVG icons that complement the BigDesign component library. These icons are designed to maintain visual consistency across the BigCommerce admin interface.

### Importing Icons

Icons can be imported individually to optimize bundle size:

```jsx
import { AddIcon, ArrowBackIcon, ArrowDropDownIcon } from '@bigcommerce/big-design-icons';
```

### Using Icons

Icons are React components that can be used directly in JSX:

```jsx
<AddIcon />
<Button iconLeft={<ArrowBackIcon />}>Back</Button>
<Flex alignItems="center">
  <ArrowDropDownIcon size="xLarge" />
  <Text>Dropdown Content</Text>
</Flex>
```

### Icon Props

All icons accept the following props:

- `size`: `'xSmall' | 'small' | 'medium' | 'large' | 'xLarge'` (default: `'medium'`)
- `title`: `string` - Accessibility title for the SVG
- Any valid SVG attribute (fill, stroke, etc.)

### Available Icons

The `@bigcommerce/big-design-icons` package includes the following icons:

#### Navigation Icons
- `ArrowBackIcon`
- `ArrowDownIcon`
- `ArrowDropDownIcon`
- `ArrowDropUpIcon`
- `ArrowForwardIcon`
- `ArrowLeftIcon`
- `ArrowRightIcon`
- `ArrowUpIcon`
- `CheckboxCheckedIcon`
- `CheckboxIcon`
- `CheckboxIndeterminateIcon`
- `ChevronDownIcon`
- `ChevronLeftIcon`
- `ChevronRightIcon`
- `ChevronUpIcon`
- `CloseIcon`
- `ExpandLessIcon`
- `ExpandMoreIcon`
- `FirstPageIcon`
- `LastPageIcon`
- `MoreHorizIcon`
- `MoreVertIcon`

#### Action Icons
- `AddIcon`
- `AddCircleIcon`
- `DeleteIcon`
- `EditIcon`
- `FilterIcon`
- `FilterListIcon`
- `PrintIcon`
- `RefreshIcon`
- `RemoveIcon`
- `SearchIcon`
- `SettingsIcon`
- `SortIcon`
- `VisibilityIcon`
- `VisibilityOffIcon`

#### Communication Icons
- `ChatIcon`
- `EmailIcon`
- `HelpIcon`
- `InfoIcon`
- `NotificationsIcon`
- `WarningIcon`

#### E-Commerce Icons
- `CartIcon`
- `CreditCardIcon`
- `LocalShippingIcon`
- `LoyaltyIcon`
- `MoneyIcon`
- `ProductIcon`
- `StoreIcon`
- `TagIcon`

#### UI Control Icons
- `CheckIcon`
- `CheckCircleIcon`
- `ClearIcon`
- `ErrorIcon`
- `ErrorOutlineIcon`
- `MenuIcon`
- `RadioButtonCheckedIcon`
- `RadioButtonUncheckedIcon`
- `StarIcon`
- `StarBorderIcon`
- `StarHalfIcon`

#### File & Content Icons
- `AttachFileIcon`
- `CloudUploadIcon`
- `CodeIcon`
- `ContentCopyIcon`
- `DescriptionIcon`
- `FolderIcon`
- `ImageIcon`
- `InsertDriveFileIcon`
- `PictureAsPdfIcon`

#### Social Media Icons
- `FacebookIcon`
- `InstagramIcon`
- `LinkedInIcon`
- `PinterestIcon`
- `TwitterIcon`
- `YouTubeIcon`

#### Device & Tech Icons
- `ComputerIcon`
- `DevicesIcon`
- `LaptopIcon`
- `PhoneAndroidIcon`
- `PhoneIphoneIcon`
- `TabletAndroidIcon`
- `TabletMacIcon`

#### Example with Different Sizes

```jsx
import { AddIcon } from '@bigcommerce/big-design-icons';

const IconExample = () => (
  <Flex alignItems="center" justifyContent="space-between">
    <AddIcon size="xSmall" />
    <AddIcon size="small" />
    <AddIcon size="medium" />
    <AddIcon size="large" />
    <AddIcon size="xLarge" />
  </Flex>
);
```

#### Customizing Icon Color

Icons inherit color from their parent by default, but can be styled directly:

```jsx
import { InfoIcon } from '@bigcommerce/big-design-icons';
import { theme } from '@bigcommerce/big-design-theme';

const ColoredIconExample = () => (
  <Flex alignItems="center">
    <InfoIcon color={theme.colors.primary} />
    <InfoIcon color={theme.colors.danger} />
    <InfoIcon color={theme.colors.warning} />
    <InfoIcon color={theme.colors.success} />
    <div style={{ color: theme.colors.secondary70 }}>
      <InfoIcon /> {/* Inherits secondary70 color */}
    </div>
  </Flex>
);
```
