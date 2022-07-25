import React, {useRef} from 'react';
import styles from './styles/SubscribeButtonStyles.module.css';

function SubscribeButton() {
    const subscribeBtn = useRef(null);

    const onSubscribe = () => {
        subscribeBtn.current.style.backgroundColor = "rgb(211, 211, 211, 0.5)";
        subscribeBtn.current.style.color = "gray";
        subscribeBtn.current.style.border = "1px solid rgb(211, 211, 211, 0.5)";
        subscribeBtn.current.innerHTML = "SUBSCRIBED";
        subscribeBtn.current.style.cursor = "default";
    };

    return (
        <button className={styles.subscribeBtn} ref={subscribeBtn} onClick={onSubscribe}>
            SUBSCRIBE
        </button>
    )
}

export default SubscribeButton