import React, { FunctionComponent } from "react";
import { Flex, FlexItem, Panel, Button } from "@bigcommerce/big-design";
import { Header, Page } from "@bigcommerce/big-design-patterns";
import { useNavigate } from "react-router";
import { theme } from "@bigcommerce/big-design-theme";
import { PanelContents } from "../../../../patterns/src/components/PanelContents/PanelContents";
import {
  StatelessTable,
  Tbody,
  Thead,
  Td,
  Th,
  Tr,
} from "../../../../patterns/src/components/StatelessTable/StatelessTable";
import { CardGrid } from "bigcommerce-design-patterns";

const PagePanelContents: FunctionComponent = () => {
  const navigate = useNavigate();
  const [rows, setRows] = React.useState(10);
  const [cells, setCells] = React.useState(7);

  return (
    <Page
      header={
        <Header
          title="PanelContents"
          description="A component to handle the contents of a panel, allowing for padding and scrollable content."
          backLink={{
            text: "Back to patterns",
            onClick: () => navigate("/"),
            href: "#",
          }}
        ></Header>
      }
    >
      <Flex flexDirection="column" flexGap={theme.spacing.xLarge}>
        <FlexItem>
          <Panel
            header="Padded contents"
            marginBottom={"xxLarge"}
            description="Panels by default are padded and they hug the contetns within"
          >
            <PanelContents padded={true}>
              <CardGrid
                items={[
                  {
                    heading: "Helpful resource one",
                    description:
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. ",
                    href: "https://developer.bigcommerce.com",
                  },
                  {
                    heading: "Helpful resource two",
                    description:
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. ",
                    href: "https://developer.bigcommerce.com",
                  },
                  {
                    heading: "Helpful resource three",
                    description:
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. ",
                    href: "https://developer.bigcommerce.com",
                  },
                ]}
              />
            </PanelContents>
          </Panel>
          <Panel
            header="Unpadded contents"
            marginBottom={"xxLarge"}
            description="When nesting elements inside a panel there's the possibility to avoid the padding so that components such as teh table, that have padding of their own, can be displayed without the extra padding."
          >
            <PanelContents padded={false}>
              <StatelessTable>
                <Thead>
                  <Tr>
                    {Array.from({ length: cells }).map((_, index) => (
                      <Th scope="col" key={index}>
                        Column {index + 1}
                      </Th>
                    ))}
                  </Tr>
                </Thead>
                <Tbody>
                  {
                    // let's create the cells with the contents enumerating "Row X Cell Y"
                    Array.from({ length: rows }).map((_, rowIndex) => (
                      <Tr key={rowIndex}>
                        {Array.from({ length: cells }).map((_, cellIndex) => (
                          <Td
                            key={cellIndex}
                            data-label={`Column ${cellIndex + 1}`}
                          >
                            Row {rowIndex + 1} Cell {cellIndex + 1}
                          </Td>
                        ))}
                      </Tr>
                    ))
                  }
                </Tbody>
              </StatelessTable>
            </PanelContents>
          </Panel>

          <Panel
            header="Scrollable contents"
            marginBottom={"xxLarge"}
            description="Scrollable contents are useful when the content is too long to fit in the panel. The scrollable prop will add a scrollbar to the panel contents."
          >
            <PanelContents padded={true} scrollable={true} height="50vh">
              <div id="lipsum">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                  pharetra maximus porttitor. Sed consectetur elit elit, ut
                  finibus enim accumsan vel. Vivamus blandit consectetur eros,
                  eu lobortis ligula. Aenean luctus nec orci sed malesuada.
                  Maecenas magna nisl, pulvinar in risus eget, vestibulum
                  aliquam quam. Phasellus accumsan at lectus a aliquet. Quisque
                  in lobortis augue. Ut arcu sem, consectetur at velit in,
                  tempus cursus metus. Cras sit amet sem sapien. Praesent non
                  suscipit felis. Nunc a quam vel sapien condimentum tempor.
                  Pellentesque habitant morbi tristique senectus et netus et
                  malesuada fames ac turpis egestas.
                </p>
                <p>
                  Nullam eleifend pellentesque tellus at aliquet. Donec mattis
                  risus a dui dapibus, at viverra nunc placerat. Proin mattis ex
                  eget luctus aliquet. Cras quis tortor justo. Quisque pulvinar
                  mauris sed accumsan posuere. Maecenas eget lorem non est
                  euismod varius quis in diam. Phasellus vestibulum eu arcu ut
                  faucibus. Duis lobortis consectetur nisl, vel feugiat enim
                  cursus non.
                </p>
                <p>
                  Nulla placerat interdum justo. Donec at elementum lorem. Cras
                  vitae euismod nulla. Duis interdum aliquam mi sed vehicula.
                  Sed sit amet leo porttitor, porta orci ut, molestie tortor.
                  Morbi ante mi, imperdiet sed felis ac, laoreet maximus turpis.
                  Cras in accumsan erat. Vivamus ut sapien vel lacus lobortis
                  eleifend. Aliquam lectus diam, elementum vitae elit id,
                  fringilla sollicitudin justo. Integer quam velit, porta quis
                  dolor nec, dapibus consequat massa. Etiam ac mi in metus
                  molestie ornare at et augue. Etiam non ex mi. In lacinia
                  finibus dictum. Praesent malesuada, nulla a posuere
                  pellentesque, ex nisi tempor orci, vitae mollis odio mi non
                  sem. Quisque hendrerit arcu erat. Mauris consectetur suscipit
                  semper.
                </p>
                <p>
                  Vivamus felis mauris, tristique sit amet malesuada non,
                  consequat scelerisque lectus. Vivamus massa justo, rhoncus
                  porta risus sed, sodales convallis urna. Phasellus hendrerit
                  nisi vel imperdiet pharetra. Phasellus eget tincidunt nulla.
                  Nam ut faucibus nibh, eu porta eros. Aliquam nunc arcu,
                  convallis sollicitudin eleifend vitae, bibendum volutpat sem.
                  Vestibulum semper ornare ligula et interdum. Aliquam dignissim
                  est viverra auctor hendrerit. Cras et est nec eros finibus
                  eleifend et ac metus. Aenean gravida orci lacus, quis vehicula
                  nibh iaculis finibus. Nullam feugiat dignissim consequat. Nunc
                  quam augue, sollicitudin eget venenatis vel, placerat vitae
                  mi.
                </p>
                <p>
                  Aenean maximus blandit mi. Donec libero nulla, eleifend at
                  suscipit sit amet, scelerisque id tortor. Orci varius natoque
                  penatibus et magnis dis parturient montes, nascetur ridiculus
                  mus. Class aptent taciti sociosqu ad litora torquent per
                  conubia nostra, per inceptos himenaeos. Quisque cursus dui
                  vitae elit vulputate dictum. Aliquam in nulla ut nibh suscipit
                  auctor. Phasellus et cursus leo, at egestas lectus. Phasellus
                  placerat viverra ligula. Mauris nisi ligula, iaculis eleifend
                  sodales et, bibendum eget elit. Aenean placerat aliquam
                  scelerisque. Aliquam justo erat, posuere at lectus in, euismod
                  hendrerit ante. Proin et eros eu arcu suscipit ultricies. Nam
                  suscipit ante ut tortor luctus malesuada. Nunc porttitor eu
                  leo sed interdum.
                </p>
              </div>
            </PanelContents>
          </Panel>
        </FlexItem>
      </Flex>
    </Page>
  );
};

export default PagePanelContents;
