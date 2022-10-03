Pages 내에서 사용 할 페이지 JSX를 여기서 작성해주세요.
user/[idx] 페이지 보면 template만 넣고 있죠?
pages내에서는 로직을 작성하지 마시고, serverSideProps나 혹시 필요시

```javascript
const View = ()=> {
    return (
    <Layout>
        <Template>
    </Layout>
    )
}
export const getServerSideProps = ()=>{}=
```
