import "./Notification.css";
import { forwardRef, useEffect, useImperativeHandle, useState } from "react";

const Notification = forwardRef((props, ref) => {
  const [show, setShow] = useState(false);

  useImperativeHandle(ref, () => ({
    showNotification() {
      setShow(true);
    },
  }));

  useEffect(() => {
    setTimeout(() => {
      setShow(false);
    }, 1000);
  }, [show]);

  return (
    <>
      <div className={`notification ${show ? "show" : ""}`}>
        <h1>+10 points!</h1>
      </div>
      {/* <button onClick={() => setShow(true)}>show!</button> */}
    </>
  );
});

export default Notification;
