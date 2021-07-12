import { Row, Col, Card, Form, Input, Button } from 'antd';
import { connect } from 'react-redux';

import Item from './components/Item';

import {
  addTaskAction,
  deleteTaskAction,
} from '../../redux/actions';

function ToDoListPage(props) {
  const { toDoList, addTask, deleteTask } = props;

  const today = new Date();
  const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
  const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  const dateTime = date + ' ' + time;

  function handleAddTask(values) {
    addTask(values);
  }

  function handleDeleteTask(index) {
    deleteTask({ index: index })
  }

  function renderToDoList() {
    console.log(toDoList)
    return toDoList.map((item, index) => {
      return (
        <Item
          key={index}
          title={item.title}
          description={item.description}
          index={index}
          dateTime={item.dateTime}
          deleteTask={handleDeleteTask}
        />
      );
    })
  }

  return (
    <div style={{ paddingTop: '15px' }}>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <h2>Timestamped Notes App</h2>
      </div>
      <Row gutter={24} style={{ maxWidth: 1000, width: '100%', margin: '16px auto 0' }}>
        <Col span={24}>
          <Card title="Add note" size="small">
            <Form
              layout="vertical"
              name="addTask"
              initialValues={{ title: '', description: '' }}
              onFinish={(values) => handleAddTask({ ...values, dateTime: dateTime })}
            >
              <Form.Item
                name="title"
                rules={[{ required: true, message: 'Please input your title!' }]}
              >
                <Input placeholder="Note Tile" />
              </Form.Item>

              <Form.Item
                name="description"
                rules={[{ required: true, message: 'Please input your description!' }]}
              >
                <Input placeholder="Note Details" />
              </Form.Item>

              <Button type="primary" htmlType="submit" block>
                Add
              </Button>
            </Form>
          </Card>
        </Col>
        <Col span={24}>
          <div style={{ borderTopColor: 'black', borderTop: '1px', borderTop: 'solid' }}>
            {renderToDoList()}
          </div>
        </Col>
      </Row>
    </div>
  );
}

const mapStateToProps = (state) => {
  const { toDoList } = state.taskReducer;
  return {
    toDoList: toDoList,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTask: (params) => dispatch(addTaskAction(params)),
    deleteTask: (params) => dispatch(deleteTaskAction(params)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ToDoListPage);
