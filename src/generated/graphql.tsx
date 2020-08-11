import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
const gql = Apollo.gql;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: any;
};

export type Repo = {
  __typename?: 'Repo';
  id: Scalars['ID'];
  title: Scalars['String'];
  createAt: Scalars['DateTime'];
  updateAt: Scalars['DateTime'];
  articleNum: Scalars['Float'];
  user?: Maybe<User>;
};


export type User = {
  __typename?: 'User';
  id: Scalars['ID'];
  nick: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
};

export type TokenPayload = {
  __typename?: 'TokenPayload';
  token?: Maybe<Scalars['String']>;
};

export type Article = {
  __typename?: 'Article';
  id: Scalars['ID'];
  title: Scalars['String'];
  type: Scalars['String'];
  contentSize: Scalars['Float'];
  createAt: Scalars['DateTime'];
  updateAt: Scalars['DateTime'];
  readAt: Scalars['DateTime'];
  relationNum: Scalars['Float'];
  isTop: Scalars['Boolean'];
  deleted: Scalars['Boolean'];
  userUuid: Scalars['String'];
  repo?: Maybe<Repo>;
  block?: Maybe<Scalars['String']>;
};

export type Block = {
  __typename?: 'Block';
  id: Scalars['ID'];
  type: Scalars['String'];
  content: Scalars['String'];
  blockSize: Scalars['Float'];
  createAt: Scalars['DateTime'];
  updateAt: Scalars['DateTime'];
  blockLevel: Scalars['Float'];
  deleted: Scalars['Boolean'];
  userUuid: Scalars['String'];
  article?: Maybe<Article>;
  parentUuid: Scalars['String'];
  prevUuid: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  hello: Scalars['String'];
  findUserById: User;
  findAllUsers: Array<User>;
  findRepoById: Repo;
  findAllRepos: Array<Repo>;
  findBlocksByArticleId: Array<Block>;
  findArticleById: Article;
  findArticlesByRepoId: Array<Article>;
};


export type QueryFindUserByIdArgs = {
  id: Scalars['String'];
};


export type QueryFindRepoByIdArgs = {
  id: Scalars['String'];
};


export type QueryFindBlocksByArticleIdArgs = {
  articleId: Scalars['String'];
};


export type QueryFindArticleByIdArgs = {
  id: Scalars['String'];
};


export type QueryFindArticlesByRepoIdArgs = {
  repoId: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  login: TokenPayload;
  register: TokenPayload;
  createRepo: Repo;
  updateRepo: Repo;
  createBlock: Block;
  createArticle: Article;
};


export type MutationLoginArgs = {
  loginInput: LoginInput;
};


export type MutationRegisterArgs = {
  registerInput: RegisterInput;
};


export type MutationCreateRepoArgs = {
  RepoInput: RepoInput;
};


export type MutationUpdateRepoArgs = {
  id: Scalars['String'];
  RepoInput: RepoInput;
};


export type MutationCreateBlockArgs = {
  block: BlockInput;
  articleId: Scalars['String'];
};


export type MutationCreateArticleArgs = {
  articleInput: ArticleInput;
  repoId: Scalars['String'];
};

export type LoginInput = {
  nick: Scalars['String'];
  password: Scalars['String'];
};

export type RegisterInput = {
  name: Scalars['String'];
  password: Scalars['String'];
  role: Scalars['String'];
  birthday?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['Float']>;
  email?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  photoID?: Maybe<Scalars['String']>;
};

export type RepoInput = {
  title: Scalars['String'];
};

export type BlockInput = {
  content: Scalars['String'];
  blockType: Scalars['String'];
  parentUuid?: Maybe<Scalars['String']>;
  prevUuid?: Maybe<Scalars['String']>;
};

export type ArticleInput = {
  title: Scalars['String'];
  articleType: Scalars['String'];
  contentSize?: Maybe<Scalars['Float']>;
};

export type HelloQueryVariables = Exact<{ [key: string]: never; }>;


export type HelloQuery = (
  { __typename?: 'Query' }
  & Pick<Query, 'hello'>
);


export const HelloDocument = gql`
    query hello {
  hello
}
    `;

/**
 * __useHelloQuery__
 *
 * To run a query within a React component, call `useHelloQuery` and pass it any options that fit your needs.
 * When your component renders, `useHelloQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useHelloQuery({
 *   variables: {
 *   },
 * });
 */
export function useHelloQuery(baseOptions?: Apollo.QueryHookOptions<HelloQuery, HelloQueryVariables>) {
        return Apollo.useQuery<HelloQuery, HelloQueryVariables>(HelloDocument, baseOptions);
      }
export function useHelloLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<HelloQuery, HelloQueryVariables>) {
          return Apollo.useLazyQuery<HelloQuery, HelloQueryVariables>(HelloDocument, baseOptions);
        }
export type HelloQueryHookResult = ReturnType<typeof useHelloQuery>;
export type HelloLazyQueryHookResult = ReturnType<typeof useHelloLazyQuery>;
export type HelloQueryResult = Apollo.QueryResult<HelloQuery, HelloQueryVariables>;