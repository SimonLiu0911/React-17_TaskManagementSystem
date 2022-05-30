import React from "react";

const List = (props) => {
  const { list } = props;
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
          <tr>
            <td>{project.name}</td>
            <td>{project.personName}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default List;
