import styles from 'pages/Index/IndexPage.module.scss';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ApplicationContext } from 'App';
import { validPageLink } from 'utils/functions';


function Index({ articlesData }) {
  const context = useContext(ApplicationContext);
  return (
    <div>
      {
        (context.isAdmin) ?
          articlesData.articles.map(({ name, draftStatus }) => (
            <p key={name} >
              <Link to={validPageLink(name)}>
                {(draftStatus) ? "[DRAFT*] " + name : name}
              </Link>
            </p>
          ))
          :
          // I should technically not check for undefined, but okay.
          articlesData.articles
            .filter(({ draftStatus }) => draftStatus === false || draftStatus === undefined)
            .map(({ name }) => (
              <p key={name} >
                <Link to={validPageLink(name)}>
                  {name}
                </Link>
              </p>
            ))
      }
    </div>
  );
}

function IndexPage({ articlesData }) {
  return (
    <>
      <Index articlesData={articlesData} />
    </>
  );
}

export default Index;
