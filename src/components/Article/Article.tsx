import styles from 'components/Article/Article.module.scss';
import { useState } from 'react';
import { Route, useHistory } from 'react-router-dom';

import { useAppSelector, useAppDispatch } from 'app/hooks';
import { deleteArticle, Article } from 'app/articlesSlice';
import { selectIsAdmin } from 'app/adminSlice';

import { validPageLink } from 'utils/functions';
import { preprocessMarkdown } from 'utils/preprocessMarkdown';

import MarkdownRender from "components/Article/MarkdownRender";
import Admin from 'pages/Admin/Admin';



function ArticleComponent({
  article
}: {
  article: Article;
}) {
  const history = useHistory();
  const dispatch = useAppDispatch();
  const isAdmin = useAppSelector(selectIsAdmin);

  const { name, content } = article;
  const [adminEditView, updateAdminEditView] = useState(false);

  return (
    <Route key={article.name} exact path={validPageLink(article.name)}>
      {
        isAdmin && (
          <>
            <button
              onClick={() => {
                dispatch(deleteArticle(name));
                history.push('/');
              }}
            >
              Delete Page
            </button>
            <button
              onClick={() => updateAdminEditView(!adminEditView)}
            >
              Edit This Page
            </button>
          </>
        )
      }
      {(
        isAdmin && adminEditView
      ) ? (
        <Admin
          currentArticle={article}
        />
      ) : (
        <>
          <h1 className={styles.title}> {name} </h1>
          <MarkdownRender className={styles.article}>
            {preprocessMarkdown(content)}
          </MarkdownRender>
        </>
      )}
    </Route>
  );
}

export default ArticleComponent;