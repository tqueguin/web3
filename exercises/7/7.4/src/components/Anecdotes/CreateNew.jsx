import { Button, Form, Input } from "antd";

const CreateNew = ({ addNew }) => {
  const onFinish = (values) => {
    addNew({
      ...values,
      votes: 0,
    });
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div>
      <h2>create a new anecdote</h2>
      <Form
        name="anecdotes"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 600,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="content"
          name="content"
          rules={[
            {
              required: true,
              message: "Please input content!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="author"
          name="author"
          rules={[
            {
              required: true,
              message: "Please input author!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="info"
          name="info"
          rules={[
            {
              required: true,
              message: "Please input info!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default CreateNew;
