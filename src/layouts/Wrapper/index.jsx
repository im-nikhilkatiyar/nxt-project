import styles from './wrapper.module.scss';
import Sidebar from '@/components/Sidebar';

const Wrapper = ({ children }) => {
    return (
        <div className={styles.container}>
            <Sidebar />
            <div className={styles.content}>{children}</div>
        </div>
    );
};

export default Wrapper;
