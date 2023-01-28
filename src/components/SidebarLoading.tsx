import { Layout, Skeleton } from "antd";
const { Sider } = Layout;

export const SidebarLoading = () => {
  return (
    <Sider width={200} style={{ padding: "16px" }}>
      <Skeleton.Button
        active
        block
        size="small"
        style={{ marginBottom: "32px" }}
      />
      <Skeleton.Button active block size="small" />
    </Sider>
  );
};
