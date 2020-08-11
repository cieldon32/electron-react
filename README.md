# mock 数据的开发模式

### 准备工作

- codegen.yml 中的 schema: 'http://localhost:8001/graphql'
- apollo.client.ts 中的 uri: 'http://localhost:8001/graphql'

## 启动步骤

- 单独的终端: yarn mock // 这是启动 mock 服务
- 单独的终端: yarn codegen // 生成 graphql 的 hook
- yarn dev

## 添加测试接口

- yarn mock 之后， 打开http://localhost:8001/editor/
- 在编辑的 tab 下， 添加代码，例如： （ps, 这些代码， 原本是需要后端提供对应的 schema.gql,但是后端还没有准备好， 前端可以先根据已有的，确定的进行开发）

  ```
  // 所有的get请求
  type Query {
    hello: String!
    findUserById(id: String!): User!
    findAllUsers: [User!]!
  }

  // 所有的post请求
  type Mutation {
    login(loginInput: LoginInput!): TokenPayload!
    register(registerInput: RegisterInput!): TokenPayload!
  }
  ```

## 任务说明

https://www.teambition.com/task/5f185948a6cf510022cc81dd
