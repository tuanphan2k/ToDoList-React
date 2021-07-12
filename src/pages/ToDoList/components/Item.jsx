import { useState } from 'react';
import { Row, Col, Card, Button } from 'antd';
import history from '../../../utils/history';

function Item(props) {
  const { title, description, index, deleteTask,dateTime } = props;

  const [isShowDescription, setIsShowDescription] = useState(false);
  return (
    <Row>
      <Col span={24}>
        <Card size="small"
          title=
          {
            <Button
              type="primary"
              onClick={() => history.push(`/task/${index}`)}
            >
              Detail
            </Button>
          }
          extra=
          {
            <Button
              type="primary"
              onClick={() => setIsShowDescription(!isShowDescription)}
            >
              {isShowDescription ? 'Hide' : 'Show'}
            </Button>
          }
          cover=
          {
            <Button
              type="dashed"
              onClick={() => deleteTask(index)}
            >
              Remove Note
          </Button>}
          style={{ marginTop: '15px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between'}}>
            <h3>Title: {title}</h3>
            <p>Recorded: {dateTime}</p>
          </div>
          {isShowDescription ? <h4>Details: {description}</h4> : null}
        </Card>
      </Col>
    </Row>
  );
}

export default Item;
