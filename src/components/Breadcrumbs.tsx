import { FC } from "react";
import { Breadcrumb as AntdBreadcrumb, Layout, Skeleton } from "antd";
import { BreadcrumbType, BreadcrumbsType } from "../types";
import { useContent } from "../contexts/ContentContext";
import { Content } from "./Content";

interface BreadcrumbsProps {
  data: BreadcrumbsType;
}

export const Breadcrumbs: FC<BreadcrumbsProps> = ({ data }) => {
  const content = useContent();
  const { breadcrumbs } = data;

  return (
    <Layout style={{ margin: "16px 24px" }}>
      <AntdBreadcrumb>
        {breadcrumbs.map((breadcrumb: BreadcrumbType) => {
          return (
            <AntdBreadcrumb.Item key={breadcrumb.id}>
              {breadcrumb.label}
            </AntdBreadcrumb.Item>
          );
        })}
      </AntdBreadcrumb>

      {content ? (
        <Content data={content} />
      ) : (
        <Layout style={{ margin: "16px 0", width: 800 }}>
          <Skeleton active paragraph={{ rows: 4 }} />
        </Layout>
      )}
    </Layout>
  );
};
