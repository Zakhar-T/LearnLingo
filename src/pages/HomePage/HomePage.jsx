import Layout from '../../components/Layout';
import Hero from '../../components/Hero/Hero';
import Stats from '../../components/Stats/Stats';

export default function HomePage() {
  return (
    <Layout>
      <section className="container">
        <Hero />
        <Stats />
      </section>
    </Layout>
  );
}
