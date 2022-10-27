import Head from 'next/head';
import { GetStaticProps, GetStaticPaths } from 'next';
import { useAppSelector, useAppDispatch } from '../../store/store-hooks';

import Layout from '../../components/layout';
import DateTimeFormat from '../../components/date';
import { getAllPostIds, getPostData } from '../../utils/posts';
import utilStyles from '../../styles/utils.module.scss';
import { incrementCartCount } from '../../store/cart/CartSlice';

export const getStaticPaths:GetStaticPaths = async() => {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export const getStaticProps: GetStaticProps = async ({ params }: { params: { id: string } }) => {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}


export default function Post({ postData }: {
  postData: {
    title: string
    date: string
    contentHtml: string
  }
}) {
  const cartCount = useAppSelector((state) => state.cart.cartCount);
  const dispatch = useAppDispatch();
  return (
    <Layout>
      <Head>
        <title>{cartCount} {postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <DateTimeFormat dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
      <button onClick={() => {dispatch(incrementCartCount())}}>
        Increment Cart {cartCount}
      </button>
    </Layout>
  );
}
