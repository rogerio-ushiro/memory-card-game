import "./Notification.css";
import { useEffect, useImperativeHandle, useState } from "react";

const Notification = (props, ref) => {
  const [show, setShow] = useState(false);

  // useImperativeHandle(ref, () => ({
    // showNotification() {
    //   setShow(true);
    // },
  // }));

  useEffect(() => {
    setTimeout(() => {
      setShow(false);
    }, 1200);
  }, [show]);

  return (
    <>
      <div className={`notification ${show ? "show" : ""}`}>
        <h1>+10 points!</h1>
      </div>
      <button onClick={() => setShow(true)}>show!</button>
    </>
  );
};

export default Notification;
