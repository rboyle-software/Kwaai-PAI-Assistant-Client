import styles from './auth-route.module.scss';


export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {

  return (
    <div className={styles.authContainer}>
      {children}
    </div>
  )
}