import React, { FunctionComponent } from "react";
import { Panel, Text, Box } from "@bigcommerce/big-design";
import { AnchorNav } from "bigcommerce-design-patterns";
import { useNavigate } from "react-router";
import { Header, Page } from "@bigcommerce/big-design-patterns";

const PageAnchorNav: FunctionComponent = () => {
  const navigate = useNavigate();

  return (
    <Page
      header={
        <Header
          description="When a page has a lot of content, it can be helpful to provide an anchor navigation to help users quickly"
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
                <Box style={{ minHeight: "101vh" }}>
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
                  <Text>
                    Aliquam lorem sem, auctor eu dapibus eget, volutpat at diam.
                    Nunc sed justo dignissim, vulputate lacus eget, efficitur
                    massa. Pellentesque mollis nulla tincidunt massa accumsan,
                    sit amet lobortis nulla placerat. Aliquam mattis sed mi in
                    viverra. Vivamus scelerisque tristique metus, a ornare arcu
                    maximus et. Ut sodales purus est, in sagittis dolor euismod
                    eget. Ut ornare nibh sit amet suscipit dapibus. Etiam rutrum
                    lorem sit amet metus luctus, sed tempor metus suscipit. Nunc
                    ut orci ullamcorper, placerat diam a, iaculis lectus. Donec
                    pellentesque rutrum nisi quis imperdiet. Vestibulum posuere
                    dictum elit, sit amet scelerisque quam maximus vitae. Fusce
                    vel risus vitae purus ornare fermentum sed bibendum purus.
                    Duis sit amet hendrerit felis. Vivamus eu lorem in urna
                    venenatis suscipit. Ut eros est, pharetra non pretium a,
                    sollicitudin non orci.
                  </Text>
                  <Text>
                    Pellentesque nec lectus enim. Nunc ac eros ligula. Donec
                    semper ligula massa. Duis facilisis tortor eu risus interdum
                    molestie. Aliquam vel pretium turpis, in imperdiet neque. In
                    id ullamcorper erat, mollis pulvinar orci. Vivamus sit amet
                    odio tincidunt, consequat ipsum eu, blandit neque. Integer
                    euismod tristique diam et feugiat. Quisque sit amet nunc
                    quis ligula efficitur dignissim id quis libero. Etiam
                    maximus sem sit amet justo tristique mollis. Fusce tristique
                    augue arcu, nec blandit ex ultricies quis. Mauris euismod
                    auctor mi ac luctus. Nullam odio mi, bibendum ut risus
                    semper, imperdiet dignissim felis. Cras a pharetra justo, eu
                    cursus diam. Pellentesque vitae consequat nulla, viverra
                    placerat metus.
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
                <Box style={{ minHeight: "101vh" }}>
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
                  <Text>
                    Pellentesque habitant morbi tristique senectus et netus et
                    malesuada fames ac turpis egestas. Nunc pulvinar dignissim
                    neque eget ullamcorper. Quisque posuere sodales elit, id
                    faucibus nunc sodales scelerisque. Curabitur a enim
                    vehicula, accumsan enim id, auctor justo. Suspendisse
                    potenti. Etiam laoreet nulla nec dolor posuere tempus.
                    Phasellus ante dolor, condimentum non ipsum nec, lacinia
                    sagittis sapien. Sed sit amet tempor diam. Ut id malesuada
                    nibh. Vivamus sed lorem lacinia, mattis lorem lacinia,
                    rutrum elit. Vivamus lacus risus, fringilla non dui a,
                    facilisis efficitur elit. Cras arcu elit, aliquet quis
                    lobortis quis, consequat sit amet dolor. In finibus risus
                    dolor, eget molestie libero aliquam tincidunt. Donec at
                    magna lorem. Nulla facilisi. Vivamus sodales mollis
                    condimentum.
                  </Text>
                  <Text>
                    Phasellus sed erat fermentum, tristique sem eu, vulputate
                    quam. Cras dignissim consectetur facilisis. Donec et egestas
                    metus. Nullam euismod condimentum porttitor. Quisque cursus
                    neque enim, consequat suscipit lectus mattis a. Ut quis nisi
                    ac ante rhoncus viverra in in quam. Nunc placerat sapien
                    quis ornare gravida. Curabitur finibus, nulla at semper
                    molestie, massa sapien tristique lectus, et feugiat orci
                    libero quis odio. Etiam sagittis elit non luctus lacinia.
                    Integer tincidunt, nibh in eleifend vulputate, lacus sapien
                    cursus leo, in molestie sem lectus a metus. Nam dignissim,
                    lectus nec dapibus rutrum, urna ligula suscipit elit, sed
                    consectetur ipsum felis sit amet justo. Fusce sed eros
                    varius, blandit quam fermentum, faucibus augue. Donec id
                    varius libero. Sed vehicula nisl facilisis ligula mattis
                    varius.
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
                <Box style={{ minHeight: "101vh" }}>
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
                  <Text>
                    Phasellus scelerisque est ullamcorper laoreet sodales.
                    Pellentesque enim est, ultrices vitae fringilla vitae,
                    aliquet a metus. In vestibulum nunc neque, et dictum tellus
                    feugiat a. Quisque fermentum eget purus a pellentesque.
                    Proin vitae neque ac nulla aliquet faucibus nec in purus.
                    Aliquam odio neque, tempus quis venenatis nec, dignissim vel
                    sem. In vitae pellentesque sem. Mauris pharetra magna a
                    commodo ultrices. Sed a vestibulum mi. Vivamus quis
                    venenatis nunc, congue euismod lacus. Praesent libero leo,
                    malesuada nec porta vel, dapibus non lacus. Nunc hendrerit a
                    ipsum id sagittis. Vestibulum nec eros lectus.
                  </Text>
                  <Text>
                    Nunc quis mi neque. In sem justo, sodales feugiat euismod
                    vitae, mollis ut augue. Duis rutrum elementum lorem quis
                    lacinia. Nam in tristique tortor. Suspendisse potenti.
                    Aenean mi dui, viverra non pretium volutpat, facilisis nec
                    diam. Donec eu viverra enim. Etiam non ex nec nisi ultrices
                    tristique. Nunc commodo hendrerit magna a ultrices. Proin
                    vel neque auctor, mattis eros non, porttitor sem. Ut
                    faucibus pretium luctus. Curabitur cursus ut libero ut
                    accumsan.
                  </Text>
                </Box>
              </Panel>
            ),
            id: "third-section",
          },
        ]}
      />
    </Page>
  );
};

export default PageAnchorNav;
