import React, { FunctionComponent, useState, useEffect } from "react";
import { Input, Grid, Fieldset, Select } from "@bigcommerce/big-design";

import { Category } from "../../data/dummyCategories";

export interface FilterRowProps {
  /** ReactNode - Children elements or components to be rendered within the ActionBar. */
  onChange: (value) => void;
  productCats: Category[];
  index: number;
  filter: {
    field: string;
    logicalOperator: string;
    comparisonOperator: string;
    value: string | number | undefined;
  };
}

//const filterRow = (isFirst = false, onChange = () => {}) => {
export const FilterRow: FunctionComponent<FilterRowProps> = ({
  onChange,
  productCats,
  index,
  filter,
}) => {
  const elementRef = React.useRef<HTMLDivElement>(null);
  const filteringCriteria = {
    category: {
      type: "select",
      comparisonOperators: [
        {
          operator: "=",
          label: "is",
        },
        {
          operator: "!=",
          label: "is not",
        },
      ],
      options: productCats.map((cat) => ({
        value: cat.id,
        content: cat.label,
      })),
      onChange: () => {},
    },
    price: {
      type: "number",
      comparisonOperators: [
        {
          operator: "=",
          label: "is",
        },
        {
          operator: "!=",
          label: "is not",
        },
        {
          operator: ">",
          label: "greater than",
        },
        {
          operator: "<",
          label: "less than",
        },
      ],
      onChange: () => {},
    },
    stock: {
      type: "number",
      comparisonOperators: [
        {
          operator: "=",
          label: "is",
        },
        {
          operator: "!=",
          label: "is not",
        },
        {
          operator: ">",
          label: "greater than",
        },
        {
          operator: "<",
          label: "less than",
        },
      ],
    },
  };

  const baseFilter = filter.field;
  const baseComparisonOperator = filter.comparisonOperator;
  const [logicalOperator, setLogicalOperator] = useState(
    filter.logicalOperator
  );
  const [queryField, setQueryField] = useState(filter.field);
  const [comparisonOperator, setComparisonOperator] = useState(
    filter.comparisonOperator
  );

  // the query value can be either a number or a string
  const [queryValue, setQueryValue] = useState<number | string | undefined>(
    filter.value
  );

  const handleFiledChange = (field: string, value: any) => {
    const onChangeObject = {
      field: queryField,
      logicalOperator: logicalOperator,
      comparisonOperator: comparisonOperator,
      value: queryValue,
    };

    switch (field) {
      case "operator":
        setLogicalOperator(value);
        onChangeObject.logicalOperator = value;
        break;
      case "field":
        setQueryField(value);
        // setBaseFilterType(filteringCriteria[value].type);
        setComparisonOperator(
          filteringCriteria[value].comparisonOperators[0].operator
        );
        onChangeObject.field = value;
        break;
      case "operatorValue":
        setComparisonOperator(value);
        onChangeObject.comparisonOperator = value;
        break;
      case "value":
        setQueryValue(value);
        onChangeObject.value = value;
        break;
      default:
        break;
    }

    onChange(onChangeObject);
  };

  return (
    <Grid
      ref={elementRef}
      gridColumns={{
        mobile: "60px 1fr",
        tablet: "60px 1fr 120px 1fr",
      }}
      gridGap="1rem"
    >
      {index === 0 ? (
        <Input disabled value="Where" />
      ) : (
        <Select
          options={[
            { content: "And", value: "and" },
            { content: "Or", value: "or" },
          ]}
          onOptionChange={(value) => {
            handleFiledChange("operator", value);
          }}
          value={logicalOperator}
        />
      )}
      <Select
        options={Object.keys(filteringCriteria).map((dim) => {
          return {
            content: dim.charAt(0).toUpperCase() + dim.slice(1),
            value: dim,
          };
        })}
        value={queryField}
        onOptionChange={(value) => {
          handleFiledChange("field", value);
        }}
      />
      <Select
        options={
          filteringCriteria[queryField].comparisonOperators.map((op) => {
            return {
              content: op.label,
              value: op.operator,
            };
          }) || []
        }
        value={comparisonOperator}
        onOptionChange={(value) => {
          handleFiledChange("operatorValue", value);
        }}
      />
      {filteringCriteria[queryField].type === "text" ? (
        <Input
          onChange={(e) => {
            handleFiledChange("value", e.target.value);
          }}
          value={queryValue}
        />
      ) : filteringCriteria[queryField].type === "number" ? (
        <Input
          type="number"
          onChange={(e) => {
            handleFiledChange("value", e.target.value);
          }}
          value={queryValue as number}
        />
      ) : (
        <Select
          options={filteringCriteria[queryField].options}
          onOptionChange={(value) => {
            handleFiledChange("value", value);
          }}
          value={queryValue as string | number | undefined}
        />
      )}
    </Grid>
  );
};
