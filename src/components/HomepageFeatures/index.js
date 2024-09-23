import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Fácil de Usar',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
       O Docusaurus foi projetado desde o início para ser facilmente instalado e usado para colocar seu site em funcionamento rapidamente.
      </>
    ),
  },
  {
    title: 'Focado no que importa',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        O Docusaurus permite que você se concentre em seus documentos, e nós faremos as tarefas. Ir
        à frente e mova seus documentos para o <code>Docs</code> diretor.
      </>
    ),
  },
  {
    title: 'Site Criado em React',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Estenda ou personalize o layout do seu site reutilizando o React. O Docusaurus pode ser estendido enquanto reutiliza o mesmo cabeçalho e rodapé.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
