import React from 'react';
import './style.css';
import 'bootstrap/dist/css/bootstrap.css';
export default function demo12(props) {
  const Alert = () => {
    return (
      <>
        <Alert>
          <Alert.Heading>
            This is a success alert which has green background
          </Alert.Heading>
        </Alert>
      </>
    );
  };
  return (
    <>
      <Alert />
    </>
  );
}
