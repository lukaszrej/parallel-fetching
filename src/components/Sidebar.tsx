import { FC, createElement } from "react";
import { Layout, Menu } from "antd";
import { LaptopOutlined } from "@ant-design/icons";
import { useBreadcrumbs } from "../contexts/BreadcrumbsContext";
import { SidebarType } from "../types";
import { Breadcrumbs } from "./Breadcrumbs";
import { BreadcrumbsLoading } from "./BreadcrumbsLoading";

const { Sider } = Layout;

interface SidebarProps {
  data: SidebarType;
}

export const Sidebar: FC<SidebarProps> = ({ data }) => {
  const breadcrumbs = useBreadcrumbs();

  const items = [LaptopOutlined].map((icon, index) => {
    const key = String(index + 1);

    return {
      key: `sub${key}`,
      icon: createElement(icon),
      label: data.label,
      children: data.options.map((option, index) => {
        return {
          key: index,
          label: option,
        };
      }),
    };
  });

  return (
    <>
      <Sider width={200}>
        <Menu
          mode="inline"
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          style={{ height: "100%", borderRight: 0 }}
          items={items}
        />
      </Sider>

      {breadcrumbs ? (
        <Breadcrumbs data={breadcrumbs} />
      ) : (
        <BreadcrumbsLoading />
      )}
    </>
  );
};
