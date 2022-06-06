import React from "react";
import { User } from "./searchPanel";
import { Table } from "antd";
import * as dayjs from 'dayjs'

interface Project {
  id: string;
  name: string;
  personId: string;
  pin: boolean;
  organization: string;
  created: number;
}

interface ListProps {
  list: Project[];
  users: User[];
}

const List = (props: ListProps) => {
  const { list, users } = props;

  return (
    <Table
      pagination={false}
      columns={[
        {
          title: "名稱",
          dataIndex: "name",
          // sorter: (a, b) => a.name.localCompare(b.name)
        },
        {
          title: "部門",
          dataIndex: "organization"
        },
        {
          title: "負責人",
          render(value, project) {
            return (
              <span>
                {
                  users.find((user: User) => user.id === project.personId)?.name || "未知"
                }
              </span>
            )
          }
        },
        // {
        //   title: "創建時間",
        //   dataIndex: "created",
        //   render(value, project) {
        //     return (
        //       <span>
        //         {project.created ? dayjs(new Date(project.created)).format('YYYY-MM-DD') : '無'}
        //       </span>
        //     )
        //   }
        // }
      ]}
      dataSource={list}
    >
    </Table>
  );
};

export default List;
