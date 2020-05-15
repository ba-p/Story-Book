import React, { Component } from "react";
import { Table, Avatar } from "antd";
import PropTypes from 'prop-types';

class BookList extends Component {
  render() {
    const { Column } = Table;
    return (
      <Table dataSource={this.props.books} pagination={false}>
        <Column
          title="Avatar"
          dataIndex="coverUrl"
          key="avatar"
          render={avatar => (
            <>
              {
                <Avatar src={avatar} key={avatar}>
                  {avatar}
                </Avatar>
              }
            </>
          )}
        />

        <Column title="Title" dataIndex="title" key="title" />
        <Column title="Description" dataIndex="description" key="description" />
      </Table>
    );
  }
}
BookList.propTypes = {
    _id : PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    /** If don't have avatar set default */
    coverUrl: PropTypes.string
}

export default BookList;
