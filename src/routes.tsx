import React from "react";
import { RouteComponentProps, Redirect } from "@reach/router";
import { PageProps } from "./models";

import { pages, tabs } from "./data/";

type ViewProps = RouteComponentProps & PageProps;
const View: React.FC<ViewProps> = ({ comp: Comp, ...rest }) => {
  return <Comp {...rest} />;
};

const routes = [
  pages.map(({ name, url, comp, ...rest }) => (
    <View path={url} key={name} comp={comp} {...rest} />
  )),
  tabs.map(({ name, url, comp, ...rest }) => (
    <View path={url} key={name} comp={comp} {...rest} />
  )),
  <Redirect key="notfound" from="*" to="/" default noThrow />,
];

export default routes;