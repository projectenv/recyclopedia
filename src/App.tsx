import styles from 'App.module.scss';
import { useEffect } from 'react';
import { Route, Switch, Redirect, useHistory } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from 'app/hooks';
import { initApi, selectStatus, selectArticlesData } from 'app/articlesSlice';
import { selectIsAdmin, logout, loginWithEmailAndPassword, _forceLogin } from 'app/adminSlice';

import { Secrets } from 'secrets';
import Article from "components/Article/Article";

import Header from 'pages/Header/Header';
import Homepage from "pages/Homepage/Homepage";
import IndexPage from "pages/Index/IndexPage";
import Admin from "pages/Admin/Admin";
import { validPageLink } from 'utils/functions';

import Form from 'components/Form/Form';
import Button from 'components/Form/Button'

function RegisterPage(_: {}) {
  const dispatch = useAppDispatch();
  const history = useHistory();

  return (
    <>
      <h1>Register a New Account</h1>
      <Form
        inputItems={{
          email: {
            selectAllOnFocus: true,
            placeholder: 'Email',
            required: true,
          },
          password: {
            selectAllOnFocus: true,
            placeholder: 'Password',
            required: true,
          },
          passwordConfirmation: {
            selectAllOnFocus: true,
            placeholder: 'Confirm Password',
            required: true,
          }
        }}
        submitFn={async (input) => {
          alert("TODO, register actual account.");
        }}
      >
        <Button type='submit'>Register Account</Button>
      </Form>
    </>
  );
}

function LoginPage(_: {}) {
  const dispatch = useAppDispatch();
  const history = useHistory();
  const isAdmin = useAppSelector(selectIsAdmin);
  return (
    <>
      <h1>Login With Your Account!</h1>
      <Form
        inputItems={{
          email: {
            selectAllOnFocus: true,
            placeholder: 'Email',
            required: true,
          },
          password: {
            selectAllOnFocus: true,
            placeholder: 'Password',
            required: true,
          }
        }}
        submitFn={async (input) => {
          const loginResult = (await dispatch(loginWithEmailAndPassword(input))).payload;
          console.log(loginResult);

          if (loginResult !== "anonymous") {
            history.push('/');
          } else {
            alert('bad login');
          }
        }}
      >
        <Button type='submit'>Login</Button>
      </Form>
    </>
  );
}

function App() {
  const articlesData = useAppSelector(selectArticlesData);
  const isAdmin = useAppSelector(selectIsAdmin);

  return (
    <>
      <Header />

      <main id={styles.main}>
        <Switch>
          <Route exact path='/index'>
            <IndexPage />
          </Route>
          <Route exact path='/'>
            <Homepage articlesData={articlesData} />
          </Route>
          <Route exact path='/admin'>
            {
              isAdmin
                ? <Admin currentArticle={undefined} />
                : <Redirect to='/' />
            }
          </Route>

          {/*
            For obvious reasons getting ALL the articles is kind of dumb. I believe it
            would be better if we fetched articles on the 404 path.

            Basically we don't generate the routes here. Rather we kind of hook them up on demand.

            So the index is still generated with links, and only as much as we need to display a page.

            Basically that means I have to do something like:

            bucketSize  = the amount of things we consider to be on a "page"
            bucketIndex = the "page"
            getArticleInformationPageful(bucketSize: number, bucketIndex: number);

            IE:
            It's like:
              getAllArticles().slice(bucketIndex * bucketSize, (bucketIndex+1) * bucketSize);
              but since it's on the server side, it reduces the load to send all of them.

            Then in the wildcard route we simply try to make the article component request the article
            in the URL. If it can't do it, then we just display normal 404.

            We only have 1 million free api requests from MongoDB so this might ironically be worse since
            each article will take a request from the API (even though it uses less storage space on the
            client side).
          */}

          {((isAdmin) ?
            articlesData.articles :
            articlesData.articles.filter((article) => !article.draftStatus))
            .map((article) =>
              <Route key={article.name} exact path={validPageLink(article.name)}>
                <Article article={article} />
              </Route>
            )}
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/register">
            <RegisterPage />
          </Route>
          <Route path='*'>404</Route>
        </Switch>
      </main>
    </>
  );
}

function InitializingApp() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(initApi(Secrets.RECYCLOPEDIA_APPLICATION_ID));
  }, [dispatch]);

  const status = useAppSelector(selectStatus);

  if (status === 'failed')
    return <p>MongoDB is probably offline. Crap.</p>;

  if (status === 'succeed')
    return <App />;

  return <p>Please wait! Loading Recyclopedia...</p>;
}

export default InitializingApp;
