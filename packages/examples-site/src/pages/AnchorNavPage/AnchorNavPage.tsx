import React, { FunctionComponent } from "react";
import { Panel, Text, Box } from "@bigcommerce/big-design";
import { AnchorNav } from "bigcommerce-design-patterns";
import { useNavigate } from "react-router";
import { Header, Page } from "@bigcommerce/big-design-patterns";
import { OpenInNewIcon } from "@bigcommerce/big-design-icons";

const PageAnchorNav: FunctionComponent = () => {
  const navigate = useNavigate();

  return (
    <Page
      header={
        <Header
          description={
            <Text>
              When a page has a lot of content, it can be helpful to provide an
              anchor navigation to help users quickly{" "}
              <a
                href="https://github.com/bigcommerce/big-design-patterns-sandbox/blob/main/packages/examples-site/src/pages/AnchorNavPage/AnchorNavPage.tsx"
                target="_blank"
              >
                View source <OpenInNewIcon size="small" />
              </a>
            </Text>
          }
          title="Anchor Navigation Page"
          backLink={{
            text: "Back to patterns",
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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Maecenas sem erat, sollicitudin quis varius sed, lacinia
                    finibus sem. Pellentesque habitant morbi tristique senectus
                    et netus et malesuada fames ac turpis egestas. Duis
                    efficitur risus quis ante volutpat finibus. In varius mattis
                    orci, et volutpat erat rhoncus nec. Mauris lectus nisi,
                    pharetra eget mollis id, pulvinar in nisi. In dapibus urna
                    turpis. Proin iaculis tincidunt turpis ac viverra. Nullam
                    auctor, leo non imperdiet consectetur, purus orci posuere
                    magna, eu varius nisl magna semper arcu. In sit amet
                    scelerisque enim. In varius, libero euismod finibus congue,
                    turpis neque semper dolor, sollicitudin pellentesque ante
                    quam lobortis enim. Mauris posuere velit magna, quis aliquet
                    arcu pulvinar in.
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
                    Etiam id velit tincidunt, feugiat arcu quis, venenatis
                    magna. Fusce egestas facilisis enim sed ullamcorper. Nulla
                    condimentum at sem id aliquam. Sed ultrices, tortor et
                    tristique suscipit, est velit rhoncus ligula, eget iaculis
                    enim dolor sit amet sem. Maecenas vitae condimentum dolor,
                    et feugiat metus. Pellentesque habitant morbi tristique
                    senectus et netus et malesuada fames ac turpis egestas. In
                    cursus turpis vel metus consectetur tempor. Cras quis
                    sollicitudin sem, vitae egestas ipsum. Sed vitae augue
                    pulvinar, lobortis magna quis, rhoncus eros. Nulla accumsan
                    in ligula et fringilla. Nunc dignissim nibh at ornare
                    malesuada.
                  </Text>
                </Box>
              </Panel>
            ),
            id: "second-section",
          },
          {
            label: "Third Section",
            element: (
              <Panel header="Third Section">
                <Box>
                  <Text>
                    Nulla porttitor luctus malesuada. Pellentesque est leo,
                    placerat a risus quis, congue viverra neque. Aenean
                    venenatis et nisl eu posuere. Phasellus vitae maximus
                    sapien. Cras ac tempor neque. Fusce tristique odio eget
                    libero dignissim, nec mattis lorem volutpat. In non tortor
                    venenatis, faucibus odio at, aliquet eros. Praesent bibendum
                    lacus at ultrices vehicula. Mauris tempor mauris ligula,
                    quis efficitur risus sodales in. Aliquam vulputate euismod
                    sem non maximus. Phasellus varius tellus viverra condimentum
                    fringilla. Fusce euismod eleifend sagittis. Duis non iaculis
                    nunc. Proin ac quam malesuada, porta sapien ut, molestie
                    massa. Vivamus non sodales dolor, nec euismod massa.
                  </Text>
                </Box>
              </Panel>
            ),
            id: "third-section",
          },
          {
            label: "Fourth Section",
            element: (
              <Panel header="Fourth Section">
                <Box>
                  <Text>
                    Donec nec ligula id erat efficitur facilisis. Donec
                    venenatis, augue non fringilla tincidunt, nunc ligula
                    faucibus nisi, id efficitur enim est a felis. In hac
                    habitasse platea dictumst. Nunc ut dui a felis commodo
                    malesuada. Sed ac ligula in ligula varius commodo. Nullam
                    sodales, enim at gravida convallis, justo augue eleifend
                    nunc, eget bibendum odio arcu ac odio. Aenean nec ante
                    fringilla, varius leo sed, facilisis sapien. Cras euismod
                    massa vel dolor fringilla, nec finibus libero lacinia.
                  </Text>
                </Box>
              </Panel>
            ),
            id: "fourth-section",
          },
          {
            label: "Fifth Section",
            element: (
              <Panel header="Fifth Section">
                <Box>
                  <Text>
                    Aenean nec ante fringilla, varius leo sed, facilisis sapien.
                    Cras euismod massa vel dolor fringilla, nec finibus libero
                    lacinia. Donec nec ligula id erat efficitur facilisis. Donec
                    venenatis, augue non fringilla tincidunt, nunc ligula
                    faucibus nisi, id efficitur enim est a felis. In hac
                    habitasse platea dictumst. Nunc ut dui a felis commodo
                    malesuada. Sed ac ligula in ligula varius commodo. Nullam
                    sodales, enim at gravida convallis, justo augue eleifend
                    nunc, eget bibendum odio arcu ac odio.
                  </Text>
                </Box>
              </Panel>
            ),
            id: "fifth-section",
          },
          {
            label: "Sixth Section",
            element: (
              <Panel header="Sixth Section">
                <Box>
                  <Text>
                    Aenean nec ante fringilla, varius leo sed, facilisis sapien.
                    Cras euismod massa vel dolor fringilla, nec finibus libero
                    lacinia. Donec nec ligula id erat efficitur facilisis. Donec
                    venenatis, augue non fringilla tincidunt, nunc ligula
                    faucibus nisi, id efficitur enim est a felis. In hac
                    habitasse platea dictumst. Nunc ut dui a felis commodo
                    malesuada. Sed ac ligula in ligula varius commodo. Nullam
                    sodales, enim at gravida convallis, justo augue eleifend
                    nunc, eget bibendum odio arcu ac odio.
                  </Text>
                </Box>
              </Panel>
            ),
            id: "sixth-section",
          },
        ]}
      />
    </Page>
  );
};

export default PageAnchorNav;
