import { ReactNode } from "react";

export type HeaderType = {
  title: string;
};

export type ContentType = {
  content: string;
};

export type BreadcrumbType = {
  id: number;
  label: string;
};

export type BreadcrumbsType = {
  breadcrumbs: BreadcrumbType[];
};

type Options = {
  option: string;
  index: number;
};

export type SidebarType = {
  label: string;
  options: Options[];
};

export type AllDataType = HeaderType &
  ContentType &
  BreadcrumbsType &
  SidebarType;

export interface ContextProps {
  children: ReactNode;
}
