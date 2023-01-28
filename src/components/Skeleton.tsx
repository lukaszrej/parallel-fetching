import { Skeleton as AntdSkeleton } from "antd";
import { Layout } from "antd";

export const Skeleton = () => {
  return (
    <Layout style={{ margin: "16px 24px" }}>
      <AntdSkeleton active paragraph={{ rows: 4 }} />
    </Layout>
  );
};
