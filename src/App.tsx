import { Layout } from "antd";
import { Sidebar } from "./components/Sidebar";
import { SidebarLoading } from "./components/SidebarLoading";
import { Skeleton } from "./components/Skeleton";
import { useHeader } from "./contexts/HeaderContext";
import { useSidebar } from "./contexts/SidebarContext";

const { Header } = Layout;

export const App = () => {
  const header = useHeader();
  const sidebar = useSidebar();

  if (!header) return <Skeleton />;

  return (
    <Layout>
      <Header style={{ color: "#f5f5f5" }}>{header.title}</Header>
      <Layout>
        {sidebar ? <Sidebar data={sidebar} /> : <SidebarLoading />}
      </Layout>
    </Layout>
  );
};
