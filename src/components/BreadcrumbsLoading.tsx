import { Skeleton, Space, Layout } from "antd";

export const BreadcrumbsLoading = () => {
  return (
    <Layout style={{ margin: "16px 24px" }}>
      <Space>
        <Skeleton.Button active shape="square" size="small" />
        <Skeleton.Button active shape="square" size="small" />
      </Space>
    </Layout>
  );
};
