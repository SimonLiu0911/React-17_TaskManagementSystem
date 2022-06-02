import React from "react";
import { User } from "./searchPanel";

interface Project {
  id: string;
  name: string;
  personId: string;
  pin: boolean;
  organization: string;
}

interface ListProps {
  list: Project[];
  users: User[];
}

const List = (props: ListProps) => {
  const { list, users } = props;

  return (
    <table>
      <thead>
        <tr>
          <th>名稱</th>
          <th>負責人</th>
        </tr>
      </thead>
      <tbody>
        {list.map((project) => (
          <tr key={project.id}>
            <td>{project.name}</td>
            <td>{users.find(user => user.id === project.personId)?.name || "未知"}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default List;
