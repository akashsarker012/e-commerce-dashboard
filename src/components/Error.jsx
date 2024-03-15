import { Alert, Button, Divider } from "antd";
import React from "react";
import { Link } from "react-router-dom";

export default function Error() {
  return (
    <div>
      <Alert
        message="Error"
        description="This is an error message about copywriting."
        type="error"
        showIcon />
<Divider></Divider>
      <Button type="primary" danger>
        <Link to='/'>
        
      Back To Home
        </Link>
      </Button>
    </div>
  );
}
