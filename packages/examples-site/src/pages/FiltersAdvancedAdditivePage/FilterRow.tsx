import React, { FunctionComponent, useState, useRef } from "react";
import { Input, Grid, Select } from "@bigcommerce/big-design";
import { Category } from "../../data/dummyCategories";

export interface FilterRowProps {
  onChange: (value: any) => void;
  productCats: Category[];
  index: number;
  filter: {
    field: string;
    logicalOperator: string;
    comparisonOperator: string;
    value: string | number | undefined;
  };
}

export const FilterRow: FunctionComponent<FilterRowProps> = ({
  onChange,
  productCats,
  index,
  filter,
}) => {
  const elementRef = useRef<HTMLDivElement>(null);

  const filteringCriteria = {
    categories: {
      type: "select",
      comparisonOperators: [
        { operator: "contains", label: "has" },
        { operator: "excludes", label: "doesn't have" },
      ],
      options: productCats.map((cat) => ({ value: cat.id, content: cat.label })),
    },
    price: {
      type: "number",
      comparisonOperators: [
        { operator: "=", label: "is" },
        { operator: "!=", label: "is not" },
        { operator: ">", label: "greater than" },
        { operator: "<", label: "less than" },
      ],
    },
    stock: {
      type: "number",
      comparisonOperators: [
        { operator: "=", label: "is" },
        { operator: "!=", label: "is not" },
        { operator: ">", label: "greater than" },
        { operator: "<", label: "less than" },
      ],
    },
  };

  const [logicalOperator, setLogicalOperator] = useState(filter.logicalOperator);
  const [queryField, setQueryField] = useState(filter.field);
  const [comparisonOperator, setComparisonOperator] = useState(filter.comparisonOperator);
  const [queryValue, setQueryValue] = useState<number | string | undefined>(filter.value);

  const handleFieldChange = (field: string, value: any) => {
    const updatedFilter = {
      index,
      field: queryField,
      logicalOperator,
      comparisonOperator,
      value: queryValue,
    };

    switch (field) {
      case "operator":
        setLogicalOperator(value);
        updatedFilter.logicalOperator = value;
        break;
      case "field":
        setQueryField(value);
        setComparisonOperator(filteringCriteria[value].comparisonOperators[0].operator);
        updatedFilter.field = value;
        break;
      case "operatorValue":
        setComparisonOperator(value);
        updatedFilter.comparisonOperator = value;
        break;
      case "value":
        setQueryValue(value);
        updatedFilter.value = value;
        break;
      default:
        break;
    }

    onChange(updatedFilter);
  };

  return (
    <Grid
      ref={elementRef}
      gridColumns={{ mobile: "120px 1fr", tablet: "80px 1fr 120px 1fr" }}
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
          onOptionChange={(value) => handleFieldChange("operator", value)}
          value={logicalOperator}
        />
      )}
      <Select
        options={Object.keys(filteringCriteria).map((dim) => ({
          content: dim.charAt(0).toUpperCase() + dim.slice(1),
          value: dim,
        }))}
        value={queryField}
        onOptionChange={(value) => handleFieldChange("field", value)}
      />
      <Select
        options={filteringCriteria[queryField]?.comparisonOperators.map((op) => ({
          content: op.label,
          value: op.operator,
        }))}
        value={comparisonOperator}
        onOptionChange={(value) => handleFieldChange("operatorValue", value)}
      />
      {filteringCriteria[queryField]?.type === "text" ? (
        <Input
          onChange={(e) => handleFieldChange("value", e.target.value)}
          value={queryValue}
        />
      ) : filteringCriteria[queryField]?.type === "number" ? (
        <Input
          type="number"
          onChange={(e) => handleFieldChange("value", e.target.value)}
          value={queryValue as number}
        />
      ) : (
        <Select
          options={filteringCriteria[queryField]?.options || []}
          onOptionChange={(value) => handleFieldChange("value", value)}
          value={queryValue as string | number | undefined}
        />
      )}
    </Grid>
  );
};