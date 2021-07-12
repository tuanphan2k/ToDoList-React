import { useEffect } from 'react';
import { Row, Col, Card } from 'antd';
import { connect } from 'react-redux';

import { getTaskDetailAction } from '../../redux/actions';

function TaskDetailPage(props) {
  const { match, getTaskDetail, taskDetail } = props;
  const index = match.params.index;

  useEffect(() => {
    getTaskDetail({ index: index });
  }, []);

  return (
    <div style={{ width: 900, margin: '16px auto 0' }}>
      <Card size="small">
        <Row>
          <Col span={18}><h2>{taskDetail.title}</h2></Col>
          <Col span={6}><p>Recorded: {taskDetail.dateTime}</p></Col>
        </Row>
        <div style={{ borderTopColor: 'black', borderTop: '1px', borderTop: 'solid' }}>
          <Row>
            <Col span={4}>Details:</Col>
            <Col span={20}>{taskDetail.description}</Col>
          </Row>
        </div>
      </Card>
    </div>
  );
}

const mapStateToProps = (state) => {
  const { taskDetail } = state.taskReducer;
  return {
    taskDetail: taskDetail,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    getTaskDetail: (params) => dispatch(getTaskDetailAction(params)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskDetailPage);
