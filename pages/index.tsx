import type { NextPage } from 'next'
import styles from './style.module.scss';
import Container from 'components/Container';
import Header from 'components/Header';
import CalculatorContainer from 'containers/CalculatorContainer';

const Home: NextPage = () => {
  return (
      <>
        <main className={styles.main}>
            <Header />

            <Container>
                <CalculatorContainer className={styles.calculatorContainer} />
            </Container>
        </main>
      </>
  );
}

export default Home
