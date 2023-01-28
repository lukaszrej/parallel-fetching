import { FC } from "react";
import { Layout } from "antd";
import { ContentType } from "../types";
const { Content: AntdHeader } = Layout;

interface ContentProps {
  data: ContentType;
}

export const Content: FC<ContentProps> = ({ data }) => {
  const { content } = data;

  return (
    <AntdHeader
      style={{
        paddingTop: 24,
        margin: 0,
        minHeight: 280,
      }}
    >
      {content}
    </AntdHeader>
  );
};
